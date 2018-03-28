$(function () {
    
    $('#alcoveLogo').css('opacity', 0.5);
    
    $('.servicesBtn').css('color','#FF');
    
    $('button').css('border', '1px solid red');
    
    $('h2').css('border','1px solid red');
    
    $('input[name="nameVal"]').css('border','1px solid red');
    
    $('input[name!="phoneNum"]').css('border','1px solid red');
    
    $(".navigation > li:eq(2)").parent().css('opacity','0.3');
    
    $('.servicesBtn').closest('div').css('background-color','rgba(255,0,0,0.2)');
    

    $('.coreValues').prepend("<li><strong>This is brand new !!</strong></li>");
    $("<li><strong>This is also great!!</strong></li>").prependTo('.coreValues');

    var nameVal = $('input[name="nameVal"]');

    function fillEmpty() {
        if (nameVal.val() == '') {
            nameVal.val( 'John Doe' );
        }
    }
    $('#ReqAQuoteBtn').click(fillEmpty);
})

