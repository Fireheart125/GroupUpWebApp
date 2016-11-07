// Get all of our friend data
var data = require('../myGroups.json');
var classes = require('../allClasses.json');

exports.view = function(req, res){
   console.log("DEBUG ------ This is the main.js");
   console.log(data);

   var resultData = {
     classes : classes,
     mydata : data
  };

  console.log("DEBUG ------ before rendering, in main ");

   res.render('main',resultData);
};