// Returns height of browser viewport

//set site video
initheight = $( window ).height();
$('#apranet-vid').height(initheight-30);

//on window resize resize video
$(window).resize(function () {
    $('#apranet-vid').height($( window ).height()-30);
});

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var obj = $("#apranet-vid");
var pos = obj.position();

function onYouTubeIframeAPIReady() {
    // video1 must be the div #id of the video container
    player = new YT.Player('apranet-vid', {
        height: '315',
        width: '560',
        videoId: 'h8K49dD52WA',
        playerVars: {
            controls: 1,
            showinfo: 0,
            autohide: 2,
            modestbranding: 1,
            wmode: "opaque",
            end: 187,
            start: 3
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
function onPlayerReady(event) {
    event.target.setVolume(100);
    console.log('player is ready');
}

function onPlayerStateChange(event) {
    switch (event.data) {
        case YT.PlayerState.UNSTARTED:
            //console.log('unstarted');
            break;
        case YT.PlayerState.ENDED:
            //console.log('ended');
            $.fn.fullpage.moveSectionDown();
            break;
        case YT.PlayerState.PLAYING:
            //console.log('playing');
            break;
        case YT.PlayerState.PAUSED:
            //console.log('paused');
            break;
        case YT.PlayerState.BUFFERING:
            //console.log('buffering');
            break;
        case YT.PlayerState.CUED:
            //console.log('video cued');
            break;
    }
}


stopVideo = (function() {
    player.stopVideo();
});

function playVideo() {
    player.playVideo();
}

