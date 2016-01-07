'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      draftYear: {
        type: Sequelize.INTEGER
      },
      heightWithOutShoes: {
        type: Sequelize.STRING
      },
      heightwoshoesinches: {
        type: Sequelize.FLOAT
      },
      heightWithShoes: {
        type: Sequelize.STRING
      },
      heightinches: {
        type: Sequelize.FLOAT
      },
      weight: {
        type: Sequelize.INTEGER
      },
      wingspan: {
        type: Sequelize.STRING
      },
      wingspaninches: {
        type: Sequelize.FLOAT
      },
      reach: {
        type: Sequelize.STRING
      },
      reachinches: {
        type: Sequelize.FLOAT
      },
      bodyFat: {
        type: Sequelize.FLOAT
      },
      handLength: {
        type: Sequelize.FLOAT
      },
      handWidth: {
        type: Sequelize.FLOAT
      },
      noStepVert: {
        type: Sequelize.FLOAT
      },
      noStepVertReach: {
        type: Sequelize.STRING
      },
      nostepvertreachinches: {
        type: Sequelize.FLOAT
      },
      maxVert: {
        type: Sequelize.FLOAT
      },
      maxVertReach: {
        type: Sequelize.STRING
      },
      maxvertreachinches: {
        type: Sequelize.FLOAT
      },
      bench: {
        type: Sequelize.INTEGER
      },
      agility: {
        type: Sequelize.FLOAT
      },
      sprint: {
        type: Sequelize.FLOAT
      },
      rank: {
        type: Sequelize.INTEGER
      },
      draftPos: {
        type: Sequelize.STRING
      },
      heightwoshoesinchespercentage: {
        type: Sequelize.FLOAT
      },
      heightinchespercentage: {
        type: Sequelize.FLOAT
      },
      weightpercentage: {
        type: Sequelize.FLOAT
      },
      wingspaninchespercentage: {
        type: Sequelize.FLOAT
      },
      reachinchespercentage: {
        type: Sequelize.FLOAT
      },
      bodyFatpercentage: {
        type: Sequelize.FLOAT
      },
      handLengthpercentage: {
        type: Sequelize.FLOAT
      },
      handWidthpercentage: {
        type: Sequelize.FLOAT
      },
      noStepVertpercentage: {
        type: Sequelize.FLOAT
      },
      nostepvertreachinchespercentage: {
        type: Sequelize.FLOAT
      },
      maxVertpercentage: {
        type: Sequelize.FLOAT
      },
      maxvertreachinchespercentage: {
        type: Sequelize.FLOAT
      },
      benchpercentage: {
        type: Sequelize.FLOAT
      },
      agilitypercentage: {
        type: Sequelize.FLOAT
      },
      sprintpercentage: {
        type: Sequelize.FLOAT
      },
      rankpercentage: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('players');
  }
};