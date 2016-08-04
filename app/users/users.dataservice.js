angular
    .module('app')
    .factory('usersService', usersService);

usersService.$inject = ['$http'];

function usersService($http) {
  return {
    addIncome: addIncome,
    addExpense: addExpense,
    getBudget: getBudget,
    getIncomes: getIncomes,
    getExpenses: getExpenses,
    getUser: getUser
  }

  function addIncome(data) {
    return $http.put('/budgets/week/' + data.week , JSON.stringify(data))
      .then()
      .catch();
  }

  function addExpense() {

  }
  function getBudget(week) {
    return $http.get('/budgets/week' + week)
      .then()
      .catch();
  }
  function getIncomes() {
    return $http.get('/users/user/incomes')
      .then()
      .catch();
  }

  function getExpenses() {

  }
  function getUser() {
    return $http.get('users/user');
  }
}
