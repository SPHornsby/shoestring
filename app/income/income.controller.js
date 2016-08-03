angular
    .module('app')
    .controller('IncomeController', IncomeController);

IncomeController.$inject = ['incomeService'];

function IncomeController(dataservice) {
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
