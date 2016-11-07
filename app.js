
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var main = require('./routes/main');
var myclass = require('./routes/myclass');
var create_inperson = require('./routes/create_inperson');
var join_inperson = require('./routes/join_inperson');
var removeGroup = require('./routes/removeGroup');
var removeClass = require('./routes/removeClass');
var create_online = require('./routes/create_online');
var group_inperson = require('./routes/group_inperson');
var help = require('./routes/help');
var setting = require('./routes/setting');
var signup = require('./routes/signup');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/main',main.view);
//app.get('/create_inperson',create_inperson.view);
//app.get('/myclass/cse170', create_inperson.addGroup);
app.get('/myclass',myclass.view);
//app.get('/create_inperson',create_inperson.view);
// app.get('/myclass/:name/create_inperson',create_inperson.addGroup);
// app.get('/myclass',myclass.view);

// app.get('/group_inperson/:name/:groupID',group_inperson.view);
app.get('/help',help.view);
app.get('/setting',setting.view);
app.get('/signup',signup.view);
app.get('/myclass/:name', myclass.view);

app.get('/myclass/:className/create_online',create_online.view);
app.get('/myclass/:className/create_inperson',create_inperson.view);
app.get('/myclass/:className/:groupID/:grouptype',join_inperson.view);

app.get('/myclass/:groupID/removeGroup',removeGroup.view);
app.get('/myclass/:className/removeClass',removeClass.view);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
