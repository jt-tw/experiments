'use strict'
var express  = require('express');
var app      = express();

var passport = require('passport');
var session = require('express-session');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var engines = require('consolidate');
var logger = require('morgan');

var port = Number(process.env.PORT || 8000);

// map switg template engine to .htm files
app.engine('htm', engines.swig);

// set .htm as the default extension of template files
app.set('view engine', 'htm');

// set location of htm files
app.set('views', __dirname);

// set location of static files
app.use(express.static(__dirname + '/public'));

// log request to console
app.use(logger('dev'));

// parse cookies
app.use(cookieParser());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// set session secret
app.use(session({
	secret: 'ZL3rz!@HkZJBR6r5Z67Z',
	saveUninitialized: true,
  resave: true
}));

// pass passport for configuration
require('./config/passport')(passport);

app.use(passport.initialize());

// apply persistent login sessions
app.use(passport.session());

// add controllers
require('./controllers')(app, passport);

var server = app.listen(port, function() {
	var port = server.address().port;

	console.log('Listening at port: %s', port);
});