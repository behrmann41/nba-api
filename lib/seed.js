var fs = require('fs')
var csv = require('csv');
var R = require('ramda');
var filename = './Sheet1-Table1.csv'
var input = fs.readFileSync(filename);
var models = require('../db/models/index');
var ftToInches = require('./feetToInches.js');

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
      if (attr === 'sprint' || attr === 'bodyFat'){
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
    models.players.create({
      name: item.name,
      draftYear: item.draftYear,
      heightWithOutShoes: item.heightWithOutShoes,
      heightwoshoesinches: item.heightwoshoesinches,
      heightWithShoes: item.heightWithShoes,
      heightinches: item.heightinches,
      weight: item.weight,
      wingspan: item.wingspan,
      wingspaninches: item.wingspaninches,
      reach: item.reach,
      reachinches: item.reachinches,
      bodyFat: item.bodyFat,
      handLength: item.handLength,
      handWidth: item.handWidth,
      noStepVert: item.noStepVert,
      noStepVertReach: item.noStepVertReach,
      nostepvertreachinches: item.nostepvertreachinches,
      maxVert: item.maxVert,
      maxVertReach: item.maxVertReach,
      maxvertreachinches: item.maxvertreachinches,
      bench: item.bench,
      agility: item.agility,
      sprint: item.sprint,
      rank: item.rank,
      draftPos: item.draftPos,
      heightwoshoesinchespercentage: parseFloat(item.heightwoshoesinchespercentage),
      heightinchespercentage: parseFloat(item.heightinchespercentage),
      weightpercentage: parseFloat(item.weightpercentage),
      wingspaninchespercentage: parseFloat(item.wingspaninchespercentage),
      reachinchespercentage: parseFloat(item.reachinchespercentage),
      bodyFatpercentage: parseFloat(item.bodyFatpercentage),
      handLengthpercentage: parseFloat(item.handLengthpercentage),
      handWidthpercentage: parseFloat(item.handWidthpercentage),
      noStepVertpercentage: parseFloat(item.noStepVertpercentage),
      nostepvertreachinchespercentage: parseFloat(item.nostepvertreachinchespercentage),
      maxVertpercentage: parseFloat(item.maxVertpercentage),
      maxvertreachinchespercentage: parseFloat(item.maxvertreachinchespercentage),
      benchpercentage: parseFloat(item.benchpercentage),
      agilitypercentage: parseFloat(item.agilitypercentage),
      sprintpercentage: parseFloat(item.sprintpercentage),
      rankpercentage: parseFloat(item.rankpercentage)
    })
  })
})
