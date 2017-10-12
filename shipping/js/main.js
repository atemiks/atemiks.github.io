$(document).ready(function() {
    'use strict'

    function getInternetExplorerVersion() {
        var rv = -1;
        if (navigator.appName == 'Microsoft Internet Explorer') {
            var ua = navigator.userAgent;
            var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) != null)
                rv = parseFloat(RegExp.$1);
        } else if (navigator.appName == 'Netscape') {
            var ua = navigator.userAgent;
            var re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) != null)
                rv = parseFloat(RegExp.$1);
        }
        return rv;
    }

    if(getInternetExplorerVersion()!==-1 || (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) ){
      //Значит это IE
    }
    else
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
