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

router.get('/getSingleTicket/:id', function(request, response){
  Ticket.findOne({_id: request.params.id}, function(err, ticket){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {
      console.log('ticket sent', ticket);
      response.send(ticket);
    }
  });
});

router.put('/saveTicket', function(request, response){

  var newTicket = new Ticket(request.body);
  newTicket.updated = new Date();

  Ticket.findOneAndUpdate({_id: request.body._id}, newTicket, function(err, aTicket){
    console.log(newTicket);
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  });
});

module.exports = router;
