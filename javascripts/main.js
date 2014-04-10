/**
 * Created by fan on 14-2-9.
 */

$(document).ready(function () {
    /*
    var color = [];
    color[0] = '#b58900';
    color[1] = '#cb4b16';
    color[2] = '#dc322f';
    color[3] = '#d33682';
    color[4] = '#6c71c4';
    color[5] = '#268bd2';
    color[6] = '#2aa198';
    color[7] = '#859900';


    $("#nav a").each(function(){
        var t = Math.floor(Math.random() * color.length);
        $(this).css("color", color[t]);
    });

    $("#nav a").hover(function(){
            var t = Math.floor(Math.random() * color.length);
            $(this).css("color", color[t]);
        },
        function () {
        }
    );
    */

    $("aside > section > ul.sns a").hover(function(){
            $(this).toggleClass('sns-hover');
        }
    );
});




