$(document).ready(function() {
    $('.product-detail-slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        draggable: false,
        swipe: false,
        touchMove: false,
        asNavFor: '.product-detail-colors'
    });

    

    $('.product-detail-media').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.product-detail-thumbnails'
    });
    $('.product-detail-thumbnails').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-detail-media',
        arrows: true,
        dots: false,
        centerMode: false,
        variableWidth: false,
        focusOnSelect: true
    });

    // product colors
    $('.product-detail-colors').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.product-detail-slider',
        arrows: true,
        dots: false,
        focusOnSelect: true,
        responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4
            },
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                arrows: false,
                variableWidth: true
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
          
})