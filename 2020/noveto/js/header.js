(function() {
    let headerContainer = $('.header-wrapper'),
        headerMainContainer = headerContainer.find('.header-main-wrapper'),
        scrollTop = 0;

    function stickyHeader() {
        scrollTop = $(window).scrollTop();

        if (scrollTop >= 70) {
            headerMainContainer.addClass('is-sticky');
        } else {
            headerMainContainer.removeClass('is-sticky');
        }
    }

    $(function() {
        stickyHeader();
    });

    $(window).scroll(function() {
        stickyHeader();
    });
})();