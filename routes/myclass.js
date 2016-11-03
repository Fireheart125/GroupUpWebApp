// Get all of our friend data
var data = require('../data.json');

exports.viewClass = function(req, res){



/*
   var selectedData = [];
   //Data 안에있는 정보 중에 가져오고싶은걸 여기서 Sorting 해야하고
   for ( var value in data ) {
      //이름이 같으면 가져오기를 해야해요 여기서 그렇게 Data sorting을 다 여기서 해야해요
      if ( value.substr(0, value.indexOf('_')) == req.params.name ){
         selectedData.push( value );
      }
   }

   console.log (selectedData);


   //가져온걸 여기서 합쳐서 보내면 되요
   var resultData  = { 
      className: req.params.name,
      classData: selectedData
   };


   var resultData = {
      className: req.params.name,
      data: data
   };;
   */
   console.log (resultData);

   res.render('myclass', data);
};

exports.view = function(req, res){
   res.render('myclass',data);
};

