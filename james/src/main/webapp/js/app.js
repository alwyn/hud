var myApp = angular.module('myApp', []);

myApp.controller('dataController', function($scope, $http) {
  $http.get("http://localhost:8080/accounts")
    .success(function(response) {
      $scope.names = response;
    });
});

myApp.controller('dataController2', function($scope) {
  $scope.names2 = [{
    Name: 'Jani',
    Country: 'Norway'
  }, {
    Name: 'Hege',
    Country: 'Sweden'
  }, {
    Name: 'Kai',
    Country: 'Denmark'
  }];
});
