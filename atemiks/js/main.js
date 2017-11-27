$(document).ready(function() {
    'use strict'

    // header
    $(".header-toggle, .mobile-navigation-close").on( "click", function() {
    	$('html, body').toggleClass('mobile-navigation-open');
    	$(".mobile-navigation").toggleClass('mobile-navigation-active');
	});

    /* play video twice as fast */
      document.querySelector('video').defaultPlaybackRate = 0.5;
      document.querySelector('video').play();

    $('.slider-hero').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true
    });

});
