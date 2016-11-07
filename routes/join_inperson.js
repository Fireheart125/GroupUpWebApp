// Get all of our friend data
var cse120data = require('../cse120data.json');
var cse170data = require('../cse170data.json');
var cse130data = require('../cse130data.json');
var cogs187adata = require('../cogs187adata.json');
var mydata = require('../myGroups.json');

exports.view = function(req, res){

     console.log (req.params);
     console.log("DEBUG ------ Show the classname!");
     console.log( req.params.className);
     console.log("DEBUG ------ Show the groupid!");
     console.log( req.params.groupID);
     console.log("DEBUG ------ Show the grouptype!");
     console.log( req.params.grouptype);

     switch (req.params.className) {
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

     console.log("DEBUG ------ Show the data!");
     console.log (data);

     if(req.params.grouptype == "person") {
      console.log("DEBUG ----- join for person?");
      console.log("DEBUG ----- from the group?");
      console.log(req.params.groupID);
      console.log(req.params.groupID);
      console.log("DEBUG ----- Values?");
      console.log(data.group_person[0].id);
      console.log(data.group_person[1].id);
      console.log(data.group_person.length);

      console.log(req.params.groupID == data.group_person[1].id);
        for(var i=0; i<data.group_person.length; i++) {
         console.log("DEBUG ----- inside For");
            if(req.params.groupID == data.group_person[i].id) {
               console.log("DEBUG ----- groupID?");
               console.log(data.group_person[i].id);
               var name = data.group_person[i].name;
               var id = data.group_person[i].id;
               var number = data.group_person[i].number;
               var max = data.group_person[i].max;
               var place = data.group_person[i].place;
               var time = data.group_person[i].time;
               var description = data.group_person[i].description;
               var newGroup = {
                 'className': req.params.className,
                 'grouptype': "person",
                 'id': id,
                 'name': name,
                 'number': number,
                 'max': max,
                 'place': place,
                 'time': time,
                 'description': description,
               }
               mydata.group_person.push(newGroup);
               console.log("DEBUG ----- pushed!");
            }
         }
     } // if statement ends

     else if(req.params.grouptype == "online") {
      console.log("DEBUG ----- join for person?");
      console.log("DEBUG ----- from the online?");
      console.log(req.params.groupID);
      console.log(req.params.groupID);
      console.log("DEBUG ----- Values?");
      console.log(data.group_person[0].id);
      console.log(data.group_person[1].id);
      console.log(data.group_person.length);

      console.log(req.params.groupID == data.group_online[1].id);
        for(var i=0; i<data.group_online.length; i++) {
         console.log("DEBUG ----- inside For");
            if(req.params.groupID == data.group_online[i].id) {
               console.log("DEBUG ----- groupID?");
               console.log(data.group_person[i].id);
               var name = data.group_online[i].name;
               var id = name;
               var forum = data.group_online[i].forum;
               var description = data.group_online[i].description;
               var newGroup = {
                 'className': req.params.className,
                 'grouptype': "online",
                 'id': id,
                 'name': name,
                 'address': forum,
                 'description': description,
               }
               mydata.group_online.push(newGroup);
               console.log("DEBUG ----- pushed!");
            }
         }
     } // if statement ends


     console.log("DEBUG ------ before rendering, somewhere ");

     console.log ("DEBUG::: data?");
     console.log (mydata);

     res.render('join_inperson', {'groupName': name});
};
