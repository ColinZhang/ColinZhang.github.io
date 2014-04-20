/**
 * Created by fan on 14-2-9.
 */

$("document").ready(function($){
    /* Sticky Navigation Bar */
    width = $("nav").css("width");

    $(window).scroll(function () {

        if ($("body").height() - $(window).height() < 200){
            return;
        }

        if ($(this).scrollTop() > 125) {
            $("body").addClass("nav-fixed");
            $("nav").css("width", width);

        } else {
            $("body").removeClass("nav-fixed");

        }
    });

});




