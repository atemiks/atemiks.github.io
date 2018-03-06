$( document ).ready(function() {


	// function getHeaderHeight() {
	// 	return $('.header-box').height();
	// }

	// // smooth scroll
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
	//           scrollTop: target.offset().top - getHeaderHeight()
	//         }, 1000);
	//       }
	//     }
	//   });


	// init animation
	setTimeout(function() {
	  	AOS.init();
	}, 100)



	// popup gallery
	$("[data-fancybox]").fancybox({
		buttons : [
	        'close'
	    ]
	});
	


	// header

	$( ".header-toggle, .offcanvas-close" ).on( "click", function() {
		$('body').toggleClass('offcanvas-open');
		$('.offcanvas').toggleClass('offcanvas-active');
	});


	// sliders
	$('.slider-hero').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		adaptiveHeight: true
	});

	$('.hero-controls .hero-control-left').click(function() {
        $('.slider-hero').slick('slickPrev');
    })

    $('.hero-controls .hero-control-right').click(function() {
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
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-product-nav'
	});
	$('.slider-product-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-product',
		arrows: true,
		dots: false,
		focusOnSelect: true,
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
	


    // content
    $(".content-aside-toggle" ).on( "click", function() {
    	console.log('hl');
	  	$('.content-aside-inner').slideToggle();
	});


	// map

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


    


});