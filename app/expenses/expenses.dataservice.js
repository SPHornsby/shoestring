angular
    .module('app')
    .factory('expenseService', dataservice);

dataservice.$inject = ['$http'];

function dataservice($http) {
  return {
    addIncome: addIncome,
    getIncomes: getIncomes
  };

  function addIncome(data) {
    return $http.post('/expenses', JSON.stringify(data))
      .then()
      .catch();
  }

  function getIncomes() {
    return $http.get('/expenses')
      .then(getIncomesComplete)
      .catch(getIncomesFailed);
    function getIncomesComplete(response) {
      return response.data;
    }
    function getIncomesFailed(error) {
      console.log(error);
    }
  }
}
