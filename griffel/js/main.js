$(document).ready(function () {
    'use strict'

    /* animation effect */
    jQuery('.post').addClass("unshow").viewportChecker({
        classToAdd: 'show animated fadeInUp',
        offset: 100
    });

    $('#burger button').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('mob_menu_open ');
    });

    // sliders init
    $('.slider-services').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });


});