var mydata = require('../json/myGroups.json');
var classes = require('../json/allClasses.json');

exports.view = function(req, res){

  var name = req.query.name;
  var email = req.query.email; 
  var password = req.query.password;
  console.log("IN THE SINGUP");
  console.log(name);
  console.log(email);
  console.log(password);

 res.render('signup');
};



exports.signupAction = function(req, res){

  console.log(req.body);
  console.log(req.body.name);
  console.log(req.body.id);
  console.log(req.body.email);
  console.log(req.body.password);
  console.log(req.body.confirm_password);

  if(req.body.name != undefined && req.body.name != "") {
      console.log("Inside the if statement");
      //mydata.name.splice(0, 1);
      //mydata.name.push(req.body.name);
   }

   if(req.body.email != undefined && req.body.email != "") {
      //mydata.email.splice(0, 1);
      //mydata.email.push(req.body.email);
   }

   if(req.body.password != undefined && req.body.password != "") {
      //mydata.password.splice(0, 1);
      //mydata.password.push(req.body.password);
   }

  data = {
    mydata: {
      name: req.body.name
    }
  };

  res.redirect("main");


};

