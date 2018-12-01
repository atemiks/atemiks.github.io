jQuery(document).ready(function($) {
	$('#nav-top ul li').hover(
        function () {
            $('ul', this).stop().fadeIn(300);
        }, 
        function () {
            $('ul', this).stop().fadeOut(300);            
        }
    );
    $('#nav-mob ul li').click(
        function () {
            $('ul', this).stop().slideToggle(400);
            $(this).toggleClass('active-nav');
        }
    );

    $('.nano').nanoScroller();

    $('.burger-menu').click(function() {
        $('.mob-nav').fadeIn();
        $('.right-sidebar').hide();
    });
    $('.close').click(function(event) {
        $('.mob-nav').fadeOut();
        $('.right-sidebar').show();
    });

    $('.open-sidebar').click(function() {
        $('.right-sidebar').toggleClass('right-sidebar_active');
    });
    $(document).mouseup(function (e){
        var div = $('.right-sidebar');
        var pop = $('.pop-up');
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $('.right-sidebar').removeClass('right-sidebar_active');
        }
        if (!pop.is(e.target)
            && pop.has(e.target).length === 0) {
            $('.popup-wrapper').fadeOut();
        }
    });

    $('.phone').click(function(event) {
        event.preventDefault();
        $('.popup-wrapper').fadeIn();
    });

    $('.pop-up_close').click(function() {
        $('.popup-wrapper').fadeOut();
    });

    if (document.documentElement.clientWidth < 575){
        $('.nano').nanoScroller({ destroy: true });
    }

    window.onresize = function () {
        if (document.documentElement.clientWidth < 575){
            $('.nano').nanoScroller({ destroy: true });
        }
        if (document.documentElement.clientHeight > 600) {
            getHeight();
        }
    }
});

document.addEventListener("DOMContentLoaded", ready);

function ready() {
     if (document.documentElement.clientHeight > 600) {
        getHeight();
     }  
}

function getHeight() {
    var pageHeight = document.documentElement.clientHeight;
    var headerHeight = document.querySelector('header').offsetHeight;
    var footerHeight = document.querySelector('footer').offsetHeight;
    var content = document.querySelector('.nano');
    var contentHeight = pageHeight - headerHeight - footerHeight;
    content.style.height = contentHeight + 'px';
}