/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var help = require('./routes/help');
var setting = require('./routes/setting');
var signup = require('./routes/signup');

var main = require('./routes/main');
var myclass = require('./routes/myclass');

var create_online = require('./routes/create_online');
var create_inperson = require('./routes/create_inperson');
var addclass = require('./routes/addclass');
var join = require('./routes/join');

var removeGroup = require('./routes/removeGroup');
var removeClass = require('./routes/removeClass');
var removeForever = require('./routes/removeForever');

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
// app.get('/', index.view);
app.post('/signInAction', index.signInAction);
app.get('/:userID/main',main.view);
app.get('/LogInError');

app.get('/help',help.view);
app.get('/signup',signup.view);
app.get('/signupAction/SignUpError');

app.get('/:userID/setting',setting.view);

app.get('/:userID/myclass',myclass.view);
app.get('/:userID/myclass/:name', myclass.view);

app.post('/signupAction', signup.signupAction);
app.get('/myclass/:name', myclass.view);

app.get('/:userID/myclass/:className/create_online',create_online.view);
app.get('/:userID/myclass/:className/create_inperson',create_inperson.view);
app.get('/:userID/myclass/:className/:groupID/:grouptype',join.view);

app.get('/:userID/myclass/:className/addclass',addclass.view);

app.get('/:userID/myclass/:groupID/removeGroup',removeGroup.view);
app.get('/:userID/myclass/:className/removeClass',removeClass.view);
app.get('/:userID/myclass/:classID/:groupID/setting/remove',removeForever.view);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
