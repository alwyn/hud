var myApp = angular.module('myApp', []);

myApp.controller('GreetingController', function($scope, $http) {
	$http.get("http://www.w3schools.com/website/Customers_JSON.php")
		.success(function(response) {
			$scope.names = response;
		});
});
