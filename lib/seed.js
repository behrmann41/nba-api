var fs = require('fs')
var csv = require('csv');
var filename = './Sheet1-Table1.csv'
var input = fs.readFileSync(filename);
var models = require('../db/models/index');
var ftToInches = require('./feetToInches.js');

csv.parse(input, {delimiter: ","}, function (err, data) {
  var output = data.map(function (player) {
     return player.map(function (attr) {
      return (attr === 'NA') ? 0 : (attr === "0" || attr === "") ? 0 : attr;
    })
  })
  output.forEach(function (item) {
    models.players.create({
      name: item[0],
      draftYear: item[1],
      heightWithOutShoes: item[2],
      heightwoshoesinches: ftToInches(item[2]),
      heightWithShoes: item[3],
      heightinches: ftToInches(item[3]),
      weight: item[4],
      wingspan: item[5],
      wingspaninches: ftToInches(item[5]),
      reach: item[6],
      reachinches: ftToInches(item[6]),
      bodyFat: parseFloat(item[7]),
      handLength: item[8],
      handWidth: item[9],
      noStepVert: item[10],
      noStepVertReach: item[11],
      nostepvertreachinches: ftToInches(item[11]),
      maxVert: parseFloat(item[12]),
      maxVertReach: item[13],
      maxvertreachinches: ftToInches(item[13]),
      bench: item[14],
      agility: parseFloat(item[15]),
      sprint: parseFloat(item[16]),
      rank: item[17],
      draftPos: item[18]
    })
  })
})
