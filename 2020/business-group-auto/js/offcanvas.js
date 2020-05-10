let offcanvas = $('#offcanvas'),
    offcanvasToggle = $('.offcanvas-toggle'),
    offcanvasClose = offcanvas.find('.offcanvas-close'),
    offcanvasElToggle = offcanvas.find('.nav-item.has-children .subnav-toggle'),
    bg0 = $('#bg0');

function openOffcanvas() {
    $('body').css('overflow', 'hidden');
    $(offcanvas).addClass('visible');
    $(bg0).addClass('visible');
}

function closeOffcanvas() {
    $('body').css('overflow', 'visible');
    $(offcanvas).removeClass('visible');
    $(bg0).removeClass('visible');
}

$(function () {
    $(document).ready(function () {
        $(offcanvasToggle).on('click', openOffcanvas);

        $(offcanvasClose).on('click', closeOffcanvas);

        $(offcanvasElToggle).on('click', function (e) {
            let target = $(e.currentTarget),
                parent = $(target).closest('.nav-item'),
                dropdown = $(parent).find('.subnav');

            $(target).toggleClass('active');
            $(dropdown).slideToggle();
        });

        $(offcanvas).find('.link-smooth').on('click', function () {
            closeOffcanvas();
        });
    })
})