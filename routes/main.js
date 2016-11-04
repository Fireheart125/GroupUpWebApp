// Get all of our friend data
var data = require('../myGroups.json');

exports.view = function(req, res){
   console.log("MyGROUP NOW!!");
   console.log(data);
   res.render('main',data);
};