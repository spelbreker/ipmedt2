// Returns height of browser viewport

//set site video
initheight = $( window ).height();
$('#future-vid').height(initheight-30);

//on window resize resize video
$(window).resize(function () {
    $('#future-vid').height($( window ).height()-30);
});


var playerFuture;
var obj = $("#future-vid");
var pos = obj.position();

// player loaded in apranet-video.js

function playVideoFuture() {
    playerFuture.playVideo();
}


