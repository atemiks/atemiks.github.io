$(document).ready(function () {
    let bg0 = $('#bg0');

    // tooltip
    $('[data-toggle="tooltip"]').tooltip()

    // phone mask
    $("input[type='tel']").mask("+7 (999) 999-99-99");

    // smooth scroll
    $(".link-smooth").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 300, function () {
                window.location.hash = hash;
            });
        }
    });


    // bg0
    $(bg0).on('click', function () {
        closeOffcanvas();
    });
})