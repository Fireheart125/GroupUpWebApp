// Get all of our friend data
var cse170data = require('../cse170data.json');
var cse130data = require('../cse130data.json');
var cse120data = require('../cse120data.json');
var cogs187adata = require('../cogs187adata.json');

exports.view = function(req, res){
   var name = req.params.className;
   console.log ("DEBUG::: here is create_online");
   console.log (name);
   res.render('create_online', {'className': name});
};
