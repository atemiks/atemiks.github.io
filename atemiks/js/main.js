$(document).ready(function() {
    'use strict'

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 300);
                }
            }
        });

    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        //duration of the top scrolling animation (in ms)
        scrollTopDuration = 700,
        //grab the "back to top" link
        $headerFixed = $('.header-box');

    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $headerFixed.addClass('header-fixed') : $headerFixed.removeClass('header-fixed');
    });

    //smooth scroll to top
    // $headerFixed.on('click', function(event){
    //     event.preventDefault();
    //     $('body,html').animate({
    //         scrollTop: 0 ,
    //         }, scrollTopDuration
    //     );
    // });


    // header
 //    $(".header-toggle, .mobile-navigation-close").on( "click", function() {
 //    	$('html, body').toggleClass('mobile-navigation-open');
 //    	$(".mobile-navigation").toggleClass('mobile-navigation-active');
	// });

    /* play video twice as fast */
      document.querySelector('video').defaultPlaybackRate = 0.5;
      document.querySelector('video').play();

    // $('.slider-hero').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     dots: true
    // });

});
