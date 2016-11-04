// Get all of our friend data
var data = require('../myGroups.json');

exports.view = function(req, res){
   console.log("DEBUG ------ This is the main.js");
   console.log(data);
   res.render('main',data);
};