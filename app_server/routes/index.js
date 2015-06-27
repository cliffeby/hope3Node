var express = require('express');
var router = express.Router();

var ctrlCategories = require('../controllers/categories');
var ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlCategories.homelist);
router.get('/categories', ctrlCategories.categoryList);
router.get('/categories/review/new', ctrlCategories.itemList);

/* Other pages */
router.get('/about', ctrlOthers.about);

//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'HOPE Express' });
//});

module.exports = router;
