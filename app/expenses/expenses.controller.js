angular
    .module('app')
    .controller('ExpensesController', ExpensesController);

ExpensesController.$inject = ['expenseService'];

function ExpensesController(dataservice) {
  var vm = this;
  vm.list = [];
  vm.add = add;
  activate();

  function activate() {
    get();
  }

  function add() {
    var data = vm.input;
    return dataservice.addIncome(data)
      .then(function() {
        get();
      });
  }

  function get() {
    return dataservice.getIncomes()
      .then(function(data) {
        vm.list = data;
        return vm.list;
      });
  }
}
