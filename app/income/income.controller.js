angular
    .module('app')
    .controller('IncomeController', IncomeController);

IncomeController.$inject = [];

function IncomeController() {
  var vm = this;
  vm.list = [{name: 'Paycheck', category: 'recurring', amount: 778.78},{name: 'Gift', category: 'once', amount: 150.00}];
  activate();

  function activate() {
  }
}
