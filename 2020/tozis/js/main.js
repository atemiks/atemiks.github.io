$(document).ready(function() {
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


	// cookies
	$('.cookies-box .close').on('click', function(e) {
		var target = $(e.currentTarget);
		var container = target.closest('.cookies-box');
		container.css('display', 'none');
	})
})