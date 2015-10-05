/**
 * Created by Patrick on 30-9-2015.
 */

//first page
$('#startReading').click(function(e){

    //play sound
    //$('#ModemSound').get(0).play();

    //show connection animation
    $('#landing-txt,#startReading').hide();
    $('.connecting').show();


    setTimeout(function()
    { //if sound end

        //enable scroll and arrow keys
        $.fn.fullpage.setMouseWheelScrolling(true);
        $.fn.fullpage.setAllowScrolling(true);
        $.fn.fullpage.setKeyboardScrolling(true);

        //move section down
        $.fn.fullpage.moveSectionDown();

        //after 2 seconds set old text back
        setTimeout(function(){
            $('#landing-txt,#startReading').show();
            $('.connecting').hide();
        }, 2000);

    },4000);
});


