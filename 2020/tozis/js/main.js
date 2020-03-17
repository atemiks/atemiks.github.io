$(document).ready(function() {
	var body = $('body'),
		bg0 = $('#bg0');

	/* OFFCANVAS */
	function openOffcanvas() {
		body.addClass('is-open');
		$('#offcanvas').addClass('is-open');
	}

	function closeOffcanvas() {
		body.removeClass('is-open');
		$('#offcanvas').removeClass('is-open');
	}


	$('.offcanvas-toggle').on('click', openOffcanvas);

	$('#offcanvas .close').on('click', closeOffcanvas);


	/* HERO SLIDER */
	$('.hero-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	/* CATALOG */

	// collapse catalog
	$('.catalog-toggle').on('click', function(e) {
		var target = $(e.currentTarget);
		target.next().slideToggle();
	});

	$('.catalog-nav .nav-link').on('click', function(e) {
		var target = $(e.currentTarget);
		var parent = target.closest('.nav-item')

		if( !target.hasClass('is-active') && parent.hasClass('has-children') ) {
			var container = $('.catalog-nav');
			var elements = container.find('.nav-link');

			elements.removeClass('is-active');
			target.addClass('is-active');
		}
	});


	/* COOKIES */ 
	$('.cookies-box .close').on('click', function(e) {
		var target = $(e.currentTarget);
		var container = target.closest('.cookies-box');
		container.css('display', 'none');
	});


	/* BG0 */
	$('#bg0').on('click', function() {
		closeOffcanvas();
	})
})