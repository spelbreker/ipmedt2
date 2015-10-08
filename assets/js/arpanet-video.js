// Returns height of browser viewport

//set site video
initheight = $( window ).height();
$('#apranet-vid').height(initheight-30);

//on window resize resize video
$(window).resize(function () {
    $('#apranet-vid').height($( window ).height()-30);
});

$(document).ready(function(){
    /*
    player = new YT.Player('apranet-vid', {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });

    function onPlayerStateChange(event) {
        switch(event.data) {
            case YT.PlayerState.ENDED:
                $.fn.fullpage.moveSectionDown();
                break;
            case YT.PlayerState.PLAYING:

                break;
            case YT.PlayerState.PAUSED:
                console.log('paused');
                break;
            case YT.PlayerState.BUFFERING:

                break;
            case YT.PlayerState.CUED:

                break;
        }
    }*/
});

