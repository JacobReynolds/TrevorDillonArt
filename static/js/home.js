/*global $, jQuery*/
$(document).ready(function () {
    "use strict";
    $('#header').addClass('addBottomShadow');
    $('#header').scroll(function () {
        /*jslint vars: true*/
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
            $('#header').addClass('addTopShadow');
        } else {
            $('#header').removeClass('addTopShadow');
            $('#header').addClass('addBottomShadow');
        }
    });
    $(".stripe-button-el").html('<span>Make a deposit</span>');
});
