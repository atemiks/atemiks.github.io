$( document ).ready(function() {

	// smooth scroll
	// $('a[href*="#"]')
	//   .not('[href="#"]')
	//   .not('[href="#0"]')
	//   .click(function(event) {
	//     if (
	//       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	//       && 
	//       location.hostname == this.hostname
	//     ) {
	//       var target = $(this.hash);
	//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	//       if (target.length) {
	//         event.preventDefault();
	//         $('html, body').animate({
	//           scrollTop: target.offset().top
	//         }, 1000);
	//       }
	//     }
	//   });

	// header

	$( ".header-toggle, .offcanvas-close" ).on( "click", function() {
		$('body').toggleClass('offcanvas-open');
		$('.offcanvas').toggleClass('offcanvas-active');
	});

	$('.custom-select').select2({
		minimumResultsForSearch: Infinity
	});


	$('.slider-extension').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		variableWidth: true,
		centerMode: true,
		focusOnSelect: true,
		responsive: [
		{
		  breakpoint: 767,
		  settings: {
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    dots: false,
		    centerMode: false,
		    variableWidth: false,
		    adaptiveHeight: true
		  }
		}
		]
	})

	$('.slider-testimonials').slick({
		dots: true,
		infinite: false,
		arrows: false,
		dots: true,
		rows: 2,
		slidesPerRow: 2,
		responsive: [
		{
		  breakpoint: 1024,
		  settings: {
		  	rows: 2,
		  	slidesPerRow: 1,
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    arrows: false,
		    dots: true
		  }
		}
		]
	});



	 
	 $(".portfolio-block").mCustomScrollbar({
	 	theme:"dark dark-portfolio",
	 	axis:"y"
	 });
	 $(".testimonial-body").mCustomScrollbar({
	 	theme:"dark dark-testimonials",
	 	axis:"y"
	 });

	

	/* accordion */
    $('.collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".icon-long-arrow-down").removeClass("icon-long-arrow-down").addClass("icon-long-arrow-up");
    }).on('hidden.bs.collapse', function(){
    $(this).parent().find(".icon-long-arrow-up").removeClass("icon-long-arrow-up").addClass("icon-long-arrow-down");
    });
	   
	

});