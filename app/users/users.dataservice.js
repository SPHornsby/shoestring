angular
    .module('app')
    .factory('usersService', usersService);

usersService.$inject = ['$http'];

function usersService($http) {
  var vm = this;
  vm.data ={};
  return {
    addIncome: addIncome,
    addExpense: addExpense,
    getBudget: getBudget,
    getUser: getUser,
    removeIncome: removeIncome,
    removeExpense: removeExpense
  };



  function addIncome(data) {
    console.log(data);
    return $http.put('/budgets/week/' + data.week , JSON.stringify(data))
      .then()
      .catch();
  }

  function addExpense(data) {
    return $http.put('/budgets/week/' + data.week , JSON.stringify(data))
      .then()
      .catch();
  }
  function getBudget(week) {
    var budgets = $http.get('/budgets/week/' + week)
      .then(function(data){
        var items = data.data[0];
        items.totalIncomes = items.incomes.map((income) => parseInt(parseFloat(income.amount)*10)).reduce(function(prev, curr) {
          return prev + curr;
        }, 0);
        items.totalExpenses = items.expenses.map((income) => parseInt(parseFloat(income.amount)*10)).reduce(function(prev, curr) {
          return prev + curr;
        }, 0);
        vm.data = items;
        return data.data[0];
      });
    return budgets;
    //return $http.get('/budgets/week/' + week);
  }
  function getUser() {
    return $http.get('users/user');
  }
  function removeIncome(data) {
    return $http.put('/budgets/remove/income', JSON.stringify(data))
      .then()
      .catch();
  }
  function removeExpense(data) {
    return $http.put('/budgets/remove/expense', JSON.stringify(data))
      .then()
      .catch();
  }
}
