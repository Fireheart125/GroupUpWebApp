var data = require("../cse170data.json");

exports.addGroup = function(req, res){
/*
   console.log("in create_inperson")
   console.log(req.query.name);
   var name = req.query.name;
   var id = name;
   var number = req.query.number;
   var max = req.query.max;
   var place = req.query.place;
   var time = req.query.time;
   var description = req.query.description;
   var newGroup = {
   	'id': id,
   	'name': name,
   	'number': number,
   	'max': max,
   	'place': place,
   	'time': time,
   	'description': description,
   }
   console.log(newGroup);
   if ( newGroup.name = "undefined" ) {}
     else { data.group_person.push(newGroup);}

   console.log("new Data!");
   console.log(data);*/
   res.render('create_inperson');
   };
// Get all of our friend data
var cse170data = require('../cse170data.json');
var cse130data = require('../cse130data.json');
var cse120data = require('../cse120data.json');
var cogs187adata = require('../cogs187adata.json');

exports.view = function(req, res){
   /**/
   var name = req.params.className;
   console.log ("DEBUG::: here is create_inperson");
   console.log (name);
   res.render('create_inperson', {'className': name});
};
