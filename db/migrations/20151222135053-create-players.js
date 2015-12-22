'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      draftyear: {
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
        type: Sequelize.INTEGER
      },
      handLength: {
        type: Sequelize.INTEGER
      },
      handWidth: {
        type: Sequelize.INTEGER
      },
      noStepVert: {
        type: Sequelize.INTEGER
      },
      noStepVertReach: {
        type: Sequelize.STRING
      },
      maxVert: {
        type: Sequelize.INTEGER
      },
      maxVertReach: {
        type: Sequelize.STRING
      },
      bench: {
        type: Sequelize.INTEGER
      },
      agility: {
        type: Sequelize.INTEGER
      },
      sprint: {
        type: Sequelize.INTEGER
      },
      rank: {
        type: Sequelize.INTEGER
      },
      draftPos: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Players');
  }
};