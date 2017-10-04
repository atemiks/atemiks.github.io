$(document).ready(function() {
    'use strict'

    $("body").niceScroll(); 

    // header
    var 
        $header = $('.header-box'),
        $fixedHeader = $('.header-fixed'),
        offset = $header.height();

     $(window).scroll(function(){
        if( $(this).scrollTop() > offset ) {
            $fixedHeader.addClass('is-visible');
        }
        else {
            $fixedHeader.removeClass('is-visible');
        }
    });

     // init hypher
    jQuery(function ($) {
        $('.text-justify p').hyphenate('ru');
    });


    $('.services-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        asNavFor: '.services-slider-nav'
    });
    $('.services-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.services-slider',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

});
