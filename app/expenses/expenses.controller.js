angular
    .module('app')
    .controller('ExpensesController', ExpensesController);

ExpensesController.$inject = [];

function ExpensesController() {
  var vm = this;
  vm.list = [{name: 'Rent', category: 'recurring', amount: 400.23},{name: 'Lunch', category: 'food', amount: 15.00}];
  activate();

  function activate() {
  }
}
