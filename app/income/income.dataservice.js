angular
    .module('app')
    .factory('incomeService', dataservice);

dataservice.$inject = ['$http'];

function dataservice($http) {
  return {
    addIncome: addIncome,
    getIncomes: getIncomes
  };

  function addIncome(data) {
    return $http.post('/incomes', JSON.stringify(data))
      .then()
      .catch();
  }

  function getIncomes() {
    return $http.get('/incomes')
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
