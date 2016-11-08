var mydata = require('../myGroups.json');

function check(form) { /*function to check userid & password*/
	var name = req.query.name;
	var password = req.query.password;

    if(name == mydata.name) {
    	if(password == mydata.password) {
    		console.log("inside password matching");
    		window.location.href('main');
    	}
    	else {
    		alert("Error Password or Username");/*displays error message*/
    	}
    }

    /*the following code checkes whether the entered userid and password are matching*/
 /*   if(form.Name.value == name && form.Password.value == password) {
    window.location.href('main')/*opens the target page while Id & password matches
    }
    else {
    	 alert("Error Password or Username")/*displays error message
    	} */
    }

exports.view = function(req, res){

	res.render('index');
};