angular.module('hud').controller('quickTransferController', function($scope, $http) {
    $http.get("http://localhost:8080/accounts")
      .success(function(response) {
          $scope.accounts = response;
          $scope.account = $scope.accounts[0];
      });

    $scope.submitTransfer = function($event) {
        var $btn = $event.currentTarget;
        showAlert("Transfer has been completed! Reference number: 93838", "alert-success");
        alert($scope.fromAccount.id)
    };

    $scope.confirmTransfer = function($event) {
        var $btn = $($event.currentTarget)
        if ($btn.hasClass('btn-success'))
        {
          return;
        }
        $btn.button('loading')
        setTimeout(function() {
          $btn.removeClass('btn-primary').addClass('btn-success');
          $btn.button('complete');
          showAlert("Transfer has been completed! Reference number: 93838", "alert-success");
        }, 2000);
    };
});

function showAlert(message, alert_type) {
    $('#alert-placeholder').append(
        '<div id="alert-div" class="alert ' +  alert_type + ' fade in">' +
            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
            '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>' + message + '</span>' +
        '</div>');

    $('#alert-div').on('closed.bs.alert', function () {
        if ($('#qTransferButton').hasClass('btn-success'))
        {
            $('#qTransferButton').removeClass('btn-success');
            $('#qTransferButton').addClass('btn-primary');
            $('#qTransferButton').button('reset');
            return;
        }
    })
};