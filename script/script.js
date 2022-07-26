// https://api.telegram.org/bot5304864944:AAH6R-qrz86BEwMMTzFRztoBv3TpMmA5_2w/getUpdates

$('#button').on('click', function(e){
    e.preventDefault();

    let name = $('#name').val().trim();
    let email = $('#email').val().trim();

    if(name == ''){
        $('#error-name').text('Enter you name')
    }else if(email == ''){
        $('#error-email').text('Enter you email')
    }

    $.ajax({
        url: 'ajax/telegram.php',
        type: 'POST',
        cache: false,
        date: {'name': name, 'email': email},
        dataType: 'html',
        beforeSend: function(){
          $('#button').prop('disabled', true)  
        },
        success: function(){
            $('#error-name').text('');
            $('#error-email').text('');
            $('#name').val('');
            $('#email').val('');
        }
    })
})