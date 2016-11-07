// Get all of our friend data
var cse120data = require('../cse120data.json');
var cse170data = require('../cse170data.json');
var cse130data = require('../cse130data.json');
var cogs187adata = require('../cogs187adata.json');
var mydata = require('../myGroups.json');

exports.view = function(req, res){
  var whichClass;
  var printName;
  var whichGroup = req.query.grouptype;

  console.log("DEBUG: ***************************");
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
  console.log(data);

  if(whichGroup != undefined) {
    if(whichGroup == "person") {
      console.log("DEBUG ------ now person group! ");
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

      data.group_person.push(newGroup);
      mydata.group_person.push(newGroup);
    }

    else if(whichGroup == "online") {
      console.log("DEBUG ------ now online group! ");
      var name = req.query.name;
      var id = name;
      var forum = req.query.forum;
      var description = req.query.description;
      var newGroup = {
        'id': id,
        'name': name,
        'address': forum,
        'description': description,
      }

      data.group_online.push(newGroup);
      mydata.group_online.push(newGroup);
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
    data : data,
    mydata : mydata
  };

  console.log("DEBUG ------ before rendering, in main ");
  res.render('myclass', resultData);

/*
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
    mydata.group_person.push(newGroup);
    console.log("DEBUG: ----newGroup-----FALSE");
    console.log(newGroup);
    console.log("DEBUG: ----mydata-----FALSE");
    console.log(mydata);
  }

   //data.group_person.push(newGroup);

  var resultData = {
    className: whichClass,
    data : data
  };
   
  res.render('myclass', resultData);

  */
};
