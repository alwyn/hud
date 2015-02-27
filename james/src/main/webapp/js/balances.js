angular.module('hud').controller('balancesController', function($scope, $http) {
  $http.get("http://localhost:8080/accounts")
    .success(function(response) {
      $scope.accounts = response;
    });
});