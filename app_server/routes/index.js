var express = require('express');
var router = express.Router();

var ctrlCategories = require('../controllers/categories');
var ctrlOthers = require('../controllers/others');
var ctrlMain = require('../controllers/home');
var ctrlLocations = require('../controllers/locations');

/* Locations pages */
router.get('/', ctrlMain.home);
router.get('/categories', ctrlCategories.categoryList);
router.get('/categories/items', ctrlCategories.itemList);
router.get('/locations', ctrlLocations.locationList);

/* Other pages */
router.get('/about', ctrlOthers.about);
router.get('/help', ctrlOthers.help);


module.exports = router;
