var hud = angular.module('hud', []);

hud.controller('balancesController', function($scope, $http) {
  $http.get("http://localhost:8080/accounts")
    .success(function(response) {
      $scope.accounts = response;
    });
});

hud.controller('quickTransferController', function($scope, $http) {
    $http.get("http://localhost:8080/accounts")
      .success(function(response) {
          $scope.accounts = response;
          $scope.account = $scope.accounts[0];
      });
});

hud.controller('billPayController', function($scope, $http) {

});

