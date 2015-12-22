'use strict';
module.exports = function(sequelize, DataTypes) {
  var Players = sequelize.define('Players', {
    name: DataTypes.STRING,
    draftyear: DataTypes.INTEGER,
    heightWithOutShoes: DataTypes.STRING,
    heightWithShoes: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    wingspan: DataTypes.STRING,
    reach: DataTypes.STRING,
    bodyFat: DataTypes.INTEGER,
    handLength: DataTypes.INTEGER,
    handWidth: DataTypes.INTEGER,
    noStepVert: DataTypes.INTEGER,
    noStepVertReach: DataTypes.STRING,
    maxVert: DataTypes.INTEGER,
    maxVertReach: DataTypes.STRING,
    bench: DataTypes.INTEGER,
    agility: DataTypes.INTEGER,
    sprint: DataTypes.INTEGER,
    rank: DataTypes.INTEGER,
    draftPos: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Players;
};