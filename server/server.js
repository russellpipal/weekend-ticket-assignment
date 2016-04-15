var express = require('express');
var mongoose = require('mongoose');
var app = express();
var index = require('./routes/index.js');

app.use(express.static('server/public'));
app.use(bodyParser.json()):
app.use('/', index);

var mongoURI = "mongodb://localhost/ticketAssignment";
var mongodb = mongoose.connect(mongoURI).connection;

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
});
