$( document ).ready(function() {

	 // init hypher
    jQuery(function ($) {
        $('.about-card .about-title, .production-card .production-body').hyphenate('ru');
    });

    // animation
    setTimeout(function(){
      AOS.init();
    }, 100);

    // smooth scroll
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 300);
          }
        }
      });

     // phone mask
    $("input[type='tel']").mask("+7 (999) 999-99-99");


    // custom select
    $('.custom-select').select2({
        minimumResultsForSearch: Infinity
    });

	// custom file upload
	var wrapper = $( ".custom-file" ),
        inp = wrapper.find( "input" ),
        btn = wrapper.find( "button" ),
        lbl = wrapper.find( "div" );
    btn.focus(function(){
        inp.focus()
    });
    // Crutches for the :focus style:
    inp.focus(function(){
        wrapper.addClass( "focus" );
    }).blur(function(){
        wrapper.removeClass( "focus" );
    });

    var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    inp.change(function(){
        var file_name;
        if( file_api && inp[ 0 ].files[ 0 ] )
            file_name = inp[ 0 ].files[ 0 ].name;
        else
            file_name = inp.val().replace( "C:\\fakepath\\", '' );

        if( ! file_name.length )
            return;

        if( lbl.is( ":visible" ) ){
            lbl.text( file_name );
            btn.text( "Обзор" );
        }else
            btn.text( file_name );
    }).change();


    $( window ).resize(function(){
	    $( ".custom-file input" ).triggerHandler( "change" );
	});





    // header
    $( ".offcanvas-toggler, .offcanvas .close" ).on( "click", function() {
        $('body').toggleClass('offcanvas-open');
        $('.offcanvas').toggleClass('offcanvas-visible');
    });



	// map

    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 10,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(55.6329645, 37.4416959),

    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var icon = {
	    url: "./images/icons/icon-location.svg", // url
	    scaledSize: new google.maps.Size(50, 50), // scaled size
	    origin: new google.maps.Point(0,0), // origin
	    anchor: new google.maps.Point(0, 0) // anchor
	};

    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(55.6329645, 37.4416959),
        icon: icon,
        animation: google.maps.Animation.DROP,
        title: 'Инпродас!'
    });

});