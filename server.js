//import express dependency
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('server/routes');

//to create the port, on which server listens
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

routes(app);

//code responds to any route being used
app.all('/*',function(req,res) {
	res.send('\
		<!DOCTYPE html>\
		<html>\
			<head>\
				<title>MEAN TODO App</title>\
				<base href="/">\
			</head>\
			<body>\
				<div ui-view></div>\
				<script src="bundle.js"></script>\
			</body>\
		</html>\
		');
});

app.listen(PORT,function() {
	console.log('Server running on ' + PORT );
});