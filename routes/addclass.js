var userdata = require('../myGroups.json');
var classes = require('../allClasses.json');

exports.view = function(req, res){
// app.get('/:userID/myclass/:className/addclass',addclass.view);
    console.log ("DEBUG::: ----------------------- adding class");

      var message;
      var alreadyHave = 0;

      var mydata;
      var user = req.params.userID;

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

     console.log ("DEBUG::: data before?");
     console.log (mydata);

     console.log (req.params);
     console.log("DEBUG ------ Show the classname!");
     console.log( req.params.className);
     console.log("DEBUG ------ Show the groupid!");

     for(var i=0; i<mydata.classlist.length; i++) {
       console.log("DEBUG ----------- try to find duplicated case!!");
       console.log(mydata.classlist[i].id);
       if(req.params.className == mydata.classlist[i].id) {
          // The class : User already have!!!!
          message = "You already have a class of";
          console.log("Duplicated!!");
          alreadyHave = 1;
          break;
       }
     }

     if(alreadyHave == 0) {
        console.log("Adding process!!!!");
        for(var i=0; i<classes.allClasses.length; i++) {
          if(req.params.className == classes.allClasses[i].id) {
            message = "You have added a class of";
            var newClass = {
             'id': classes.allClasses[i].id,
             'class': classes.allClasses[i].class,
            }
            userdata[addr].classlist.push(newClass);
          }
        } // end for
     } // end if

     console.log("DEBUG ------ before rendering, somewhere ");

     console.log ("DEBUG::: data?");
     console.log (mydata);

     var resultData = {
       message: message,
       name: req.params.className,
       user: req.params.userID
     };

     console.log ("value?");
     console.log (message);
     console.log ("DEBUG::: ----------------------- finish adding class");
     res.render('addclass', resultData );
};
