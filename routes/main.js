var userdata = require('../json/myGroups.json');
var classes = require('../json/allClasses.json');

exports.view = function(req, res){
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

   var resultData = {
     classes : classes,
     mydata : mydata,
     groupNum : mydata.group_own.length,
  };

   console.log("------- Finish function : Now in main.js");
   res.render('main',resultData);
};