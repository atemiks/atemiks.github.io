$( document ).ready(function() {

	// gallery slider
    $('.slider-gallery').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false
	});


    // gallery tabs
	$('.nav-link').on('click', function(e) {
		e.preventDefault();

		var target = $(this).attr('rel');
		$("#"+target).show().siblings('.tab-pane').hide();

		$('.nav-link.active').removeClass('active');
		$(this).addClass('active');

		// update slider after change active tab
		$('.slider-gallery').slick('setPosition');
	});
});