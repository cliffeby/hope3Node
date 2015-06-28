/* GET home page */
module.exports.home = function(req, res){
  res.render('home', { title: 'Hope APIs',
    strapline: 'Creating an inventory app!'});
};
