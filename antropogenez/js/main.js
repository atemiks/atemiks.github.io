$(document).ready(function() {
    'use strict'
    

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
       /* verticalSwiping: true,*/
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
