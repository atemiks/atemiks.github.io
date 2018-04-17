$( document ).ready(function() {

    // header
    // header offset
    function headerHeight() {
        return $('.header-box').height();
    }
    function headerOffset() {
        $('body').css('padding-top', headerHeight() );
    }
    headerOffset();


    // header toogle
    $( ".header-toggle, .offcanvas-close" ).on( "click", function() {
        // $('html').toggleClass('overflow');
        $('html, body').toggleClass('offcanvas-open');
        $('.offcanvas').toggleClass('offcanvas-active');
    });

    $(document).mouseup(function(e) {
        var offcanvasMenu = $('.offcanvas-inner, .header-toggle');
        if ( !offcanvasMenu.is(e.target) && offcanvasMenu.has(e.target).length === 0 ) {
            // console.log('true');
            // $('html').toggleClass('overflow');
            $('html, body').toggleClass('offcanvas-open');
            $('.offcanvas').toggleClass('offcanvas-active');
        }
        // console.log('false');
    });



	// sliders
	$('.slider-hero').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover: false
	});


	// map

    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 13,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(55.76803527, 37.88862271),

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
    // var marker = new google.maps.Marker({
    //     position: new google.maps.LatLng(55.7617579, 37.8613023),
    //     map: map,
    //     icon: './img/icons/',
    //     title: 'Ваш ключ'
    // });


    // resize window
    $( window ).resize(function() {
        // header offset
        headerOffset();
    });
            



});