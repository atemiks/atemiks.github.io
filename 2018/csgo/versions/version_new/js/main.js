$( document ).ready(function() {

	// preloader
	setTimeout(function() {
		var preloader = document.getElementById('page-preloader');
		if( !preloader.classList.contains('done') ) {
			preloader.classList.add('done');
		}
	})

	// header

	$( ".header-toggle, .offcanvas-close" ).on( "click", function() {
		$('body').toggleClass('offcanvas-open');
		$('.offcanvas').toggleClass('offcanvas-active');
	});

	$('.custom-select').select2({
		minimumResultsForSearch: Infinity
	});

	$('.slider-games').slick({
		lazyLoad: 'ondemand',
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		responsive: [
		{
		  	breakpoint: 991,
		  	settings: {
			    slidesToShow: 3,
			    slidesToScroll: 1,
			    arrows: true,
			    dots: false
		  	}
		},
		{
		  	breakpoint: 767,
		  	settings: {
			    slidesToShow: 2,
			    slidesToScroll: 1,
			    arrows: true,
			    dots: false
		  	}
		},
		{
		  	breakpoint: 425,
		  	settings: {
			    slidesToShow: 1,
			    slidesToScroll: 1,
			    arrows: true,
			    dots: false
		  	}
		},
		]
	})


	$('.slider-extension').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		variableWidth: true,
		centerMode: true,
		focusOnSelect: true,
		infinite: false,
		initialSlide: 2,
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
		slidesPerRow: 2
	});
	$('.slider-testimonials-mobile').slick({
		dots: true,
		infinite: false,
		arrows: false,
		dots: true,
		rows: 2,
		slidesPerRow: 1
	});






	 
	 $(".portfolio-block").mCustomScrollbar({
	 	theme:"dark dark-portfolio",
	 	axis:"y",
	 	advanced: {
	 		updateOnContentResize: true
	 	}
	 });
	 $(".testimonial-body").mCustomScrollbar({
	 	theme:"dark dark-testimonials",
	 	axis:"y",
	 	advanced:{
		    updateOnContentResize: true,
		    updateOnImageLoad: true
		 }
	 });

	 $(".extention-description-inner").mCustomScrollbar({
	 	theme:"dark dark-portfolio",
	 	axis:"y",
	 	advanced: {
	 		updateOnContentResize: true
	 	}
	 });

	

	/* accordion */
    $('.collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".icon-long-arrow-down").removeClass("icon-long-arrow-down").addClass("icon-long-arrow-up");
    }).on('hidden.bs.collapse', function(){
    $(this).parent().find(".icon-long-arrow-up").removeClass("icon-long-arrow-up").addClass("icon-long-arrow-down");
    });

    $('.collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".icon-plus").removeClass("icon-plus").addClass("icon-minus");
    }).on('hidden.bs.collapse', function(){
    $(this).parent().find(".icon-minus").removeClass("icon-minus").addClass("icon-plus");
    });

    // page extension
    function packagesActive(index) {
    	$('.extention-packages-services li').removeClass('active');

    	if (index == 'packages-1 active') {
    		$('.extention-packages-services .packages-1').addClass('active');
    	}
    	else if (index == 'packages-2 active') {
    		$('.extention-packages-services .packages-1, .extention-packages-services .packages-2').addClass('active');
    	}
    	else if (index == 'packages-3 active') {
    		$('.extention-packages-services .packages-1, .extention-packages-services .packages-2, .extention-packages-services .packages-3').addClass('active');
    	}
    }

    $( ".extention-packages-tabs button" ).on( "click", function() {
	  	$('.extention-packages-tabs button').removeClass('active');
	  	$(this).addClass('active');
	  	packagesActive( $(this).attr("class") );
	});


	// page faq
	function faqNavHeight() {
		return $('.faq-aside').height();
	}
	function faqTabHeight() {
		$('.faq-tab-content').css('min-height', faqNavHeight() );
	}
	faqTabHeight();

	$( window ).resize(function() {
	   faqTabHeight();
	});
	

});