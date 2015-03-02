angular.module('balances', [])
    .controller('balancesController', function($scope, $http) {
        $http.get("http://localhost:8080/accounts")
            .success(function(response) {
                $scope.accounts = response;
        });

        $scope.getAccountDetails = function(a) {
          $http.get("http://localhost:8080/account/" + a.id)
            .success(function(response) {
              $scope.selectedAccount = response;
            });
    
          $('#account-history').removeClass('hidden');
          $('#balance-list').addClass('hidden');
        };
    
        $scope.showBalances = function($event) {
          $('#account-history').addClass('hidden');
          $('#balance-list').removeClass('hidden');
        }
    });