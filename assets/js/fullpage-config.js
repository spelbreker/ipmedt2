
//full page js configuration

var firstVisit = true;
var lastIndex = 0;
var loadedChart = false;
var loadedBubble = false;
var arpaVisit = true;
var domeinVisit = true;
var websitesVisit = true;
var wirelessVisit = true;

$(function () {
    $(document).ready(function() {

        //hide tekst parts on slides
        $('#part-1').hide();
        $('#arpa-img').hide();
        $('#part-3').hide();
        $('#part-4').hide();
        $('#part-5').hide();

        $('#fullpage').fullpage({
            sectionsColor: ['','#ebebe8','#ebebe8','#ebebe8','#ebebe8','#ebebe8','#ebebe8','#ebebe8','#ebebe8','#ebebe8','#ebebe8','#ebebe8','#ebebe8','#ebebe8'],
            anchors:['landing', 'arpanet','video','trans-website','domein','trans-big-site','websites','trans-wireless','wireless','trans-future','future'],
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

                if(anchorLink == 'arpanet') {
                    if(arpaVisit) {
                        $('#part-1').show();
                        $('#arpa-img').show();
                        $('#part-1').addClass('animated fadeInLeft');
                        $('#arpa-img').addClass('animated fadeInRight');
                        arpaVisit = false;
                    }
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

                    if(domeinVisit) {
                        $('#part-3').show();
                        $('#part-3').addClass('animated fadeInLeft');
                        domeinVisit = false;
                    }
                }

                //website bubles
                if(anchorLink == 'websites') {
                    if(loadedBubble === false) {
                        loadWebsiteBuble();
                        loadedBubble = true;
                    }

                    if(websitesVisit) {
                        $('#part-4').show();
                        $('#part-4').addClass('animated fadeInLeft');
                        websitesVisit = false;
                    }

                }

                //wireless vs wired
                if(anchorLink == 'wireless') {
                    $('#wirelessVideo').get(0).play();

                    if(wirelessVisit) {
                        $('#part-5').show();
                        $('#part-5').addClass('animated fadeInLeft');
                        wirelessVisit = false;
                    }
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