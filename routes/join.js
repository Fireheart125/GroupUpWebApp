var cse120data = require('../json/cse120data.json');
var cse170data = require('../json/cse170data.json');
var cse130data = require('../json/cse130data.json');
var cogs187adata = require('../json/cogs187adata.json');
var userdata = require('../json/myGroups.json');

exports.view = function(req, res){
// app.get('/:userID/myclass/:className/:groupID/:grouptype',join.view);
     console.log (req.params);
     console.log("DEBUG ------ Show the classname!");
     console.log( req.params.className);
     console.log("DEBUG ------ Show the groupid!");
     console.log( req.params.groupID);
     console.log("DEBUG ------ Show the grouptype!");
     console.log( req.params.grouptype);
     var mydata;
     var user = req.params.userID;

    for(var i=0; i<userdata.length; i++) {
      console.log("what is the name?");
      console.log(userdata[i].id);
      if(userdata[i].id == user) {
        console.log("---- We found users!");
        console.log(userdata[i].id);
        mydata = userdata[i];
        addr = i;
      }
    }

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

     console.log("DEBUG ------ Show my data");
     for(var k=0; k<mydata.group_person.length; k++) {
      //console.log(mydata.group_person[k].className);
      //console.log(mydata.group_person[k].id);
     }
     console.log("DEBUG ------ Show class data");
     for(var p=0; p<data.group_person.length; p++) {
      //console.log(mydata.group_person[p].className);
      //console.log(mydata.group_person[p].id);
     }
     console.log("-------------------");

      if(req.params.grouptype == "person") {
        console.log("Inside person");
        for(var q=0; q<mydata.group_person.length; q++) {
          if(req.params.groupID == mydata.group_person[q].id) {
            console.log("DEBUG ----- trying to join the same group twice!");
            console.log(mydata.group_person[q].name);
            var first = mydata.group_person[q].name;
            var second = " twice!"
            res.render('join', {'groupName':  first.concat(second)});
            return;
          }
        }
      
        console.log("DEBUG ----- join for person?");
        console.log("DEBUG ----- from the group?");
        console.log(req.params.groupID);
        console.log(req.params.groupID);
        console.log("DEBUG ----- Values?");
        //console.log(data.group_person[0].id);
        //console.log(data.group_person[1].id);
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
                 'owner' : false,
                 'id': id,
                 'name': name,
                 'number': number,
                 'max': max,
                 'place': place,
                 'time': time,
                 'description': description,
               }
               userdata[addr].group_person.push(newGroup);
               console.log("DEBUG ----- pushed!");
            }
         }
     } // if person statement ends

     else if(req.params.grouptype == "online") {

      console.log("Inside online");
        for(var q=0; q<mydata.group_online.length; q++) {
          if(req.params.groupID == mydata.group_online[q].id) {
            console.log("DEBUG ----- trying to join the same group online twice!");
            console.log(mydata.group_online[q].name);
            var first = mydata.group_online[q].name;
            var second = " twice!"
            res.render('join', {'groupName':  first.concat(second)});
            return;
          }
        }

      console.log("DEBUG ----- join for person?");
      console.log("DEBUG ----- from the online?");
      console.log(req.params.groupID);
      console.log(req.params.groupID);
      console.log("DEBUG ----- Values?");
      //console.log(data.group_person[0].id);
      //console.log(data.group_person[1].id);
      console.log(data.group_person.length);

      console.log(req.params.groupID == data.group_online[1].id);
        for(var i=0; i<data.group_online.length; i++) {
         console.log("DEBUG ----- inside For");
            if(req.params.groupID == data.group_online[i].id) {
               console.log("DEBUG ----- groupID?");
               console.log(data.group_person[i].id);
               var name = data.group_online[i].name;
               var id = data.group_online[i].id;
               var forum = data.group_online[i].forum;
               var description = data.group_online[i].description;
               var newGroup = {
                 'className': req.params.className,
                 'grouptype': "online",
                 'owner': false,
                 'id': id,
                 'name': name,
                 'address': forum,
                 'description': description,
               }
               userdata[addr].group_online.push(newGroup);
               console.log("DEBUG ----- pushed!");
            }
         }
     } // if statement ends


     console.log("DEBUG ------ before rendering, somewhere ");

     console.log ("DEBUG::: data?");
     console.log (mydata);

     res.render('join', 
        {
           'groupName': name,
           'username' : req.params.userID
        }
      );
};
