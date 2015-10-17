/*global require, module,  __dirname */
/*jshint strict:false */
//"use strict";
var express = require("express");
var router = express.Router();
var Category = require('../model');
var Item = require('../model');
var ctrlCategories = require("../controllers/categories");
var ctrlOthers = require("../controllers/others");
var ctrlMain = require("../controllers/home");
var ctrlLocations = require("../controllers/locations");

/* Categories and Items pages */
router.get("/", ctrlMain.home);
//router.get("/categories", ctrlCategories.categoryList);
router.get("/categories", function(req,res) {
    Category.find(function (err, categories) {
        if (err){
            res.send(err);}

        res.json(categories);
    });
});
router.get("/allItems", function(req,res) {
    Item.find(function (err, allItems) {
        if (err){
            res.send(err);}

        res.json(allItems);
    });
});


/* Locations pages */
router.get("/locations", ctrlLocations.locationList);

/* Other pages */
router.get("/about", ctrlOthers.about);
router.get("/help", ctrlOthers.help);


module.exports = router;
