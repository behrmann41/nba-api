var express = require('express');
var router = express.Router();
var models = require('../db/models/index');
var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_URL, {})


router.get('/', function (req, res, next) {
  models.players.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt']}
  }).then(function (players) {
    res.json({data: players});
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

router.get('/player/:id', function (req, res, next) {
  models.players.findById(req.params.id).then(function (player) {
    res.json(player);
  })
})

module.exports = router;

//select * from (select id, weight, ntile(100) over(order by weight) rank from players where weight > 0) ntiles where id = 4151;
