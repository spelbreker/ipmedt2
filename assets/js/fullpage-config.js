
//full page js configuration

var firstVisit = true;

$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['','#ebebe8','#ebebe8','#ebebe8','#ebebe8','#ebebe8','#ebebe8'],
        anchors:['landing', 'apranet','tcp-ip','websites','grafiek','wireless','timeline'],
        menu: true,
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
        }
    });
});