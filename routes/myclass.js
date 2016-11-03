// Get all of our friend data
var cse170data = require('../cse170data.json');
var cse130data = require('../cse130data.json');
var cse120data = require('../cse120data.json');
var cogs187adata = require('../cogs187adata.json');

exports.view = function(req, res){
   var data;


   switch (req.params.name) {
    case "cse170":
        data = cse170data;
        break;
    case "cse130":
        data = cse130data;
        break;
    case "cse120":
         data = cse120data;
         break;
    case "cogs187a":
         data = cogs187adata;
         break;
    default: 
   }

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

if(newGroup.id == undefined) {
console.log("DEBUG: TRUE");
console.log(newGroup);
}

else {
  data.group_person.push(newGroup);
  console.log("DEBUG: FALSE");
  console.log(newGroup);
}
   //data.group_person.push(newGroup);

   var resultData = {
      className: req.params.name,
      data : data
   };
   
   res.render('myclass', resultData);
};
