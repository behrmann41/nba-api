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
      heightWithShoes: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.INTEGER
      },
      wingspan: {
        type: Sequelize.STRING
      },
      reach: {
        type: Sequelize.STRING
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
      maxVert: {
        type: Sequelize.FLOAT
      },
      maxVertReach: {
        type: Sequelize.STRING
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