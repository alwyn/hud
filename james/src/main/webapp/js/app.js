var myApp = angular.module('myApp', []);

myApp.controller('balancesController', function($scope, $http) {
  $http.get("http://localhost:8080/accounts")
    .success(function(response) {
      $scope.names = response;
    });
});

myApp.controller('quickTransferController', function($scope, $http) {
    $http.get("http://localhost:8080/accounts")
      .success(function(response) {
          $scope.accounts = response;
          $scope.account = $scope.accounts[0];
      });

});
