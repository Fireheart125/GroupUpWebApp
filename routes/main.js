var userdata = require('../data/myGroups.json');
var classes = require('../data/allClasses.json');
var check = require('../data/check.json');

exports.viewParent = function(req, res){
   // From : app.get('/:userID/main',main.view);
   console.log("------- Function : Now in main.js");

   user = req.params.userID;
   var mydata;

   // Looking for the user in for loop
   for(var i=0; i<userdata.length; i++) {
      if(userdata[i].id == req.params.userID) {
        mydata = userdata[i];
      }
   }
   check.child = false;

   var resultData = {
     classes : classes,
     mydata : mydata,
     groupNum : mydata.group_own.length,
     child : check.child
  };

   console.log(check.child);
   console.log("------- Finish function : Now in main.js");
   res.render('main1',resultData);
};

exports.viewChild = function(req, res){
   // From : app.get('/:userID/main',main.view);
   console.log("------- Function : Now in main.js");

   user = req.params.userID;
   var mydata;

   // Looking for the user in for loop
   for(var i=0; i<userdata.length; i++) {
      if(userdata[i].id == req.params.userID) {
        mydata = userdata[i];
      }
   }
   check.child = true;

   var resultData = {
     classes : classes,
     mydata : mydata,
     groupNum : mydata.group_own.length,
     child : check.child
  };

   console.log(check.child);
   console.log("------- Finish function : Now in main.js");
   res.render('main2',resultData);
};