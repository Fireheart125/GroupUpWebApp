// Get all of our friend data
var cse120data = require('../cse120data.json');
var cse170data = require('../cse170data.json');
var cse130data = require('../cse130data.json');
var cogs187adata = require('../cogs187adata.json');
var mydata = require('../myGroups.json');

exports.view = function(req, res){


     console.log (req.params);
     console.log("DEBUG ------ Show the classname!");
     console.log( req.params.className);

     console.log("DEBUG ------ Show the data! before");
     console.log (mydata);

     var name = req.params.className;
// app.get('/myclass/:className/removeClass',removeClass.view);
// need to remove classlist.id and group_person.className!!

     /* Search class with className */
     for(var i=0; i<mydata.classlist.length; i++) {
      console.log("DEBUG ----- inside For class remove!");
        if(req.params.className == mydata.classlist[i].id) {
          console.log("DEBUG ----- class?");
          console.log(mydata.classlist[i].id);
          mydata.classlist.splice(i, 1);
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
          mydata.group_person.splice(i, 1);
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
          mydata.group_online.splice(i, 1);
          console.log("DEBUG ----- popped!");
        }
        else {
          i++;
        }
     }



/*
     for(var i=0; i<count; i++) {
      console.log("WHAT IS i???????");
      console.log(i);
      console.log("DEBUG ----- inside For group_person");
      console.log("check equivalent!");
      console.log(mydata.group_person[i].id);
      console.log(req.params.className == mydata.group_person[i].className);
        if(req.params.className == mydata.group_person[i].className) {
          console.log("DEBUG REMOVING FOUND!!! ----- groupID?");
          console.log(mydata.group_person[i].className);
          console.log(mydata.group_person[i].id);
          mydata.group_person.splice(i, 1);
          console.log("DEBUG ----- popped!");
        }
     } // end of for loop

     count = mydata.group_online.length;

     for(var i=0; i<mydata.group_online.length; i++) {
      console.log("DEBUG ----- inside For group_online");
        if(req.params.className == mydata.group_online[i].className) {
          console.log("DEBUG REMOVING FOUND!!! ----- groupID?");
          console.log(mydata.group_online[i].className);
          console.log(mydata.group_person[i].id);
          mydata.group_online.splice(i, 1);
          console.log("DEBUG ----- popped!");
        }
     } // end of for loop
*/
     console.log("DEBUG ------ Show the data! after");
     console.log (mydata);


     console.log("DEBUG ------ before rendering, somewhere ");


     res.render('removeClass', {'groupName': name});
};
