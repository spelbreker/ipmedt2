/**
 * Created by Patrick on 9-10-2015.
 */

jQuery(document).ready(function($) {

// site preloader -- also uncomment the div in the header and the css style for #preloader
    $(window).load(function(){
        $('.dots-loader,.loading-overlay').fadeOut('normal',function(){$(this).remove();});
    });

});