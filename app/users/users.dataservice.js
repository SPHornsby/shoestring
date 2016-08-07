angular
    .module('app')
    .factory('usersService', usersService);

usersService.$inject = ['$http'];

function usersService($http) {
  return {
    addIncome: addIncome,
    addExpense: addExpense,
    getBudget: getBudget,
    getUser: getUser
  }

  function addIncome(data) {
    return $http.put('/budgets/week/' + data.week , JSON.stringify(data))
      .then()
      .catch();
  }

  function addExpense(data) {
    console.log(data);
    return $http.put('/budgets/week/' + data.week , JSON.stringify(data))
      .then()
      .catch();
  }
  function getBudget(week) {
    return $http.get('/budgets/week/' + week);
  }
  function getUser() {
    return $http.get('users/user');
  }
}
