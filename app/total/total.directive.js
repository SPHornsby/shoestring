angular
    .module('app')
    .directive('total', function() {
      return {
        restrict: 'E',
        templateUrl: 'total/total.html'
      };
    });