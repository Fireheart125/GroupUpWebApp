<<<<<<< HEAD
var data = require("../cse170data.json");

   exports.addGroup = function(req, res){
   var name = req.query.name;
   var id = name;
   var number = req.query.number;
   var max = req.query.max;
   var place = req.query.place;
   var time = req.query.time;
   var description = req.query.description;
   var newGroup = {
   	"id": id,
   	'name': name,
   	'number': number,
   	'max': max,
   	'place': place,
   	'time': time,
   	'description': description,
   }
   data.cse170_group_person.push(newGroup);
      console.log(newGroup);
   res.render('cse170_group_person', data);
   };
=======
// Get all of our friend data
var cse170data = require('../cse170data.json');
var cse130data = require('../cse130data.json');
var cse120data = require('../cse120data.json');
var cogs187adata = require('../cogs187adata.json');

exports.view = function(req, res){
   var name = req.params.name;  
   console.log (name);
   res.render('create_inperson', {name:name} );
};
>>>>>>> b5d9c332009720c07e1162b6c1830907a6c19ed2
