// Global data
var data = require('../data.json');

// For other classes list on the left side
exports.view = function(req, res){
  res.render('group_inperson', data);
};

//exports.viewProject = function(req, res) {
  //res.render('group_inperson', hope);

//};