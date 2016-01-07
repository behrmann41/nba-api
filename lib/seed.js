var fs = require('fs')
var csv = require('csv');
var R = require('ramda');
var filename = './Sheet1-Table1.csv'
var input = fs.readFileSync(filename);
var models = require('../db/models/index');
var ftToInches = require('./feetToInches.js');

// parse the csv into an array of objects
// determine the aggregates
//  how many non-zero heights in inches?
//  how many non-zero weights?
// sort by weight and iterate, and add their percentile to the object
// sort by height and iterate, and add their percentile to the object
// _then_ insert this precomputed data into the db

var testObj = [ {key1: "1", key2: "6"},
                {key1: "10", key2: "2"},
                {key1: "11", key2: "7"},
                {key1: "11", key2: "8"},
                {key1: "11", key2: "7"},
                {key1: "3", key2: "9"},
                {key1: "20", key2: "0"}]

var getVal = R.curry(function (key, object) {
  return object[key];
});
// array of Objects -> array of value at object[key]

var unique = R.curry(function (key, collection) {
  return collection.reduce(function(accumulation, currentObj) {
    if(accumulation.indexOf(currentObj[key]) == -1 && currentObj[key] != "0") {
      accumulation.push(currentObj[key]);
    }
    return accumulation;
  }, []);
});


var uniqueKey1 = unique("key1");
var uniqueKey2 = unique("key2");

var sort = R.curry(function (fn, array) {
  return array.sort(fn);
});

var low = function (x, y) {
  return x - y;
};

var high = function(x, y) {
  return y - x;
};

var sortHighestFirst = sort(high);
var sortLowestFirst = sort(low);

var getPos = R.curry(function (collection, n) {
  return collection.indexOf(n);
});

var percentage = R.curry(function (collection, position) {
  return position / collection.length;
})

// var sortedListKey1 = R.compose(sortLowestFirst, uniqueKey1);
// var getPosOfSorted = R.compose(getPos, sortHighestFirst, uniqueKey1);

// console.log(percentage(sortedListKey1, getPosOfSorted("11")));
// // TESTS:

// testObj.forEach(function (item) {
//   for (attr in item){
//     if (item[attr] != 0){
//       item[attr + "percentage"] = percentage(sortLowestFirst(unique(attr,testObj)), getPos(sortLowestFirst(unique(attr,testObj)), item[attr]));
//     }
//   }
// })


// console.log(getPos(sortLowestFirst(unique("key1",testObj)), "11"));
// console.log(percentage(sortLowestFirst(uniqueKey1(testObj)), getPos(sortLowestFirst(uniqueKey1(testObj)), "11")));

// sorted, no zeros, no duplicates
// console.log(uniqueKey1(testObj)); // unsorted, no zeros, no duplicates
// console.log(sortLowestFirst(uniqueKey2(testObj))); // sorted, no zeroes, no duplicates
// console.log(uniqueKey2(testObj)); // unsorted, no zeroes, no duplicates

csv.parse(input, {delimiter: ","}, function (err, data) {

  var output = data.map(function (player) {
     return player.map(function (attr) {
      return (attr === 'NA') ? 0 : (attr === "0" || attr === "") ? 0 : attr;
    })
  })
  var playerArr = [];
  output.forEach(function (player) {
    playerArr.push({
      name: player[0],
      draftYear: player[1],
      heightWithOutShoes: player[2],
      heightwoshoesinches: ftToInches(player[2]),
      heightWithShoes: player[3],
      heightinches: ftToInches(player[3]),
      weight: player[4],
      wingspan: player[5],
      wingspaninches: ftToInches(player[5]),
      reach: player[6],
      reachinches: ftToInches(player[6]),
      bodyFat: parseFloat(player[7]),
      handLength: player[8],
      handWidth: player[9],
      noStepVert: player[10],
      noStepVertReach: player[11],
      nostepvertreachinches: ftToInches(player[11]),
      maxVert: parseFloat(player[12]),
      maxVertReach: player[13],
      maxvertreachinches: ftToInches(player[13]),
      bench: player[14],
      agility: parseFloat(player[15]),
      sprint: parseFloat(player[16]),
      rank: player[17],
      draftPos: player[18]
    })
  })

  var finalArr = []
  for (var i = 1; i < 500; i++) {
    finalArr.push(playerArr[i])
  }


  finalArr.forEach(function (item) {
    for (attr in item){
      if (attr === 'sprint'){
        if (item[attr] == 0){
          item[attr + "percentage"] = 0;
        } else {
          item[attr + "percentage"] = percentage(sortHighestFirst(unique(attr,playerArr)), getPos(sortHighestFirst(unique(attr,playerArr)), item[attr])).toFixed(2);
        }
      } else if (attr !== 'name' && attr !== 'draftYear' && attr !== 'draftPos' && attr !== 'heightWithOutShoes' && attr !== 'heightWithShoes' && attr !== 'wingspan' && attr !== 'reach' && attr !== 'noStepVertReach' && attr !== 'maxVertReach'){
        if (item[attr] == 0){
          item[attr + "percentage"] = 0;
        } else {
          item[attr + "percentage"] = percentage(sortLowestFirst(unique(attr,playerArr)), getPos(sortLowestFirst(unique(attr,playerArr)), item[attr])).toFixed(2)
        }
      }
    }
  })
  console.log(finalArr);

  // output.forEach(function (item) {
  //   models.players.create({
  //     name: item[0],
  //     draftYear: item[1],
  //     heightWithOutShoes: item[2],
  //     heightwoshoesinches: ftToInches(item[2]),
  //     heightWithShoes: item[3],
  //     heightinches: ftToInches(item[3]),
  //     weight: item[4],
  //     wingspan: item[5],
  //     wingspaninches: ftToInches(item[5]),
  //     reach: item[6],
  //     reachinches: ftToInches(item[6]),
  //     bodyFat: parseFloat(item[7]),
  //     handLength: item[8],
  //     handWidth: item[9],
  //     noStepVert: item[10],
  //     noStepVertReach: item[11],
  //     nostepvertreachinches: ftToInches(item[11]),
  //     maxVert: parseFloat(item[12]),
  //     maxVertReach: item[13],
  //     maxvertreachinches: ftToInches(item[13]),
  //     bench: item[14],
  //     agility: parseFloat(item[15]),
  //     sprint: parseFloat(item[16]),
  //     rank: item[17],
  //     draftPos: item[18]
  //   })
  // })
})
