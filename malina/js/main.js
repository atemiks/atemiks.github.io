$(document).ready(function() {
    'use strict'


    // init today day
    Date.prototype.toDateInputValue = (function() {
        var local = new Date(this);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        return local.toJSON().slice(0,10);
    });

    $('input[type="date"]').val(new Date().toDateInputValue());

    $('input[type="time"]').each(function(){    
        var d = new Date(),        
            h = d.getHours() + 1,
            m = d.getMinutes();
        if(h < 10) h = '0' + h; 
        if(m < 10) m = '0' + m; 
        $(this).attr({
          'value': h + ':' + m
        });
    });

    // header
    $( ".header-toggle, .nav-close" ).on( "click", function() {
        $(".header-menu-wrap").toggleClass('header-nav-active');
    });

    $('.slider-hero').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
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

    $('.slider-news').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    });


    $('.photogallery-carousel-mobile').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });


    $('.slider-news .slide-item').matchHeight();
    $('.news-grid .news-item').matchHeight({
        byRow: true
    });


    var Slider = function() {
        var total, $images, $slider, sliderWidth, increment = 120;
        var on = function() {
            $slider = $('.photogallery-carousel');
            $images = $('.photogallery-carousel img');
            sliderWidth = $slider.width();
            total = $images.length;
            position();
        }

        var position = function() {
            var sign, half = $('.active').index(),
                x = 0,
                z = 0,
                zindex, scaleX = 1.3,
                scaleY = 1.3,
                transformOrigin;
            $images.each(function(index, element) {
                scaleX = scaleY = 1;
                transformOrigin = sliderWidth / 2;
                if (index < half) {
                    sign = 1;
                    zindex = index + 1;
                    x = sliderWidth / 2 - increment * (half - index + 1);
                    z = -increment * (half - index + 1);
                } else if (index > half) {
                    sign = -1
                    zindex = total - index;
                    x = sliderWidth / 2 + increment * (index - half + 1);
                    z = -increment * (index - half + 1);
                } else {
                    sign = 0;
                    zindex = total;
                    x = sliderWidth / 2;
                    z = 1;
                    scaleX = scaleY = 1.2;
                    transformOrigin = 'initial';
                }
                $(element).css({
                    'transform': 'translate3d(' + calculateX(x, sign, 300) + 'px, 0,' + z + 'px) scale3d(' + scaleX + ',' + scaleY + ', 1)',
                    'z-index': zindex,
                    'transform-origin-x': transformOrigin
                });
            });
        };

        var calculateX = function(position, sign, width) {
            switch (sign) {
                case 1:
                case 0:
                    return position - width / 2;
                case -1:
                    return position - width / 2;
            }
        }

        var imageSize = function() {
            return $slider.width() / 3;
        }

        var recalculateSizes = function() {
            sliderWidth = $slider.width();
            position();
        }

        var clickedImage = function() {
            $('.active').removeClass('active');
            $(this).addClass('active');
            position();
        }

        var addEvents = function() {
            $(window).resize(recalculateSizes);
            $(document).on('click', 'img', clickedImage);
        }

        return {
            init: function() {
                on();
                addEvents();
            }
        };
    }();

    $(function() {
        var slider = Slider.init();
    })


    // inner pages
    $( ".content-aside-toggle" ).on( "click", function() {
        $(".content-aside-inner").slideToggle();
    });



});
