var app = angular.module('myApp', []);

app.controller('MainController', ['$http', function($http){
  var vm = this;
  vm.showEdit = false;

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

  vm.editTicket = function(ticket, index){
    vm.showEdit = true;
  };

  vm.saveTicket = function(ticket, index){
    $http.put('/ticket/saveTicket', ticket).then(getTickets());
    vm.showEdit = false;
  };

  vm.cancelEdit = function(){
    vm.showEdit = false;
    getTickets();
  };
//Run once on program launch
  getTickets();
}]);
