$( document ).ready(function() {


	// init animation
	setTimeout(function() {
	  	AOS.init();
	}, 100)


	// header

	$( ".header-toggle, .offcanvas-close" ).on( "click", function() {
		$('body').toggleClass('offcanvas-open');
		$('.offcanvas').toggleClass('offcanvas-active');
	});


	// sliders
	$('.slider-hero').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button">Next</button>',	
		dots: true,
		adaptiveHeight: true,
		autoplay: true,
  		autoplaySpeed: 5000,
  		easing: 'ease',
  		pauseOnFocus: false,
  		pauseOnHover: false
	});

	$('.hero-controls .hero-control-left').click(function() {
		console.log('true');
        $('.slider-hero').slick('slickPrev');
    })

    $('.hero-controls .hero-control-right').click(function() {
    	console.log('true');
        $('.slider-hero').slick('slickNext');
    })


    $('.slider-partners').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		adaptiveHeight: true,
	 	responsive: [
	    {
	      breakpoint: 1025,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        dots: false
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
	 $('.slider-product').slick({
	 	infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		waitForAnimate: false,
		fade: false,
		draggable: false,
		swipe: false,
		swipeToSlide: false
		//asNavFor: '.slider-product-nav'
	});
	$('.slider-product-nav').slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		//asNavFor: '.slider-product',
		arrows: true,
		dots: false,
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button">Next</button>',		
		//focusOnSelect: true,
		useCSS: false,
		useTransform: false,

		responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        dots: false
	      }
	    }
	  ]
	});

	$('.slider-product-nav .slide-item').first().addClass('slick-current');

	$('.slider-product-nav').on('click', '.slide-item', function () {
		$('.slider-product-nav .slide-item').removeClass('slick-current');
		$(this).addClass('slick-current');
	    $('.slider-product').slick('slickGoTo', $(this).attr('data-slick-index') );
	});



	// popup gallery
	$("[data-fancybox]").fancybox({

		buttons : [
	        'close'
	    ]
	    // afterShow: function(current, previous) {
	    //     var index =  current.currIndex;
	    // 	$('.slider-product').slickGoTo(index);
	    // 	$('.slider-product-nav').slickGoTo(index).addClass('slick-current);		            
	    // }
	});




    // content

    $(".content-aside-toggle" ).on( "click", function() {
	  	$('.content-aside-inner').slideToggle();
	});


	// map
	if( $('#map').length == true ) {
	    // Basic options for a simple Google Map
	    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
	    var mapOptions = {
	        // How zoomed in you want the map to start at (always required)
	        zoom: 16,

	        // The latitude and longitude to center the map (always required)
	        center: new google.maps.LatLng(55.762655, 37.894193),

	        // How you would like to style the map. 
	        // This is where you would paste any style found on Snazzy Maps.
	        styles: []
	    };

	    // Get the HTML DOM element that will contain your map 
	    // We are using a div with id="map" seen below in the <body>
	    var mapElement = document.getElementById('map');

	    // Create the Google Map using our element and options defined above
	    var map = new google.maps.Map(mapElement, mapOptions);

	    // Let's also add a marker while we're at it
	    var marker = new google.maps.Marker({
	        position: new google.maps.LatLng(55.762655, 37.894193),
	        map: map,
	        title: 'Велодрайв'
	    });
	}

});