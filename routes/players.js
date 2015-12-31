var express = require('express');
var router = express.Router();
var models = require('../db/models/index');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://localhost:5432/nbaplayers-dev', {})


router.get('/', function (req, res, next) {
  models.players.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt']}
  }).then(function (players) {
    res.json(players);
  })
})

router.get('/columns', function (req, res, next) {
  sequelize.query('SELECT * FROM players WHERE false').then(function (columns) {
    res.json(columns)
  })
})

router.get('/years', function (req, res, next) {
  sequelize.query('SELECT DISTINCT "draftYear" FROM players ORDER BY "draftYear"').then(function (years) {
    res.json(years[0].map(function(record){
      return record.draftYear;
    }));
  })
})

module.exports = router;
