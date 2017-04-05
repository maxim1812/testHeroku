
var express = require('express');
var app = express();

app.get('/', function(req, res) {
	response.send('Hello World! I am Maxim.');
});


var port = process.env.PORT || 5000;

app.listen(port);
console.log('It works');