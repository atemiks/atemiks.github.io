$(document).ready(function() {
	var body = $('body'),
		offcanvas = $('#offcanvas'),
		bg0 = $('#bg0');

	function openOffcanvas() {
		body.addClass('open');
		offcanvas.addClass('open');
	}

	function closeOffcanvas() {
		body.removeClass('open');
		offcanvas.removeClass('open');
	}

	$('.offcanvas-toggle').on('click', function() {
		openOffcanvas();
	})

	$('.offcanvas-close').on('click', function() {
		closeOffcanvas();
	})

	$(bg0).on('click', function() {
		closeOffcanvas();
	})
})