/**
 * Created by fan on 14-2-9.
 */

$("document").ready(function($){
    /* Sticky Navigation Bar */

    $(window).scroll(function () {
        if ($("body").height() - $(window).height() < 200){
            return;
        }

        if ($(this).scrollTop() > 125) {
            $("body").addClass("nav-fixed");
            $("nav").css("width", $("nav").css("width"));
        } else {
            $("body").removeClass("nav-fixed");

        }
    });

});




