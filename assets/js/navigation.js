/**
 * Created by Patrick on 6-10-2015.
 */
$(function () {
    $(document).ready(function () {
        $('#hamburger').click(function () {
            $(this).toggleClass('open');
            $('nav').toggle(500);
        });

        $(window).resize(function () {
            if ($(window).width() > 850) {
                $('nav').show();
                $(this).removeClass('open');
            } else {
                $('nav').hide();
                $('#hamburger').removeClass('open');
            }
        });
    });
});