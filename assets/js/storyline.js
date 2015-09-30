/**
 * Created by Patrick on 30-9-2015.
 */

//first page
$('#startReading').click(function(e){
    $('#ModemSound').get(0).play();


    $('#landing-txt,#startReading').hide();
    $('.connecting').show();

    $("#ModemSound").bind('ended', function(){
        //enable scroll and arrow keys
        $.fn.fullpage.setMouseWheelScrolling(true);
        $.fn.fullpage.setAllowScrolling(true);
        //move section down
        $.fn.fullpage.moveSectionDown();

        setTimeout(function(){
            $('#landing-txt,#startReading').show();
            $('.connecting').hide();
        }, 2000);


    });
});


