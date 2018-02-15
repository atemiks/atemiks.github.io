$( document ).ready(function() {

	// equal height
	$('.opportunity-card .opportunity-body').matchHeight();
	$('.strategy-card .strategy-body').matchHeight();

	// header

	$( ".header-toggle, .offcanvas-close" ).on( "click", function() {
		$('body').toggleClass('offcanvas-open');
		$('.offcanvas').toggleClass('offcanvas-active');
	});

});