// Get all of our friend data
var data = require('../myGroups.json');

exports.view = function(req, res){
   res.render('main',data);
};