$('#qtransferButton').on('click', function () {
      var $btn = $(this);
      if ($btn.hasClass('btn-success'))
      {
          return;
      }
      $btn.button('loading')
      setTimeout(function() {
          $btn.removeClass('btn-primary').addClass('btn-success');
          $btn.button('complete');
          show_alert("Transfer has been completed! Reference number: 93838", "alert-success");
      }, 2000);
});

function show_alert(message, alert_type) {
    $('#alert-placeholder').append(
        '<div id="alert-div" class="alert ' +  alert_type + ' fade in">' +
            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
            '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>' + message + '</span>' +
        '</div>');

    $('#alert-div').on('closed.bs.alert', function () {
        if ($('#qtransferButton').hasClass('btn-success'))
        {
            $('#qtransferButton').removeClass('btn-success');
            $('#qtransferButton').addClass('btn-primary');
            $('#qtransferButton').button('reset');
            return;
        }
    })

//    setTimeout(function() {
//      $("#alertdiv").remove();
//    }, 5000);
};
