$(document).ready(function() {
    'use strict'

    //init

    // detect browser and init selects
    if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
      $("select").select2({
          minimumResultsForSearch: Infinity
        });

        $('select').select2()
        .on("select2:open", function () {
            $('.select2-results__options').niceScroll({
                cursoropacitymin: 1,
                cursorcolor:"rgba(27, 156,155,1)",
                cursorwidth:"45px",
                background:"#fff",
                cursorborder:"0px solid transparent",
                cursorborderradius:0
            });
        });
    }

    // init masonry grid
    $('.masonry-grid').masonry({
        itemSelector: '.masonry-item',
        percentPosition: true
    });

    // init popup gallery
    $("[data-fancybox]").fancybox({
        toolbar : false
    });

    // init hypher
    jQuery(function ($) {
        $('.text-justify p').hyphenate('ru');
        $('.text-justify p').hyphenate('en-us');
    });



    // mobile aside menu
    $( ".content-aside-toggle" ).on( "click", function() {
        $('.content-aside-collapse').slideToggle();
    });
    
    // init sliders
    $('.slider-hero').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        adaptiveHeight: true
    });

    $('.slider-video').slick({
         infinite: false,
        vertical: true,
        arrows: false,
        dots: false,
        asNavFor: '.slider-video-nav'
    });
    $('.slider-video-nav').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-video',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });

    /*$('.main-menu .dropdown').on('show.bs.dropdown', function () {
      $('body').append($('.main-menu .dropdown').css({
        position:'absolute',
        left:$('.main-menu .dropdown').offset().left, 
        top:$('.main-menu .dropdown').offset().top
      }).detach());
    });

    $('.main-menu .dropdown').on('hidden.bs.dropdown', function () {
      $('.main-menu').append($('.main-menu .dropdown').css({
        position:false, left:false, top:false
      }).detach());
    });*/
    
});
