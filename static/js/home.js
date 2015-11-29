/*global $, jQuery*/
/*jslint vars: true*/

function loadInsta() {
    "use strict";
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://api.instagram.com/v1/users/self/media/recent?access_token=229943735.71da50e.ed75f052e06949b8884e564c3666cc95",
        success: function (data) {
            var i;
            for (i = 0; i < data.data.length; i += 1) {
                $("#instaImageContainer").append("<a target='_blank' href='" + data.data[i].link + "'><img id=\"instaImage\"src='" + data.data[i].images.low_resolution.url + "'></img></a>");
            }
        }
    });
}

$(document).ready(function () {
    "use strict";
/*
    /*$("#header").animate({
        scrollTop: 2000
    }, 40000);*/
    $('#header').addClass('addBottomShadow');
    $('#header').scroll(function () {

        //get scroll position
        var topWindow = $('#header').scrollTop();
        //multiply by 1.5 so the arrow will become transparent half-way up the page
        topWindow = topWindow * 1.5;

        //get height of window
        var windowHeight = $('#header').height();

        //set position as percentage of how far the user has scrolled 
        var position = topWindow / windowHeight;
        //invert the percentage
        position = 1 - position;

        //define arrow opacity as based on how far up the page the user has scrolled
        //no scrolling = 1, half-way up the page = 0
        if (position < 1) {
            $('#header').removeClass('addBottomShadow');
        } else {
            $('#header').addClass('addBottomShadow');
        }
    });
    $(".stripe-button-el").html('<span>Make a deposit</span>');
*/
    loadInsta();

});