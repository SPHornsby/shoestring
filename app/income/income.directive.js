angular
    .module('app')
    .directive('income', function() {
      return {
        restrict: 'E',
        templateUrl: 'income/income.html'
      };
    });
