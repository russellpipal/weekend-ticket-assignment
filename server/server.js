var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var index = require('./routes/index');
var ticketRouter = require('./routes/ticketRouter');

app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use('/', index);
app.use('/ticket', ticketRouter);

var mongoURI = "mongodb://localhost/ticketAssignment";
var mongodb = mongoose.connect(mongoURI).connection;

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
});
