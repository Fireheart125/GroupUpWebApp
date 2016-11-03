var data = require("../data.json");

   exports.addGroup = function(req, res){
   var id = a3;
   var name = req.query.name;
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
