angular.module('hud').controller('quickTransferController', function($scope, $http) {
    $http.get("http://localhost:8080/accounts")
      .success(function(response) {
          $scope.accounts = response;
          $scope.account = $scope.accounts[0];
      });

    $scope.confirmTransfer = function(transfer) {
        $scope.transfer = transfer;
        $('#transfer-form-div').addClass('hidden');
        $('#confirm-dialog').removeClass('hidden');
    };

    $scope.submitTransfer = function($event, transfer, transferForm) {
        console.log($event);
        var $btn = $($event.currentTarget)
        if ($btn.hasClass('btn-success'))
        {
          return;
        }
        $btn.button('loading')
        setTimeout(function() {
          $('#confirm-dialog').addClass('hidden');
          $btn.removeClass('btn-primary').addClass('btn-success');
          $btn.button('complete');
          $scope.showAlert("Transfer has been completed! Reference number: 93838", "alert-success");
        }, 2000);


    };

    $scope.showAlert = function(message, alertType) {
        $('#alert-placeholder').append(
            '<div id="alert-div" class="alert ' +  alertType + ' fade in">' +
                '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
                '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>' + message + '</span>' +
            '</div>');

        $('#alert-div').on('closed.bs.alert', function () {
            if ($('#qTransferSubmit').hasClass('btn-success'))
            {
                $('#qTransferSubmit').removeClass('btn-success');
                $('#qTransferSubmit').addClass('btn-primary');
                $('#qTransferSubmit').button('reset');
            }

            $scope.resetTransferForm(transferForm);
        })
    };

    $scope.resetTransferForm = function(transferForm)
    {
        $('#transfer-form-div').removeClass('hidden');
        $scope.transfer = null;
        transferForm.$setPristine();
        transferForm.$setUntouched();
        transferForm.transfer.fromAccount = null;
        transferForm.transfer.toAccount = null;
        transferForm.transfer.amount = null;

    }
});