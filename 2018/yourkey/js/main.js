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
        $('html, body').toggleClass('offcanvas-open');
        $('.offcanvas').toggleClass('offcanvas-active');
    });

    $('.offcanvas').click(function(e) {
        var offcanvasMenu = $('.offcanvas-inner, .header-toggle');
        if ( !offcanvasMenu.is(e.target) && offcanvasMenu.has(e.target).length === 0 ) {
            $('html, body').toggleClass('offcanvas-open');
            $('.offcanvas').toggleClass('offcanvas-active');
        }
    });

    // swipe mobile menu
    $("body").hammer().on("swiperight", function(ev) {
        if ($(this).hasClass('offcanvas-open')) {
            $('html, body').toggleClass('offcanvas-open');
            $('.offcanvas').toggleClass('offcanvas-active');
        }
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

    $('.product-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: false,
        infinite: false,
        responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        }
      ]
    });


    // popup gallery
    $("[data-fancybox]").fancybox({
        buttons : [
            'close'
        ]

    });


    // content

    $(".content-aside-toggle" ).on( "click", function() {
        $('.content-aside-inner').slideToggle();
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