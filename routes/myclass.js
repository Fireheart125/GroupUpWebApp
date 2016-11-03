// Get all of our friend data
var cse170data = require('../cse170data.json');
var cse130data = require('../cse130data.json');
var cse120data = require('../cse120data.json');
var cogs187adata = require('../cogs187adata.json');

exports.view = function(req, res){
   var data;

   switch (req.params.name) {
    case "cse170":
        data = cse170data;
        break;
    case "cse130":
        data = cse130data;
        break;
    case "cse120":
         data = cse120data;
         break;
    case "cogs187a":
         data = cogs187adata;
         break;
    default: 
   }

   console.log ( data );
   var resultData = {
      className: req.params.name,
      data
   };
   
   res.render('myclass', resultData);
};
