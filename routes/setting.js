var userdata = require('../json/myGroups.json');

exports.view = function(req, res){
   // app.get('/:userID/setting',setting.view);
   var user;
   var mydata;

   // First, check where "setting" come from
   if(req.params.userID == undefined) {
      // When user change information or user delete group or modify
      user = req.query.userID;
      console.log("Debug --- for setting --- page load from setting and user");
      console.log(user);
   }
   else {
      // When setting page load from other pages
      user = req.params.userID;
      console.log("Debug --- for setting --- page load from anotherpage");
      console.log(user);
   }

   // Second, Search for user!
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

   console.log ("DEBUG::: data? before");
   console.log (mydata);

   var name = req.query.name;
   var email = req.query.email; 
   var password = req.query.password;

   console.log("IN THE SETTING");
   console.log(name);
   console.log(email);
   console.log(password);

   if(name != undefined && name != "") {
      userdata[addr].name.splice(0, 1);
      userdata[addr].name.push(name);
   }

   if(email != undefined && email != "") {
      userdata[addr].email.splice(0, 1);
      userdata[addr].email.push(email);
   }

   if(password != undefined && password != "") {
      userdata[addr].password.splice(0, 1);
      userdata[addr].password.push(password);
   }

   /*
    * Case to handle "modify" group!
    *
    */

   console.log ("DEBUG::: data? after");
   console.log (mydata);

   res.render('setting', 
      {
         data : mydata,
         'userID': user
      }
   );
};