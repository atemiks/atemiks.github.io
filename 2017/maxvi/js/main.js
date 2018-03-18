$(document).ready(function() {
    'use strict'

    // header
    $(".header-toggle, .mobile-navigation-close").on( "click", function() {
    	$('html, body').toggleClass('mobile-navigation-open');
    	$(".mobile-navigation").toggleClass('mobile-navigation-active');
	});

    $('.slider-hero').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true
    });


    $('.product-images').each(function(key, item) {

	    var sliderIdName = 'slider' + key;
	    var sliderNavIdName = 'sliderNav' + key;

	    this.id = sliderIdName;
	    $('.product-colors')[key].id = sliderNavIdName;

	    var sliderId = '#' + sliderIdName;
	    var sliderNavId = '#' + sliderNavIdName;

	    $(sliderId).slick({
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: false,
	        fade: true,
	        draggable: false,
	        swipe: false,
	        asNavFor: sliderNavId
	    });

	    $(sliderNavId).slick({
	        slidesToShow: 6,
	        slidesToScroll: 1,
	        asNavFor: sliderId,
	        dots: false,
	        arrows: false,
	        variableWidth: true,
	        focusOnSelect: true
	    });

	});



    $('.slider-partners').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 769,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
    });


    // page product
     $('.product-detail-images').slick({
	     slidesToShow: 1,
	     slidesToScroll: 1,
	     arrows: false,
	     dots: false,
	     fade: true,
	     draggable: false,
	     swipe: false,
	     asNavFor: '.product-detail-colors .product-colors, .product-models'
	 });


	 $('.product-detail-colors .product-colors').slick({
	     slidesToShow: 8,
	     slidesToScroll: 1,
	     arrows: false,
	     dots: false,
	     variableWidth: true,
	     focusOnSelect: true,
	     asNavFor: '.product-detail-images, .product-models'
	 });

	 $('.product-models').slick({
	     slidesToShow: 6,
	     slidesToScroll: 1,
	     arrows: false,
	     dots: false,
	     variableWidth: true,
	     focusOnSelect: true,
	     asNavFor: '.product-detail-images, .product-detail-colors .product-colors'
	 });


	$("[data-fancybox]").fancybox({
		loop : false,
		arrows : false,
		buttons : [
	        'close'
	    ]
	});

});
