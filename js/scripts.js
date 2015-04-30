$(document).ready(function(){

    $('.submit-btn').click(function(){
        window.location = $(this).attr('topage');
    });

    $('button.edit-form').click(function(){
        $('form.edit-form').slideDown();
    });

    $('input:radio[name="optradio"]').change(function(){
        if($(this).is(':checked') && $(this).val() == 'account'){
            $('div.no-account').slideUp('slow', function(){
                $('div.account').slideDown('slow');
            });
        } else {
            $('div.account').slideUp('slow', function(){
                $('div.no-account').slideDown('slow');
            });
        }
    });

    $('span.help').click(function(){
        $('div.overlay').show();
        $('div.message-box>h4').text($(this).attr('alt'));
        $('div.message-box>p.message').text('Nunc feugiat tellus sed ullamcorper vehicula. Integer rutrum gravida sagittis. Vestibulum varius justo eu iaculis interdum. Ut posuere mollis enim, sed elementum justo. Morbi ultrices sed velit id fermentum.');
        $('div.message-box>p.prompt').text($(this).attr('prompt'));
        $('div.message-box').show();
    });

    $('.close-mb, button.yes').click(function(){
        $('div.overlay').hide();
        $('div.message-box').hide();
        $('div.message-box>h4').text('');
        $('div.message-box>p.message').text('');   
        $('div.message-box>p.prompt').text('');   
    });

    $('button.no').click(function(){
        $('div.overlay').hide();
        $('div.message-box').hide();
        $('div.message-box>h4').text('');
        $('div.message-box>p.message').text('');   
        $('div.message-box>p.prompt').text('');
        $('div.email').hide();
        $('div.username').show();
    });

    $('a.email').click(function(){
        $('div.username').hide();
        $('div.email').show();
        
    });
});