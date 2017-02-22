var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'client')));
app.use('/scripts', express.static(path.join(__dirname, 'node_modules')));

var port = process.env.PORT || 3000;
var server = app.listen(port);
console.log('Listening on port ' + port);
