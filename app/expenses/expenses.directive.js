angular
    .module('app')
    .directive('expenses', function() {
      return {
        restrict: 'E',
        templateUrl: 'expenses/expenses.html'
      };
    });
