angular
    .module('app')
    .controller('IncomeController', IncomeController);

IncomeController.$inject = ['dataservice'];

function IncomeController(dataservice) {
  var vm = this;
  vm.list = [{name: 'Paycheck', category: 'recurring', amount: 778.78},{name: 'Gift', category: 'once', amount: 150.00}];
  vm.add = add;
  activate();

  function activate() {
    get();
  }

  function add() {
    var data = vm.input;
    return dataservice.AddIncome(data)
      .then(function() {
        console.log('added income');
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
