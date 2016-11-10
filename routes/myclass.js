// Get all of our friend data
var cse120data = require('../data/cse120data.json');
var cse170data = require('../data/cse170data.json');
var cse130data = require('../data/cse130data.json');
var cogs187adata = require('../data/cogs187adata.json');
var userdata = require('../data/myGroups.json');

exports.view = function(req, res){
  console.log("--------------- You are in my class!!!! ");
  // app.get('/:userID/myclass/:name', myclass.view);
  var whichClass;
  var printName;
  var whichGroup = req.query.grouptype;
  var user;
  var data;
  var mydata;
  var addr;

  if (req.params.userID == undefined) {
    user = req.query.username;
  }
  else {
    user = req.params.userID;
  }

  // Looking for the user in for loop
  for(var i=0; i<userdata.length; i++) {
    console.log("what is the name?");
    console.log(userdata[i].id);
    if(userdata[i].id == user) {
      mydata = userdata[i];
      addr = i;
    }
  }

  console.log("DEBUG: ***************************");
  console.log("what is user now?");
  console.log(mydata.name);

  if (req.params.name == undefined) {
    whichClass = req.query.className;
  }
  else {
    whichClass = req.params.name;
  }

  console.log("DEBUG ------ whichClass");
  console.log(whichClass);
  console.log("DEBUG ------ whichGroup");
  console.log(whichGroup);
  console.log("DEBUG ------ req.params.name");
  console.log(req.params.name);

  switch (whichClass) {
    case "cse170":
        data = cse170data;
        printName = "CSE 170/COGS 120";
        break;
    case "cse130":
        data = cse130data;
        printName = "CSE 130";
        break;
    case "cse120":
         data = cse120data;
         printName = "CSE 120";
         break;
    case "cogs187a":
         data = cogs187adata;
         printName = "COGS 187A";
         break;
    default: 
  }
  console.log("DEBUG ------ Show the data!");

  // Create Group!
  if(whichGroup != undefined) {
    if(whichGroup == "person") {
      console.log("DEBUG ------ now person group! ");
      var className = req.query.className;
      var name = req.query.name;
      var id = name;
      var number = req.query.number;
      var max = req.query.max;
      var place = req.query.place;
      var time = req.query.time;
      var description = req.query.description;

      var newGroup = {
        'className': className,
        'id': id,
        'name': name,
        'grouptype': "person",
        'owner': true,
        'number': number,
        'max': max,
        'place': place,
        'time': time,
        'description': description,
      }

      data.group_person.push(newGroup);
      userdata[addr].group_person.push(newGroup);
      userdata[addr].group_own.push(newGroup);
    }

    else if(whichGroup == "online") {
      console.log("DEBUG ------ now online group! ");
      var name = req.query.name;
      var id = name;
      var forum = req.query.forum;
      var description = req.query.description;
      var newGroup = {
        'className': className,
        'grouptype': "online",
        'owner': true,
        'id': id,
        'name': name,
        'address': forum,
        'description': description,
      }

      data.group_online.push(newGroup);
      userdata[addr].group_online.push(newGroup);
      userdata[addr].group_own.push(newGroup);
    }

    else {
      console.log("There is no type of group!");
    }
    console.log("DEBUG ------ before I pushed ");

    
    console.log("DEBUG ------ after I pushed ");
    console.log("DEBUG ------ data? ");
    console.log(data);
    console.log("DEBUG ------ my data? ");
    console.log(mydata);
  }

  var resultData = {
    className: whichClass,
    printName : printName,
    user : user,
    data : data,
    mydata : mydata
  };

  console.log("DEBUG ------ before rendering, in main ");
  res.render('myclass', resultData);

};
