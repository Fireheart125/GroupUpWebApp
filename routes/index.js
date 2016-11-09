var mydata = require('../myGroups.json');
var classes = require('../allClasses.json');

exports.view = function(req, res){

  console.log("Log in view");
  var id = req.query.id;
  var password = req.query.password;

  console.log("id and password");
  console.log(id);
  console.log(password);

  console.log("my id and password");
  for(var i=0; i < mydata.length; i++) {
    console.log(mydata[i].id);
    console.log(mydata[i].password);
  }

  console.log("Starting chekcing for loop");
  for(i=0; i < mydata.length; i++) {
    console.log(mydata[i].id);
    console.log(mydata[i].password);

    /* If the user is registered */
    if(mydata[i].id == id) {
      console.log("id check passed");
      if(mydata[i].password == password) {
        console.log("Check passed!");

        var resultdata = mydata[i];

        var resultdata2 = {
            classes : classes,
            mydata : resultdata,
            groupNum : resultdata.group_own.length,
        };

        res.render('main', resultdata2);
        return;
      }
    }
  }

  /* If the user input is wrong */
  console.log("The user input is wrong!");
  res.render('index');
  return;
  

  /*
  console.log(mydata.name[0] == name);
  console.log(mydata.password[0] == password);
  if(mydata.name[0] == name) {
    console.log("Inside the if statement")
    if(mydata.password[0] == password) {
      console.log("Check passed!");
      res.redirect('main');
      return;
    }
  }
  else {
    res.render('index');
    return;
  }*/
};

