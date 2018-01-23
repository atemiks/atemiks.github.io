$(document).ready(function () {
    'use strict'

    /* animation effect */
    jQuery('.post').addClass("unshow").viewportChecker({
        classToAdd: 'show animated fadeInUp',
        offset: 100
    });

    /* popup */
    //open popup
	$('.popup-trigger').on('click', function(event){
		event.preventDefault();
		$('.popup').addClass('is-visible');
	});
	
	//close popup
	$('.popup').on('click', function(event){
		if( $(event.target).is('.popup-close') || $(event.target).is('.popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.popup').removeClass('is-visible');
	    }
    });

    

    /* Off canvas - Start */

	$('.off-canvas-toggle').on('click', function(e) {
		e.preventDefault();
		$('.off-canvas-sidebar li:not(:has(.sub-menu)) span').addClass('hide-menu');
		$('body').toggleClass('off-canvas-opened');
		$('html').toggleClass('off-canvas-opened');
	});

	$('.close-off-canvas').on('click', function(e) {
		e.preventDefault();
		$('.off-canvas-sidebar li:not(:has(.sub-menu)) span').addClass('hide-menu');
		$('body').removeClass('off-canvas-opened');
		$('html').removeClass('off-canvas-opened');
	});

	$('.off-canvas-menu a').on('click', function() {
		$('.off-canvas-sidebar li:not(:has(.sub-menu)) span').addClass('hide-menu');
		$('body').removeClass('off-canvas-opened');
		$('html').removeClass('off-canvas-opened');
	});

	$('.off-canvas-menu .sub-menu-toggle').on('click', function() {
		var current_root = $(this).closest('.menu-item-has-children').toggleClass('opened');

		current_root.find('> .sub-menu').slideToggle(300);

		if(current_root.closest('.sub-menu').length){
			var current_root = current_root.parents('.menu-item-has-children').last();
		}

		var root_items = $(this).closest('div').find('> ul > .menu-item-has-children').not( current_root );

		root_items.removeClass('opened').find('> .sub-menu').slideUp(300);
	});
		/* Off canvas - End */

	$('.header-menu a[href^="#"], .gotop').bind('click.smoothscroll',function (e) {
		e.preventDefault();
		 
		var target = this.hash,
		$target = $(target);
		 
		$('html, body').stop().animate({
		 'scrollTop': $target.offset().top - 81
		 }, 500, 'swing', function () {
		 window.location.hash = target;
		 });
	 });

	/* input mask */
	$(".tel").mask("+38 (999) 999-99-99");

	// home page

	$('.testimonials-slider').slick({
		slidesToShow: 1,
  		slidesToScroll: 1,
		dots: true,
		infinite: true,
		speed: 500,
		adaptiveHeight: false,
		autoplay: true
	});

	$('.questions-slider').slick({
		slidesToShow: 1,
  		slidesToScroll: 1,
		dots: true,
		infinite: true,
		autoplaySpeed: 10000,
		speed: 500,
		adaptiveHeight: false,
		autoplay: true
	});

	$('.result-slider').slick({
		slidesToShow: 4,
  		slidesToScroll: 4,
		dots: true,
		infinite: false,
		speed: 500,
		adaptiveHeight: true,
		autoplay: true,
		swipe: false,
		pauseOnFocus: true,
		pauseOnHover: true,
		responsive: [
	    {
	      breakpoint: 769,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

	$('.service-card .title').on('click', function(e) {
		e.preventDefault();
		$(this).parents(".service-card").addClass("active");
	});
	$('.service-card .icon-close').on('click', function(e) {
		e.preventDefault();
		$(this).parents(".service-card").removeClass("active");
	});


	function twentytwentyInit(){
	  $(".twentytwenty-container").twentytwenty();
	}
	setTimeout(twentytwentyInit, 1000);

	

	/* accordion */
    $('.collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".icon-plus-circled").removeClass("icon-plus-circled").addClass("icon-minus-circled");
    }).on('hidden.bs.collapse', function(){
    $(this).parent().find(".icon-minus-circled").removeClass("icon-minus-circled").addClass("icon-plus-circled");
    });
});