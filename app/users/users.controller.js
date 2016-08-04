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
  vm.incomes = [];
  vm.expenses = [];
  activate();

  function activate() {
    getUser();
  }

  function addIncome() {
    var data = {};
    data.input = vm.income;
    data.name = vm.name;
    data.week = vm.week;
    console.log(data);
    return dataservice.addIncome(data)
      .then(function() {
        getUser();
        getBudget();
      });
  }
  function addExpense() {
    var data = vm.expenseInput;
    return dataservice.addExpense(data)
      .then(function() {
        getExpense();
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
        console.log(data);
      });
  }
  function getUser() {
    return dataservice.getUser()
      .then(function(data){
        vm.budget = data.data.budgets.filter((budget) => budget.week == vm.week)[0];
        vm.incomes = vm.budget.incomes;
        vm.expenses = vm.budget.expenses;

        //transform data object into pieces for vm
      });
  }
}
