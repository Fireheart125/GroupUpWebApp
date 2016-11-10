exports.view = function(req, res){
   // app.get('/:userID/myclass/:className/create_inperson',create_inperson.view);
   var name = req.params.className;
   console.log ("DEBUG::: here is create_online");
   console.log (name);
   res.render('create_online', 
      {
         'className': name,
         'username' : req.params.userID
      }
   );
};
