// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
   /*
   var name = req.params.name;
   res.render('myclass', { 'className':name, data });
*/
   var name = req.params.name;
   res.render('myclass',data);
   
   res.render('myclass', {
      'className':name
   });
   
/*
   var name = req.params.name;

   // controller code goes here
   res.render('myclass', {
      'className':name
   });
*/
};

exports.viewClass = function(req, res) {
   var name = req.params.name;

   // controller code goes here
   res.render('myclass', {
      'className':name
   });

}