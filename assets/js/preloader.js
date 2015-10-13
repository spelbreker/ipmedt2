/**
 * Created by Patrick on 9-10-2015.
 */

jQuery(document).ready(function($) {

// site preloader -- also uncomment the div in the header and the css style for #preloader
    $(window).load(function(){
        $('body').removeClass('loading').addClass('loaded');
        $('.dots-loader').fadeOut('normal',function(){$(this).remove();});
    });

});