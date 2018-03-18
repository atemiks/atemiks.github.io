$(document).ready(function () {
    'use strict'

    // animation effect
    jQuery('.post').addClass("unshow").viewportChecker({
        classToAdd: 'show animated fadeInUp',
        offset: 100
    });

    // header
    $('.header-toggle').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.header-nav').toggleClass('active');
	});

	/*scroll id*/
	$('.header-nav a').click(function() {
	    var target = $(this).attr('href');
	    $('html, body').animate({
	        scrollTop: $(target).offset().top
	    }, 1000);
	    $(".header-toggle").click();
	    return false;
	});

    

    $('.slider-catalog').slick({
    	dots: true,
    	adaptiveHeight: true,
    	fade: true,
  		cssEase: 'linear'
	});

	$('.slider-news').slick({
    	dots: false,
    	adaptiveHeight: true,
    	fade: true,
  		cssEase: 'linear'
	});

    // new js
    $( ".content-aside-toggle " ).on( "click", function() {
        $('.content-aside-inner').slideToggle();
    });

    function selectInit() {
        $(".select2").select2({
          minimumResultsForSearch: Infinity
        });
        $(".select-subway").select2({
          placeholder: "Выберите или найдите.."
        });
    }
    setTimeout(selectInit, 300);



    $('.nstSlider').nstSlider({
        "rounding": {
            "100": "1000",
            "1000": "10000",
            "10000": "100000"
        },
        "left_grip_selector": ".leftGrip",
        "right_grip_selector": ".rightGrip",
        "value_bar_selector": ".bar",
        "value_changed_callback": function(cause, leftValue, rightValue) {
            $(this).parent().find('.leftLabel').text(leftValue);
            $(this).parent().find('.rightLabel').text(rightValue);
        }
    });
});