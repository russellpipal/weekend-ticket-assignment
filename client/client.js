var app = angular.module('myApp', []);

console.log('client opened');

app.controller('MainController', ['$http', function($http){
  var vm = this;

  var getTickets = function(){
    $http.get('/ticket').then(function(response){
      if(response.status !== 200) {
        throw new Error('Failed to get tickets');
      }
      vm.tickets = response.data;
      vm.ticket = {};
    });
  };

  vm.addTicket = function(ticket){
    $http.post('/ticket', ticket).then(getTickets());
  };

  vm.deleteTicket = function(ticket, index){
    var id = ticket._id;
    $http.delete('/ticket/' + id).then(getTickets());
  };

  getTickets();
}]);
