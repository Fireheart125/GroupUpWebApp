var userdata = require('../data/myGroups.json');

exports.view = function(req, res){

// app.get('/:userID/myclass/:className/removeClass',removeClass.view);

     console.log (req.params);
     console.log("DEBUG ------ Show the classname!");
     console.log( req.params.className);

     console.log("DEBUG ------ Show the data! before");
     console.log (mydata);

     var name = req.params.className;
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

    // need to remove classlist.id and group_person.className!!

     /* Search class with className */
     for(var i=0; i<mydata.classlist.length; i++) {
      console.log("DEBUG ----- inside For class remove!");
        if(req.params.className == mydata.classlist[i].id) {
          console.log("DEBUG ----- class?");
          console.log(mydata.classlist[i].id);
          userdata[addr].classlist.splice(i, 1);
          console.log("DEBUG ----- popped!");
        }
     } // end of for loop

     /* Search group_person with className */
      console.log("what is length of group_person?");
      console.log(mydata.group_person.length);
      //var count = mydata.group_person.length;
      var i = 0;
      while (i<mydata.group_person.length) {
        if(req.params.className == mydata.group_person[i].className) {
          console.log("DEBUG REMOVING FOUND!!! ----- groupID?");
          console.log(mydata.group_person[i].className);
          console.log(mydata.group_person[i].id);
          userdata[addr].group_person.splice(i, 1);
          console.log("DEBUG ----- popped!");
        }
        else {
          i++;
        }
     }

     var i = 0;
      while (i<mydata.group_online.length) {
        if(req.params.className == mydata.group_online[i].className) {
          console.log("DEBUG REMOVING FOUND!!! ----- groupID?");
          console.log(mydata.group_online[i].className);
          console.log(mydata.group_online[i].id);
          userdata[addr].group_online.splice(i, 1);
          console.log("DEBUG ----- popped!");
        }
        else {
          i++;
        }
     }


     console.log("DEBUG ------ Show the data! after");
     console.log (mydata);


     console.log("DEBUG ------ before rendering, somewhere ");


     res.render('removeClass', {
      'groupName': name
    });
};
