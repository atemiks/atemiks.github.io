$(function () {
    $(document).ready(function () {
        $('.slider-about-container').each(function (_, container) {
            var jContainer = $(container),
                slider = $(jContainer).find('.slider-about'),
                arrowPrev = $(jContainer).find('.slick-prev'),
                arrowNext = $(jContainer).find('.slick-next');

            $(slider).slick({
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                mobileFirst: true
            });

            $(arrowPrev).on('click', function () {
                $(slider).slick('slickPrev');
            });

            $(arrowNext).on('click', function () {
                $(slider).slick('slickNext');
            })
        });

        $('.slider-news').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            dots: false,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        arrows: false,
                        dots: false
                    }
                }
            ]
        });

        $('.slick-news-prev').on('click', function () {
            $('.slider-news').slick('slickPrev');
        });

        $('.slick-news-next').on('click', function () {
            $('.slider-news').slick('slickNext');
        });
    })
})