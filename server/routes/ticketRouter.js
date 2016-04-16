var express = require('express');
var Ticket = require('../../models/ticket');

var router = express.Router();

router.get('/', function(request, response){
  Ticket.find({}, function (err, tickets){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {
      response.send(tickets);
    }
  });
});

router.post('/', function(request, response){
  var ticket = new Ticket(request.body);
  ticket.created = new Date();
  ticket.updated = new Date();
  ticket.save(function(err){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  });
});

router.delete('/:id', function(request, response){
  Ticket.findOneAndRemove({_id: request.params.id}, function(err, ticket){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {
      console.log('ticket deleted', ticket);
      response.sendStatus(200);
    }
  });
});

module.exports = router;
