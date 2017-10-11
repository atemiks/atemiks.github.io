$(document).ready(function() {
    'use strict'

    // header
    $(".header-toggle, .header-mobile-close").on( "click", function() {
    	$('html, body').toggleClass('mobile-header-open');
    	$(".header-mobile").toggleClass('header-mobile-active');
	});

    $('.slider-hero').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true
    });


    $('.slider-product').each(function(key, item) {

	    var sliderIdName = 'slider' + key;
	    var sliderNavIdName = 'sliderNav' + key;

	    this.id = sliderIdName;
	    $('.slider-product-colors')[key].id = sliderNavIdName;

	    var sliderId = '#' + sliderIdName;
	    var sliderNavId = '#' + sliderNavIdName;

	    $(sliderId).slick({
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: false,
	        fade: true,
	        draggable: false,
	        asNavFor: sliderNavId
	    });

	    $(sliderNavId).slick({
	        slidesToShow: 6,
	        slidesToScroll: 1,
	        asNavFor: sliderId,
	        dots: false,
	        arrows: false,
	        // centerMode: true,
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
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
    });

});
