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
    let colors = ['red', 'blue', 'green', 'purple', 'yellow'];
    $('#btnSubmit').on('click', function () {
        let newli = $("<li id='" + id + "'>" + $('input[type="text"]').val() + "</li>")
        $('ul').append(newli);
        newli.click(function(){
            newli.css('background-color', colors[Math.floor(Math.random() * 5)]);
            newli.css('border-radius', '15px')
        });
        id++;
        newli.dblclick(function(){
            newli.remove();
        })
        return false;
    }); // WHY USE THIS .on INSTEAD OF  $('#btnSubmit').click(function(){});

    $('body').append('<div class="div"></div>');
    
    // cant get it done
});



