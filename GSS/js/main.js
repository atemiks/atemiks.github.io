$(document).ready(function () {
    'use strict'

    /* animation effect */
    jQuery('.post').addClass("unshow").viewportChecker({
        classToAdd: 'show animated fadeInUp',
        offset: 100
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

	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
		e.preventDefault();
		 
		var target = this.hash,
		$target = $(target);
		 
		$('html, body').stop().animate({
		 'scrollTop': $target.offset().top
		 }, 500, 'swing', function () {
		 window.location.hash = target;
		 });
	 });

	// home page

	$('.buy-slider').slick({
		slidesToShow: 2,
  		slidesToScroll: 1,
		dots: false,
		infinite: true,
		speed: 500,
		adaptiveHeight: true,
		autoplay: false,
		responsive: [
	    {
	      breakpoint: 640,
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

	$('.testimonials-slider').slick({
		slidesToShow: 3,
  		slidesToScroll: 1,
		dots: false,
		infinite: true,
		speed: 500,
		adaptiveHeight: true,
		autoplay: false,
		responsive: [
	    {
	      breakpoint: 769,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 600,
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

	// calc page

	$( ".btn-show-result" ).click(function() {
	  $( ".calc-result-box" ).slideDown("300");
	});
});