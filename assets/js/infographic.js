/**
 * Created by Patrick on 13-10-2015.
 */

$(function () {

    $(document).ready(function () {
        infographicImageShow(1);

        $("#tijdbalk button").click(function () {
            infographicImageShow($(this).attr("data-periode"));
        });
    });

    function infographicImageShow(plaatje) {
        $("#infographic img").hide();

        switch (plaatje) {
            default:
            case "1":
                $("#1962").show();
                break;
            case "2":
                $("#1963-1971").show();
                break;
            case "3":
                $("#1972-1992").show();
                break;
            case "4":
                $("#1993-1999").show();
                break;

        }
    }

});