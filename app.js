$(document).ready(function () {
    $('input[type="text"]').on('input change', function () {
        if ($(this).val() != '') {
            $('#btnSubmit').attr('disabled',false);
            // this does same thing $('#btnSubmit').prop('disabled', false);
        }
        else {
            $('#btnSubmit').attr('disabled',true);
            // this does same thing $('#btnSubmit').prop('disabled', true);
        }
    });

    $('#btnSubmit').on('click', function () {
        alert($('input[type="text"]').val());

    }); // WHY USE THIS .on INSTEAD OF  $('#btnSubmit').click(function(){});


});



