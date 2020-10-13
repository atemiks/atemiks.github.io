(function() {
    let menuToggle = $('.menu-toggle'),
        menuContainer = $('.header-nav-block');

    function stickyHeader() {

    }

    $(function() {
        $(menuToggle).on('click', function(e) {
            let target = $(e.currentTarget);
            target.toggleClass('active');

            menuContainer.slideToggle();
        })
    });
})();