$( document ).ready(function() {


	var currentWidth = $(window).width();
	var sliders = false;
	var customScroll = false;

	// sliders
	function sliderProductsInit() {
		$('.products-grid').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			variableWidth: true,
			arrows: false,
			dots: false
		})
	}

	// custom scroll
	function customScrollInit() {
		$(".products-wrapper").mCustomScrollbar({
		 	theme:"dark dark-products",
		 	axis:"x",
		 	mouseWheel: false
		 });
	}
	// customScrollInit();

	
	if ( (sliders == false) && ( currentWidth > 1024 )  ) {
		customScroll = true;
		customScrollInit();
	}
	else if ( (sliders == false) && ( currentWidth < 1025 ) ) {
		sliders = true;
		sliderProductsInit();
	}
	// else if ( (sliders == true ) && (currentWidth > 1024 )  ) {
	// 	sliders = false;
	// 	customScroll = true;
	// 	$('.products-grid').slick('unslick');
		
	// }

	// smooth scroll
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


	 


	// header

	$( ".header-toggle, .offcanvas-close" ).on( "click", function() {
		$('body').toggleClass('offcanvas-open');
		$('.offcanvas').toggleClass('offcanvas-active');
	});

	$('.custom-select select').select2({
		minimumResultsForSearch: Infinity
	});

	// aside button
	$( ".aside-callback-btn" ).on( "click", function() {
		$(this).parent().toggleClass('aside-callback-active');
	});



	// map

    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 13,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(55.750665, 37.586016),

    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var icon = {
	    url: "./img/icons/icon-location.svg", // url
	    scaledSize: new google.maps.Size(50, 50), // scaled size
	    origin: new google.maps.Point(0,0), // origin
	    anchor: new google.maps.Point(0, 0) // anchor
	};

    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(55.750665, 37.586016),
        icon: icon,
        animation: google.maps.Animation.DROP,
        title: 'Недвижимость!'
    });


    // resize
	$( window ).resize(function() {
		currentWidth = $(window).width();
	});
	

});