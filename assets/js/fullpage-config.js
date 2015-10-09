
//full page js configuration

var firstVisit = true;

mobilefullpage = {
    sectionsColor: ['','#ebebe8','#ebebe8','#ebebe8','#ebebe8','#ebebe8','#ebebe8'],
    anchors:['landing', 'apranet','video','websites','grafiek','wireless','timeline'],
    menu: 'nav',
    css3: true,
    autoScrolling: false,
    fitToSection: false,
    animateAnchor: true,
    scrollingSpeed: 70000000000,
};

normalfullpage = {
    sectionsColor: ['','#ebebe8','#ebebe8','#ebebe8','#ebebe8','#ebebe8','#ebebe8'],
    anchors:['landing', 'apranet','video','websites','grafiek','wireless','timeline'],
    menu: 'nav',
    css3: true,

    afterLoad: function(anchorLink, index){
        var loadedSection = $(this);
        console.log('active');
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
            $("#apranet-vid")[0].src += "&autoplay=1";
        } else {
            //player.stopVideo();
        }
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
                $.fn.fullpage.autoScrolling(false);
                $.fn.fullpage.fitToSection(false);
                $.fn.fullpage.scrollingSpeed(70000000000);
            } else  {
                $.fn.fullpage.autoScrolling(true);
                $.fn.fullpage.fitToSection(true);
                $.fn.fullpage.scrollingSpeed(700);
            }
        });


        //init config
        loadFullpageConfig();
    });
});