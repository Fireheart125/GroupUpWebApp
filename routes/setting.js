var mydata = require('../myGroups.json');

exports.view = function(req, res){

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
      mydata.name.splice(0, 1);
      mydata.name.push(name);
   }

   if(email != undefined && email != "") {
      mydata.email.splice(0, 1);
      mydata.email.push(email);
   }

   if(password != undefined && password != "") {
      mydata.password.splice(0, 1);
      mydata.password.push(password);
   }

   console.log ("DEBUG::: data? after");
   console.log (mydata);

   res.render('setting');
};