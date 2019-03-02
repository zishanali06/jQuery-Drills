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
    $('body').append('<ul></ul>');
    let id = 0;
    $('#btnSubmit').on('click', function () {
        
        $('ul').append("<li id='" + id + "'>" + $('input[type="text"]').val() + "</li>");
        $('li').click(function(){
            $('li').css('background-color', 'red');
            $('li').css('border-radius', '15px')
        });
        id++;
        return false;
    }); // WHY USE THIS .on INSTEAD OF  $('#btnSubmit').click(function(){});

    $('body').append('<div class="div"></div>');
    
    // cant get it done
});



