angular
    .module('app')
    .directive('chart', function() {
      return {
        restrict: 'E',
        templateUrl: 'charts/chart.html'
      };
    });