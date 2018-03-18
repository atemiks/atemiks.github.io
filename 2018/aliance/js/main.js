$( document ).ready(function() {


	function getHeaderHeight() {
		return $('.header-box').height();
	}

	// smooth scroll
	$('a[href*="#"]')
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      if (target.length) {
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top - getHeaderHeight()
	        }, 1000);
	      }
	    }
	  });


	// equal height
	$('.opportunity-card .opportunity-body').matchHeight();
	$('.strategy-card .strategy-body').matchHeight();


	// phone mask
	$("input[type='tel']").mask("+7 (999) 999-99-99");


	// init animation
	AOS.init();


	// header

	$( ".header-toggle, .offcanvas-close, .offcanvas-menu-list a" ).on( "click", function() {
		$('body').toggleClass('offcanvas-open');
		$('.offcanvas').toggleClass('offcanvas-active');
	});

});