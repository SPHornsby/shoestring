angular
    .module('app')
    .directive('users', function() {
      return {
        restrict: 'E',
        templateUrl: 'users/users.html',
        controller: 'UsersController',
        controllerAs: 'users'
      };
    });
