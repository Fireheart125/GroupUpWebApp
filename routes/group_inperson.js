exports.view = function(req, res){
  var data = require('../data.json');
  res.render('group_inperson', data);
};