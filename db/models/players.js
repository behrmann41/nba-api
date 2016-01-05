'use strict';
module.exports = function(sequelize, DataTypes) {
  var players = sequelize.define('players', {
    name: DataTypes.STRING,
    draftYear: DataTypes.INTEGER,
    heightWithOutShoes: DataTypes.STRING,
    heightwoshoesinches: DataTypes.FLOAT,
    heightWithShoes: DataTypes.STRING,
    heightinches: DataTypes.FLOAT,
    weight: DataTypes.INTEGER,
    wingspan: DataTypes.STRING,
    wingspaninches: DataTypes.FLOAT,
    reach: DataTypes.STRING,
    reachinches: DataTypes.FLOAT,
    bodyFat: DataTypes.FLOAT,
    handLength: DataTypes.FLOAT,
    handWidth: DataTypes.FLOAT,
    noStepVert: DataTypes.FLOAT,
    noStepVertReach: DataTypes.STRING,
    nostepvertreachinches: DataTypes.FLOAT,
    maxVert: DataTypes.FLOAT,
    maxVertReach: DataTypes.STRING,
    maxvertreachinches: DataTypes.FLOAT,
    bench: DataTypes.INTEGER,
    agility: DataTypes.FLOAT,
    sprint: DataTypes.FLOAT,
    rank: DataTypes.INTEGER,
    draftPos: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return players;
};