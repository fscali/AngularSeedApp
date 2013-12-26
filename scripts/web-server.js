#!/usr/bin/env node

var util  	   = require('util'),
	express    = require('express'),
	http       = require('http'),
	fs         = require('fs'),
	url        = require('url'),
	events     = require('events'),
	path       = require('path'),
	app        = express(),
	appBaseDir = path.resolve(__dirname + '/../app/');



app.use(express.static(appBaseDir + '/public/'));

var DEFAULT_PORT = 8000;


app.get('/', function(req, res){
  res.sendfile(appBaseDir + '/index.html' );

});
app.get('/partials/:partialname', function(req, res){
	res.sendfile(appBaseDir + '/partials/' + req.params.partialname);

});

app.listen(DEFAULT_PORT);
console.log("Now listening on port " + DEFAULT_PORT + ", dirname: " + __dirname);