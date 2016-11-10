var mydata = require('../data/myGroups.json');
var classes = require('../data/allClasses.json');

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

  var newID = req.body.id;
  var email = req.body.email;
  var name = req.body.name;
  var password = req.body.password;


  /* ID duplicate check */
  for(var i=0; i<mydata.length; i++) {
    if(mydata[i].id == newID) {
      console.log("ID duplicate!");
      res.render('SignUpError');
      return;
    }
  }

  if(req.body.name != undefined && req.body.name != "") {
    if(req.body.email != undefined && req.body.email != "") {
      if(req.body.password != undefined && req.body.password != "") {

      console.log("Inside the if statement");

      var newPerson = {
        "name":[name],
        "id":[newID],
        "email":[email],
        "password":[password],
        "classlist":[],
        "group_person":[],
        "group_online":[],
        "group_own":[]

      };
      
      console.log(newPerson);

      mydata.push(newPerson);
      console.log("After pushing");
      console.log(mydata);

      var url = name + "/main";
      res.redirect(url);
      return;
      }
    }
  }
};

