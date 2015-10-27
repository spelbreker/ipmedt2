
//full page js configuration

var firstVisit = true;
var lastIndex = 0;
var loadedChart = false;
var loadedBubble = false;

$(function () {
    $(document).ready(function() {

        $('#fullpage').fullpage({
            sectionsColor: ['','#ebebe8','#ebebe8','#ebebe8','#ebebe8','#ebebe8','#ebebe8','#ebebe8','#ebebe8','#ebebe8','#ebebe8','#ebebe8','#ebebe8','#ebebe8'],
            anchors:['landing', 'apranet','video','trans-website','domein','trans-big-site','websites','trans-wireless','wireless','trans-future','future'],
            menu: 'nav',
            css3: true,
            resize:false,
            scrollOverflow:true,
            autoScrolling: true,

            afterLoad: function(anchorLink, index){
                var loadedSection = $(this);

                //using index
                if(index == 1){
                    if(firstVisit && $(window).width() > 750) {
                        $.fn.fullpage.setMouseWheelScrolling(false);
                        $.fn.fullpage.setAllowScrolling(false);
                        $.fn.fullpage.setKeyboardScrolling(false);
                    }
                } else {
                    firstVisit = false;
                    $.fn.fullpage.setMouseWheelScrolling(true);
                    $.fn.fullpage.setAllowScrolling(true);
                    $.fn.fullpage.setKeyboardScrolling(true);
                }

                if(anchorLink == 'video') {
                    playVideo();
                } else {
                    if(lastIndex == 'video') {
                        stopVideo();
                    }
                }

                //total websites
                if(anchorLink == 'domein') {
                    if(loadedChart === false) {
                        loadWebsiteChart();
                        loadedChart = true;
                    }
                }

                //website bubles
                if(anchorLink == 'websites') {
                    if(loadedBubble === false) {
                        loadWebsiteBuble();
                        loadedBubble = true;
                    }

                }

                //wireless vs wired
                if(anchorLink == 'wireless') {
                    $('#wirelessVideo').get(0).play();
                }

                //trans
                if(anchorLink.indexOf("trans-") > -1) {
                    setTimeout(function(){
                        var mustChange = loadedSection.find('ul.progress li div.change');
                        mustChange.removeClass('grey');
                        mustChange.addClass('blue');
                    },500);

                }

                lastIndex = anchorLink;
            }
        });

        //resize workaround
        $(window).resize(function(){
            console.log('resize');
            $('.container').css( "position", "static" );
            $('.container').css( "top", "0" );
            $('.container').css( "transform", "none" );
        });

    });
});