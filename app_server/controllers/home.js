/* GET home page */
"use strict";
/*global require, module,  __dirname */
module.exports.home = function(req, res){
  res.render('home', { title: 'Hope APIs',
    strapline: 'Creating an inventory app!'});
};
