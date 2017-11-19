$(document).ready(function () {
    'use strict'

    // detect max height submenu
    function detectMaxHeightSubmenu() {
		var currentMaxHeightHeaderSubmenu = $('.header-submenu').height();
		$('.header-submenu').each(function() {
			if ( $(this).height() >  currentMaxHeightHeaderSubmenu )
				currentMaxHeightHeaderSubmenu = $(this).height();
		});
		$('.header-submenu').each(function() {
			$(this).css('min-height', currentMaxHeightHeaderSubmenu);
		});
    }
    detectMaxHeightSubmenu();

    $( window ).resize(function() {
    	console.log('resize window');
    	detectMaxHeightSubmenu();
	});

    // menu dropdown
	$('.header-navigation li.dropdown a').on('click', function (event) {
	    $(this).parent().toggleClass('open');
	});
	$('body').on('click', function (e) {
	    if (!$('.header-navigation li.dropdown').is(e.target) 
	        && $('.header-navigation li.dropdown').has(e.target).length === 0 
	        && $('.open').has(e.target).length === 0
	    ) {
	        $('.header-navigation li.dropdown').removeClass('open');
	    }
	});


	$( ".header-toggle" ).on( "click", function() {
	 	$('.header-navigation').slideToggle();
	});
});