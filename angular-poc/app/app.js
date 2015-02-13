var myApp = angular.module('myApp', []);

myApp.controller('dataController', function($scope, $http) {
  $http.get("http://www.w3schools.com/website/Customers_JSON.php")
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
