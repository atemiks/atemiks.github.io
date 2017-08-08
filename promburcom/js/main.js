$(document).ready(function() {
    'use strict'

    /* animation effect */
    jQuery('.post').addClass("unshow").viewportChecker({
        classToAdd: 'show animated fadeInUp',
        offset: 100
    });

    /* Off canvas - Start */

    $('.off-canvas-toggle').on('click', function(e) {
        e.preventDefault();
        $('.off-canvas-sidebar li:not(:has(.sub-menu)) span').addClass('hide-menu');
        $('body').toggleClass('off-canvas-opened');
        $('html').toggleClass('off-canvas-opened');
    });

    $('.close-off-canvas').on('click', function(e) {
        e.preventDefault();
        $('.off-canvas-sidebar li:not(:has(.sub-menu)) span').addClass('hide-menu');
        $('body').removeClass('off-canvas-opened');
        $('html').removeClass('off-canvas-opened');
    });

    $('.off-canvas-menu a').on('click', function() {
        $('.off-canvas-sidebar li:not(:has(.sub-menu)) span').addClass('hide-menu');
        $('body').removeClass('off-canvas-opened');
        $('html').removeClass('off-canvas-opened');
    });

    $('.off-canvas-menu .sub-menu-toggle').on('click', function() {
        var current_root = $(this).closest('.menu-item-has-children').toggleClass('opened');

        current_root.find('> .sub-menu').slideToggle(300);

        if (current_root.closest('.sub-menu').length) {
            var current_root = current_root.parents('.menu-item-has-children').last();
        }

        var root_items = $(this).closest('div').find('> ul > .menu-item-has-children').not(current_root);

        root_items.removeClass('opened').find('> .sub-menu').slideUp(300);
    });
    /* Off canvas - End */

   


    var 
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.top'),
        // grab the header
        $header = $('.header-box'),
        // grab the "fixed header"
        $fixedHeader = $('.header-fixed'),
        offset = $header.height();

        console.log('offset' + offset);


    //hide or show the "back to top" link
    $(window).scroll(function(){
        if( $(this).scrollTop() > offset ) {
            $back_to_top.addClass('is-visible')
            $fixedHeader.addClass('is-visible');
        }
        else {
            $back_to_top.removeClass('is-visible fade-out')
            $fixedHeader.removeClass('is-visible');
        }

        if( $(this).scrollTop() > offset_opacity ) { 
            $back_to_top.addClass('fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0 ,
            }, scroll_duration
        );
    });

    // smooth scroll links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - $fixedHeader.height()
            }, scroll_duration, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });



    // sliders init
    $('.slider-hero').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false
    });

    $('.slider-testimonials').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true
            }
        }]
    });
});
