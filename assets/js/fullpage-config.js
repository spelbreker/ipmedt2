
//full page js configuration
$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['', '#364B60', '#364B60', '#364B60', '#364B60','#364B60', '#364B60'],
        anchors:['landing', 'apranet','tcp-ip','websites','grafiek','bacon','ending'],
    });

    $.fn.fullpage.setMouseWheelScrolling(false);
    $.fn.fullpage.setAllowScrolling(false);

});