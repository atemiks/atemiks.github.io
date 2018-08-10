$(document).ready(function() {
    /******* HEADER *******/

    // open and close offcanvas
    $( ".header-toggler-offcanvas,  .offcanvas-close" ).on( "click",function() {
        $('body').toggleClass('offcanvas-open');
        $('.offcanvas').toggleClass('active');
    });

    // close offcanvas outside
    $(document).click(function(event) { 
        if(!$(event.target).closest('.offcanvas, .header-toggler-offcanvas').length) {
            if($('.offcanvas').is(":visible")) {
                $('body').removeClass('offcanvas-open');
                $('.offcanvas').removeClass('active');
            }
        }        
    });

    /******* PAGE CATALOG *******/
    $( ".product-card .product-colors" ).on( "click", ".product-color-item" ,function(e) {

        var currentParent = $(e.currentTarget).closest('.product-card');
        var currentIndex = $(e.currentTarget).attr('data-index');
        var currentPrice = $(e.currentTarget).attr('data-price');
        var currentOldPrice = $(e.currentTarget).attr('data-old-price');

        // change active color
        $(currentParent).find('.product-color-item ').removeClass('active');
        $(e.currentTarget).addClass('active');

        // change active picture
        $(currentParent).find('.product-picture ').removeClass('active');
        $(currentParent).find(".product-picture[data-index='" + currentIndex + "'] ").addClass('active');

        // change active price
        $(currentParent).find(".product-price ins").text(currentPrice + ' ₽');

        // change active old price
        $(currentParent).find(".product-price del").text(currentOldPrice + ' ₽');
    });


    /******* PAGE PRODUCT *******/
    // var galleryTop = [];
    // var galleryThumbs = [];

    // $(".slider-product-preview").each(function(index, element){
    //     var $this = $(this);
    //     galleryTop.push(new Swiper(this, {}));
    // });

    // $(".slider-product-preview-nav").each(function(index, element){
    //     var $this = $(this);
    //     galleryThumbs.push(new Swiper(this, {
    //         direction: 'vertical',
    //         // centeredSlides: true,
    //         slidesPerView: '4',
    //         // touchRatio: 0.2,
    //         slideToClickedSlide: true,
    //     }));
    // });

    // for (var i = 0; i < galleryTop.length; i++) {
    //     galleryTop[i].controller.control = galleryThumbs[i];
    //     galleryThumbs[i].controller.control = galleryTop[i];
    // }

    // var galleryTop = new Swiper('.slider-product-preview', {
    //     fadeEffect: {
    //         crossFade: true
    //     },
    // });
    // var galleryThumbs = new Swiper('.slider-product-preview-nav', {
    //     direction: 'vertical',
    //     // centeredSlides: true,
    //   slidesPerView: 'auto',
    //   // touchRatio: 0.2,
    //   slideToClickedSlide: true,
    // });




    function getThumbsDirection() {
        if ($(window).width() > 1199) {
            return 'vertical';
        } else {
            return 'horizontal';
        }
    }


    function initThumbsSwiper(sliderBlock, prev, next, direction) {
        var slidesPerView, controlsData;
        switch (direction) {
            case 'vertical':
                slidesPerView = 'auto';
                break;
            case 'horizontal':
                slidesPerView = 'auto';
                break;
            default:
                console.error("Unknown slider direction: " + direction);
                return;
                break;
        }

        return new Swiper(sliderBlock, {
            direction: direction,
            slidesPerView: slidesPerView,
            spaceBetween: 0,
            navigation: {
                nextEl: '.swiper-product-nav-next',
                prevEl: '.swiper-product-nav-prev',
            },
            onInit: function (swiper) {
                controlsData = swiperHelpers.initRewindControls(swiper, prev, next);
            },
            onDestroy: function () {
                swiperHelpers.cleanUpRewindControls(controlsData);
            }
        });
    }

    $(function () {
        $('.product-preview-wrapper').each(function () {
             var sliderContainer, mainSwiper, thumbsSwiper,
                thumbnails, prev, next, reInitCurrentThumbsSwiper,
                thumbsSwiperContainer, mainSwiperContainer;

            sliderContainer = $(this);
            prev = sliderContainer.find('.swiper-product-nav-prev');
            next = sliderContainer.find('.swiper-product-nav-next');
            customPaginationCurrent = sliderContainer.find('.swiper-custom-pagination-fraction .swiper-custom-pagination-current');



            // Swiper containers
            mainSwiperContainer = sliderContainer.find('.slider-product');
            thumbsSwiperContainer = sliderContainer.find('.slider-product-nav');


            if (thumbsSwiperContainer.length === 1) {
                thumbnails = thumbsSwiperContainer.find('.swiper-slide');
                thumbnails.click(function (e) {
                    var index = thumbnails.index(e.currentTarget);
                    mainSwiper.slideTo(index);
                    e.preventDefault();
                });


                reInitCurrentThumbsSwiper = function () {
                    var direction = getThumbsDirection();
                    if (!thumbsSwiper || thumbsSwiper.params.direction !== direction) {
                        if (thumbsSwiper) {
                            thumbsSwiper.destroy(true, true);
                        }
                        thumbsSwiper = initThumbsSwiper(
                            thumbsSwiperContainer,
                            prev,
                            next,
                            getThumbsDirection()
                        );
                    }
                };
                reInitCurrentThumbsSwiper();
                $(window).resize(function () {
                    setTimeout(function () {
                        reInitCurrentThumbsSwiper();
                    }, 50);
                });
            }

            // Init main swiper
            mainSwiper = new Swiper(mainSwiperContainer, {
                on: {
                    init: function () {
                        if (this.slides.length > 1) {
                            prev.addClass('visible');
                            next.addClass('visible');
                        }
                        if (thumbnails) {
                            thumbnails.eq(this.activeIndex).addClass('active');
                        }
                        mainSwiperContainer.addClass('initialized');
                        customPaginationCurrent.text(this.activeIndex + 1 + ' /');
                    },
                    slideChange: function () {
                        if (thumbnails) {
                            thumbnails.removeClass('active');
                            thumbnails.eq(this.activeIndex).addClass('active');
                        }
                        if (thumbsSwiper) {
                            thumbsSwiper.slideTo(this.activeIndex);
                        }
                        customPaginationCurrent.text(this.activeIndex + 1 + ' /');
                    },
                },
                hashnav: true,
                hashnavWatchState: true
            });
        });
    });

    $( ".section-product .product-colors" ).on( "click", ".product-color-item" ,function(e) {
        var currentParent = $(e.currentTarget).closest('.section-product');

        var currentIndex = $(e.currentTarget).attr('data-index');
        var currentPrice = $(e.currentTarget).attr('data-price');
        var currentOldPrice = $(e.currentTarget).attr('data-old-price');

        // change active color
        $(currentParent).find('.product-color-item ').removeClass('active');
        $(e.currentTarget).addClass('active');

        // change active picture
        $(currentParent).find('.product-picture ').removeClass('active');
        $(currentParent).find(".product-picture[data-index='" + currentIndex + "'] ").addClass('active');

        // change active price
        $(currentParent).find(".product-price ins").text(currentPrice + ' ₽');

        // change active old price
        $(currentParent).find(".product-price del").text(currentOldPrice + ' ₽');

    });

    function productPictureOffset() {
        var productHeader = $('.section-product .col-info .product-header');
        var productPicture = $('.section-product .col-picture');

        if ( $(window).width() < 768) {
            var offsetProductHeader = $(productHeader).offset();
            var productHeaderHeight = $(productHeader).height();

            console.log(offsetProductHeader.top);

            $(productPicture).css('top', offsetProductHeader.top + productHeaderHeight);
        }
        else {
            $(productPicture).css('top','0');
        }

        $(productPicture).addClass('visible');
    }
    productPictureOffset();

     $(window).resize(function () {
        setTimeout(function () {
            productPictureOffset();
        }, 50);
    });




    var swiperProductGallery = new Swiper('.slider-product-gallery', {
        slidesPerView: 'auto',
        spaceBetween: 0,


        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    var swiperProductOptions = new Swiper('.slider-product-options', {
        slidesPerView: '4',
        spaceBetween: 0,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
        },
        breakpoints: {
            767: {
                slidesPerView: 'auto',
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                }
            },
            991: {
                slidesPerView: 2
            },
            1199: {
                slidesPerView: 3
            }
        }
    });


    var swiperProductAccessories = new Swiper('.slider-product-accessories', {
        slidesPerView: '2',
        spaceBetween: 0,

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },


        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            767: {
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
            },
            991: {
                slidesPerView: 1,
                pagination: {
                    el: null
                }
            }
        }
    });

    var swiperProductTestimonial = new Swiper('.slider-product-testimonials', {
        slidesPerView: '1',
        spaceBetween: 0,


        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            425: {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                }
            }
        }
    });

    var swiperProductSimilar = new Swiper('.slider-product-similar', {
        slidesPerView: '3',
        spaceBetween: 0,

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            767: {
                slidesPerView: 'auto',
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
            },
            991: {
                slidesPerView: 2,
                pagination: {
                    el: null
                },
            },
            1199: {
                slidesPerView: 2
            }
        }
    });


    var swiperProductHiglights = new Swiper('.slider-product-higlights', {
        slidesPerView: '4',
        spaceBetween: 0,

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            767: {
                slidesPerView: 'auto',
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
            },
            991: {
                slidesPerView: 2,
                pagination: {
                    el: null
                },
            },
            1199: {
                slidesPerView: 3
            }
        }
    });



});
