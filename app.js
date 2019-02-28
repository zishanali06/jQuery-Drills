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
        $('.div').append('<h2>' + $('input[type="text"]').val() + '</h2>')
        return false; //stops page from reloading on submit
    }); // WHY USE THIS .on INSTEAD OF  $('#btnSubmit').click(function(){});

    $('body').append('<div class="div"></div>');

});



