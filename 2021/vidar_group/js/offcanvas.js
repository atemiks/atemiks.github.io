(function () {
    $(function () {
        let headerOffcanvasToggle = $('.header-offcanvas-toggle');
        let headerNavContainer = $('.header-nav-wrapper');
        let headerNavOverflow = $(headerNavContainer).find('.header-nav-overflow');


        $(headerOffcanvasToggle).on('click', function() {
            $('body').toggleClass('overflow');
            headerNavContainer.toggleClass('open');
        });

        $(headerNavOverflow).on('click', function() {
            $('body').toggleClass('overflow');
            headerNavContainer.toggleClass('open');
        })

        $(headerNavContainer).on('click', '.header-nav-item.has-children .header-nav-item-toggle', function(e) {
            let target = $(e.currentTarget);
            let parentContainer = $(target).closest('.header-nav-item.has-children');

            parentContainer.toggleClass('open');
            parentContainer.find('.megamenu-wrapper').slideToggle();
        });
    });
})();

