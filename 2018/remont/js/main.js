$( document ).ready(function() {


	var currentWidth = $(window).width();

	// var initSliders = false;



	$('a[href*="#"]')
	    .not('[href="#"]')
	    .not('[href="#0"]')
	    .click(function(event) {
	        // On-page links
	        if (
	            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
	            location.hostname == this.hostname
	        ) {
	            var target = $(this.hash);
	            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	            if (target.length) {
	                event.preventDefault();
	                $('html, body').animate({
	                    scrollTop: target.offset().top // - headerHeight()
	                }, 300);
	            }
	        }
	    });

	// animation
	// setTimeout(function(){
	//   AOS.init();
	// }, 100);


	// header
    // header offset
    // function headerHeight() {
    //     return $('.header-box').height();
    // }
    // function headerOffset() {
    //     $('body').css('padding-top', headerHeight() );
    // }
    // headerOffset();


	// header toogle
    $( ".header-mobile-toggle, .offcanvas-close, .offcanvas-menu li a" ).on( "click", function() {
        $('html, body').toggleClass('offcanvas-open');
        $('.offcanvas').toggleClass('offcanvas-active');
    });

    $('.custom-select').select2({
        minimumResultsForSearch: Infinity
    });

    // phone mask
	$("input[type='tel']").mask("+7 (999) 999-99-99");


    // custom scroll
    function customScrollInit() {
        $(".portfolio-scroll").mCustomScrollbar({
            theme:"dark dark-portfolio",
            axis:"y"
         });
    }

    function customScrollDestroy() {
        $('.portfolio-scroll').mCustomScrollbar("destroy");

    }

    customScrollInit();


    // modals
    $('#modalEstimate .estimate-back').on('click', function () {
        $('#modalEstimate').modal('hide');
    })

    $('#modalEstimate .estimate-order').on('click', function () {
        $('#modalEstimate').modal('hide');
        $('#modalEstimate').on('hidden.bs.modal', function (e) {
            $('#modalOrder').modal('show');
        })
    })


	// sliders
    var $status = $('.hero-slider-counts');
    var $slickElement = $('.hero-slider');


    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });

    $('.hero-slider').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         dots: false,
         arrows: false,
         infinite: false
     });

    $( ".hero-slider-arrows .hero-slider-prev" ).click(function() {
        $('.hero-slider').slick('slickPrev');
    });
    $( ".hero-slider-arrows .hero-slider-next" ).click(function(){
        $('.hero-slider').slick('slickNext');
    });



    $('.works-hero-slider').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         dots: false,
         arrows: false,
         infinite: false,
         fade: true,
         swipe: false,
         swipeToSlide: false,
         draggable: false
     });

    $('.work-thumbnail-slider').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         dots: false,
         arrows: true
     });


    var lengthWorksSlider = $('.works-slider .slide-item').length;
    $('.works-slider').slick({
         slidesToShow: lengthWorksSlider,
         dots: false,
         arrows: false,
         vertical: true,
         infinite: false,
         swipe: false,
         swipeToSlide: false,
         draggable: false,
         responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            swipe: true,
            swipeToSlide: true,
            draggable: true,
            vertical: false,
            infinite: false,
            arrows: false,
            dots: false,
            variableWidth: true
          }
        }
      ]
     });

    $('.works-slider .slide-item').first().addClass('slick-current');

    $('.works-slider').on('click', '.slide-item', function () {
        $('.works-slider .slide-item').removeClass('slick-current');
        $(this).addClass('slick-current');
        $('.works-hero-slider').slick('slickGoTo', $(this).attr('data-slick-index') );
    });



    $( ".calc-controls .calc-control-delete" ).on( "click", function() {
         $(this).closest( ".calc-row" ).remove();
    });

    // $( ".calc-control-add" ).on( "click", function() {
    //     var calcRow = html()
    // });



    $('.testimonial-slider').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         dots: true,
         arrows: false,
         fade: true
     });
    $( ".testimonial-slider-arrows .testimonial-slider-next" ).click(function(){
        $('.testimonial-slider').slick('slickNext');
    });

    

    // $slickElement.slick({
    //     slide: 'img',
    //     autoplay: true,
    //     dots: true
    // });

	// function mobileSlidersInit() {
	// 	$('.achievements-grid, .advantages-grid, .testimonials-grid, .documents-grid').slick({
	// 		slidesToShow: 2,
	// 		slidesToScroll: 1,
	// 		dots: true,
	// 		arrows: true,
	// 		adaptiveHeight: true,
	// 		responsive: [
	// 	    {
	// 	      breakpoint: 640,
	// 	      settings: {
	// 	        slidesToShow: 1,
	// 	        slidesToScroll: 1,
	// 	        dots: true,
	// 	        arrows: true
	// 	      }
	// 	    }
	// 	  ]
	// 	});

	// 	$('.news-grid').slick({
	// 		slidesToShow: 1,
	// 		slidesToScroll: 1,
	// 		dots: true,
	// 		arrows: true
	// 	});
	// }
	// function mobileSlidersDestroy() {
	// 	$('.achievements-grid, .advantages-grid, .testimonials-grid, .documents-grid, .news-grid').slick('unslick');
	// }


	// if(currentWidth > 1024) {
	// 	customScrollInit();
	// 	initSliders = false;
	// }
	// else {
	// 	mobileSlidersInit();
	// 	initSliders = true;
	// }


	// $( window ).resize(function() {
	// 	currentWidth = $(window).width();
	// 	console.log(currentWidth);

	// 	if(currentWidth > 1024 && initSliders == true  ) {
	// 		initSliders = false;
	// 		mobileSlidersDestroy();
	// 		customScrollInit();
	// 	}
	// 	else if (currentWidth <= 1024 && initSliders == false) {
	// 		initSliders = true;
	// 		customScrollDestroy();
	// 		mobileSlidersInit();
	// 	}

	// });


	// forms
	$("#formModalOrder").submit(function() {
        $.ajax({
            type: "POST",
            url: "/formModalOrder.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#formModalOrder").trigger("reset");
        });
        return false;
    });

    $("#formHero").submit(function() {
        $.ajax({
            type: "POST",
            url: "/formHero.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#formHero").trigger("reset");
        });
        return false;
    });


    $("#formCallback1").submit(function() {
        $.ajax({
            type: "POST",
            url: "/formCallback1.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#formCallback1").trigger("reset");
        });
        return false;
    });


    $("#formCallback2").submit(function() {
        $.ajax({
            type: "POST",
            url: "/formCallback2.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#formCallback2").trigger("reset");
        });
        return false;
    });


    $("#formCallbackFooter").submit(function() {
        $.ajax({
            type: "POST",
            url: "/formCallbackFooter.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#formCallbackFooter").trigger("reset");
        });
        return false;
    });


    // map

    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    // var mapOptions = {
    //     // How zoomed in you want the map to start at (always required)
    //     zoom: 14,

    //     // The latitude and longitude to center the map (always required)
    //     center: new google.maps.LatLng(55.7897495, 37.5023705),

    //     // How you would like to style the map. 
    //     // This is where you would paste any style found on Snazzy Maps.
    //     styles: []
    // };

    // // Get the HTML DOM element that will contain your map 
    // // We are using a div with id="map" seen below in the <body>
    // var mapElement = document.getElementById('map');

    // // Create the Google Map using our element and options defined above
    // var map = new google.maps.Map(mapElement, mapOptions);

    // // Let's also add a marker while we're at it
    // var marker = new google.maps.Marker({
    //     position: new google.maps.LatLng(55.7897495, 37.5023705),
    //     map: map,
    //     // icon: './img/icons/icon-location.png',
    //     icon: './img/icons/icon-location-primary.svg',
    //     title: 'SFT'
    // });


    // resize window
    $( window ).resize(function() {
        // if(currentWidth < 1025) {

        // }
        // header offset
        // headerOffset();
    });

});