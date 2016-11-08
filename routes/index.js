var mydata = require('../myGroups.json');


function check(form) { /*function to check userid & password*/
    console.log("Debug --- Enter the function check!!");
    /*the following code checkes whether the entered userid and password are matching*/
   if(form.Name.value == mydata.name && form.Password.value == mydata.password) {
      window.location.href('main')/*opens the target page while Id & password matches */
      console.log("Debug --- matching");
    }
    else {
    	 alert("Error Password or Username")/*displays error message */
         console.log("Debug --- NOT matching");
    }
}

exports.view = function(req, res){
    console.log("Debug --- index.view");
	res.render('index');
};

