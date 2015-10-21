/**
 * Created by Patrick on 30-9-2015.
 */

$(function () {
    //first page
    $('#startReading').click(function(e){

        $('#ModemSound').get(0).play();

        //show connection animation
        $('#landing-txt,#startReading').hide();
        $('.connecting').show();

        var introSelector = $("#introText h2:first");

        setTimeout(function(){
            introSelector.fadeIn('slow');
        }, 2000);

        setTimeout(function(){
            introSelector.hide();
            introSelector = introSelector.next().fadeIn('slow');
        }, 7000);

        setTimeout(function(){
            introSelector.hide();
            introSelector = introSelector.next().fadeIn('slow');
        }, 12000);

        setTimeout(function(){
            introSelector.hide();
            introSelector = introSelector.next().fadeIn('slow');
        }, 17000);

        setTimeout(function(){
            introSelector.hide();
            introSelector = introSelector.next().fadeIn('slow');
        }, 22000);

        setTimeout(function(){
            introSelector.hide();
            introSelector = introSelector.next().fadeIn('slow');
        }, 27000);



        //modemsound on end
        $('#ModemSound').get(0).onended = function() {
            //enable scroll and arrow keys
            //$.fn.fullpage.setAllowScrolling(true);
            $.fn.fullpage.setAllowScrolling(true);
            $.fn.fullpage.setKeyboardScrolling(true);

            //move section down
            $.fn.fullpage.moveSectionDown();

            //after 2 seconds set old text back
            setTimeout(function(){
                $('#landing-txt,#startReading').show();
                $('.connecting').hide();
            }, 2000);
        };

    });


    //if screen <= 650px enable scroll disable intro
    function screenSizeIntroOverwrite() {
        if($(window).width() <= 650) {
            //$.fn.fullpage.setAllowScrolling(true);
            $.fn.fullpage.setAllowScrolling(true);
            $.fn.fullpage.setKeyboardScrolling(true);
        }
    }


    $( window ).resize(screenSizeIntroOverwrite());

    screenSizeIntroOverwrite();
});