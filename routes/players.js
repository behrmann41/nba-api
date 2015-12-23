var express = require('express');
var router = express.Router();
var models = require('../db/models/index');

router.get('/', function (req, res, next) {
  models.players.findAll({}).then(function (players) {
    res.json(players);
  })
})

module.exports = router;
