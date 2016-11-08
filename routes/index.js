var mydata = require('../myGroups.json');

exports.view = function(req, res){

  console.log("Log in view");
  var name = req.query.name;
  var password = req.query.password;

  console.log("id and password");
  console.log(name);
  console.log(password);

  console.log("my id and password");
  console.log(mydata.name);
  console.log(mydata.password);
  console.log(mydata.name.length);
  console.log(mydata.password.length);

  console.log(mydata.name[0] == name);
  console.log(mydata.password[0] == password);
  if(mydata.name[0] == name) {
    console.log("Inside the if statement")
    if(mydata.password[0] == password) {
      console.log("Check passed!");
      res.render('main');
      return;
    }
  }
  else {
    res.render('index');
    return;
  }
};

