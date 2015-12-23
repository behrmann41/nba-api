'use strict';
module.exports = function(sequelize, DataTypes) {
  var players = sequelize.define('players', {
    name: DataTypes.STRING,
    draftYear: DataTypes.INTEGER,
    heightWithOutShoes: DataTypes.STRING,
    heightWithShoes: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    wingspan: DataTypes.STRING,
    reach: DataTypes.STRING,
    bodyFat: DataTypes.FLOAT,
    handLength: DataTypes.FLOAT,
    handWidth: DataTypes.FLOAT,
    noStepVert: DataTypes.FLOAT,
    noStepVertReach: DataTypes.STRING,
    maxVert: DataTypes.FLOAT,
    maxVertReach: DataTypes.STRING,
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