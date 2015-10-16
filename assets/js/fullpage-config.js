
//full page js configuration

var firstVisit = true;
var lastIndex = 0;


mobilefullpage = {
    sectionsColor: ['','#ebebe8','#ebebe8','#ebebe8','#ebebe8','#ebebe8','#ebebe8'],
    anchors:['landing', 'apranet','video','websites','grafiek','wireless','timeline'],
    menu: 'nav',
    css3: true,
    autoScrolling: false,
    fitToSection: false,
    animateAnchor: true,
    scrollingSpeed: 70000000000
};

normalfullpage = {
    sectionsColor: ['','#ebebe8','#ebebe8','#ebebe8','#ebebe8','#ebebe8','#ebebe8'],
    anchors:['landing', 'apranet','video','websites','grafiek','wireless','timeline'],
    menu: 'nav',
    css3: true,

    afterLoad: function(anchorLink, index){
        var loadedSection = $(this);
        //using index
        if(index == 1){
            if(firstVisit) {
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

        if(index == 3) {
            playVideo();
        } else {
            if(lastIndex == 3) {
                stopVideo();
            }
        }

        //video slide
        if(index == 3) {
            playVideo();
        }

        //total websites
        if(index == 4) {
            loadWebsiteChart();
        }

        //website bubles
        if(index == 5) {
            loadWebsiteBuble();
        }

        //wireless vs wired
        if(index == 6) {

        }

        lastIndex = index;
    }
};


$(function () {
    $(document).ready(function() {

        function loadFullpageConfig() {
            //load config
            if($(window).width() < 900 ) {
                console.log('responive');
                $('#fullpage').fullpage(mobilefullpage);

            } else  {

                //$.fn.fullpage.destroy('all');
                $('#fullpage').fullpage(normalfullpage);
            }

        }



        $(window).resize(function () {
            if($(window).width() < 900 ) {
                $.fn.fullpage.setAutoScrolling(false);
                $.fn.fullpage.setFitToSection(false);
                $.fn.fullpage.setScrollingSpeed(70000000000);
            } else  {
                $.fn.fullpage.setAutoScrolling(true);
                $.fn.fullpage.setFitToSection(true);
                $.fn.fullpage.setScrollingSpeed(700);
            }
        });


        //init config
        loadFullpageConfig();
    });
});