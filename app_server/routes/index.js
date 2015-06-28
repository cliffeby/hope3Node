var express = require('express');
var router = express.Router();

var ctrlCategories = require('../controllers/categories');
var ctrlOthers = require('../controllers/others');
var ctrlMain = require('../controllers/main');

/* Locations pages */
router.get('/', ctrlMain.home);
router.get('/categories', ctrlCategories.categoryList);
//router.get('/categories/review/new', ctrlCategories.itemList);

/* Other pages */
router.get('/about', ctrlOthers.about);
router.get('/help', ctrlOthers.help);

//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'HOPE Express' });
//});

module.exports = router;
