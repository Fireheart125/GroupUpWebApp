// Get all of our friend data
var cse120data = require('../cse120data.json');
var cse170data = require('../cse170data.json');
var cse130data = require('../cse130data.json');
var cogs187adata = require('../cogs187adata.json');
var userdata = require('../myGroups.json');

exports.view = function(req, res){
// from app.js 
// app.get('/:userID/myclass/:classID/:groupID/removeForever',removeForever.view);
    console.log("DEBUG ------ ------------------------------- You are in Remove Forever!");
    console.log(req.params);

    console.log("DEBUG ------ Show the groupid!");
    console.log( req.params.groupID);

    var mydata;
    var classdata;
    var group = req.params.groupID;
    var user = req.params.userID;

    // 1. Look for users!
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

    // 2. Look for class!
    switch (req.params.classID) {
      case "cse170":
          classdata = cse170data;
          printName = "CSE 170/COGS 120";
          break;
      case "cse130":
          classdata = cse130data;
          printName = "CSE 130";
          break;
      case "cse120":
           classdata = cse120data;
           printName = "CSE 120";
           break;
      case "cogs187a":
           classdata = cogs187adata;
           printName = "COGS 187A";
           break;
      default: 
    }

    console.log("DEBUG ------ Show the data! before pop!");
    console.log (mydata);

    // 3. Delete group from owner!
    for(var i=0; i<mydata.group_own.length; i++) {
      console.log("DEBUG ----- inside For group_own");
        if(group == mydata.group_own[i].id) {
          console.log("DEBUG ----- groupID?");
          console.log(mydata.group_own[i].id);
          var name = mydata.group_own[i].name;
          userdata[addr].group_own.splice(i, 1);
          console.log("DEBUG ----- popped!");
        }
    } // end of for loop
     
    // 4. Delete group from class!
    // 4.1. Delete group_person
    for(var i=0; i<classdata.group_person.length; i++) {
      console.log("DEBUG ----- inside For class group_person");
      if(group == classdata.group_person[i].id) {
        classdata.group_person.splice(i, 1);
        console.log("DEBUG ----- popped!");
      }
    } // end of for loop

    // 4.2. Delete group_online
    for(var i=0; i<classdata.group_online.length; i++) {
      console.log("DEBUG ----- inside For class group_person");
      if(group == classdata.group_online[i].id) {
        classdata.group_online.splice(i, 1);
        console.log("DEBUG ----- popped!");
      }
    } // end of for loop

    // 5. Delete group from all members! - Need to search all users!
    for(var i=0; i<userdata.length; i++) {
      console.log("what is the name?");
      console.log(userdata[i].id);

      // 5.1. Find group_person
      for(var j=0; j<userdata[i].group_person.length; j++) {
        console.log("DEBUG ----- inside For class group_person");
        if(group == userdata[i].group_person[j].id) {
          userdata[i].group_person.splice(j, 1);
          console.log("DEBUG ----- removed!");
        }
      } // end of for loop

      // 5.2. Find group_online
      for(var j=0; j<userdata[i].group_online.length; j++) {
        console.log("DEBUG ----- inside For class group_person");
        if(group == userdata[i].group_online[j].id) {
          userdata[i].group_online.splice(j, 1);
          console.log("DEBUG ----- removed!");
        }
      } // end of for loop

    }


     console.log("DEBUG ------ Show the data! after pop!");
     console.log (mydata);

     console.log("DEBUG ------ before rendering, somewhere ");

     res.render('removeForever', {'groupName': name});
};