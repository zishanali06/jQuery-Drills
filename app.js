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
        $('h2').mouseover(function(){
            $('h2').css('background-color', 'red');
            $('h2').css('border-radius', '15px')
        });
        return false;
    }); // WHY USE THIS .on INSTEAD OF  $('#btnSubmit').click(function(){});

    $('body').append('<div class="div"></div>');

    
});



