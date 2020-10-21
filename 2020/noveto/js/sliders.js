(function () {
    $(function () {
        $('.card-product').each(function (_, container) {
            let jContainer = $(container),
                sliderContainer = jContainer.find('.swiper-product'),
                pagination = jContainer.find('.swiper-product-pagination');

            new Swiper(sliderContainer, {
                direction: 'horizontal',
                slidesPerView: 1,
                loop: true,
                loopAdditionalSlides: 1,

                pagination: {
                    el: pagination,
                    type: 'bullets',
                }
            });
        });

        $('.swiper-press').each(function (_, container) {
            let jContainer = $(container);
            new Swiper(jContainer, {
                direction: 'horizontal',
                slidesPerView: 1,
                loop: true,
                loopAdditionalSlides: 1,

                pagination: {
                    el: jContainer.find('.swiper-press-pagination'),
                    type: 'bullets',
                }
            });
        });

        $('.swiper-partners').each(function (_, container) {
            let jContainer = $(container);
            new Swiper(jContainer, {
                direction: 'horizontal',
                slidesPerView: 2,
                loop: true,
                loopAdditionalSlides: 1,
                breakpointsInverse: true,
                breakpoints: {
                    // when window width is >= 1200px
                    1200: {
                        slidesPerView: 6
                    },
                },

                pagination: {
                    el: jContainer.find('.swiper-partners-pagination'),
                    type: 'bullets',
                }
            });
        });
    });
})();

