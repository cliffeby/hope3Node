/*global require, module,  __dirname */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Looking for Users');
});

module.exports = router;
