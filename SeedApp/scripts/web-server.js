#!/usr/bin/env node

var util  	   = require('util'),
	express    = require('express'),
	http       = require('http'),
	fs         = require('fs'),
	url        = require('url'),
	events     = require('events'),
	app        = express(),
	siteutils  = require('../app/siteutils'),
	site 	   = require('../app/routes/site'),
	appBaseDir = siteutils.appBaseDir;

app.use(express.static(appBaseDir + '/public/'));

var DEFAULT_PORT = 8000;


app.get('/', site.index);
app.get('/partials/:partialname', site.partials);

app.listen(DEFAULT_PORT);
console.log("Now listening on port " + DEFAULT_PORT + ", dirname: " + __dirname);