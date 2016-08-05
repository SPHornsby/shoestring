angular
    .module('app')
    .controller('UsersController', UsersController);
UsersController.$inject = ['usersService'];

function UsersController(dataservice) {
  var vm = this;
  vm.list = [];
  vm.addIncome = addIncome;
  vm.addExpense = addExpense;
  vm.name = "Sean";
  vm.week = 25;
  vm.budget = {};
  activate();

  function activate() {
    getBudget();
  }

  function addIncome() {
    var data = {};
    data.input = vm.income;
    data.name = vm.name;
    data.week = vm.week;
    data.type = "incomes";
    return dataservice.addIncome(data)
      .then(function() {
        vm.income = {};
        getBudget();
      });
  }
  function addExpense() {
    var data = {};
    data.input = vm.expense;
    data.name = vm.name;
    data.week = vm.week;
    data.type = "expenses";
    return dataservice.addExpense(data)
      .then(function() {
        vm.expense = {};
        getBudget();
      });
  }
  function getIncomes() {
    return dataservice.getIncomes()
      .then(function(data) {

      })
  }
  function getBudget() {
    var week = vm.week;
    return dataservice.getBudget(week)
      .then(function(data) {
        vm.budget = data.data[0];
        vm.incomes = vm.budget.incomes;
        vm.expenses = vm.budget.expenses;
      });
  }
}
