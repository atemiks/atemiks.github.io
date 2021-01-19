(function () {
    $(function () {
        $('.swiper-hero').each(function (_, container) {
            let jContainer = $(container);
            new Swiper(jContainer, {
                slidesPerView: 1,
                loop: true,
                loopAdditionalSlides: 1,

                navigation: {
                    nextEl: jContainer.find('.swiper-hero-button-next'),
                    prevEl: jContainer.find('.swiper-hero-button-prev'),
                },

                autoplay: {
                    delay: 5000,
                },
            });
        });


        $('.swiper-partners').each(function (_, container) {
            let jContainer = $(container);
            new Swiper(jContainer, {
                slidesPerView: 1,
                loop: true,
                loopAdditionalSlides: 1,
                spaceBetween: 10,

                breakpointsInverse: true,
                breakpoints: {
                    // when window width is >= 576px
                    576: {
                        slidesPerView: 2,
                        loop: true,
                        loopAdditionalSlides: 1,
                        spaceBetween: 15,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 'auto',
                        loop: true,
                        loopAdditionalSlides: 1,
                    },
                    // when window width is >= 1200px
                    1200: {
                        slidesPerView: 'auto',
                        loop: true,
                        loopAdditionalSlides: 1,
                        spaceBetween: 30,
                    }
                },

                navigation: {
                    nextEl: jContainer.find('.swiper-partners-button-next'),
                    prevEl: jContainer.find('.swiper-partners-button-prev'),
                },

                autoplay: {
                    delay: 3000,
                },
            });
        });
    });
})();

