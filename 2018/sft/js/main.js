$( document ).ready(function() {


	var currentWidth = $(window).width();

	var initSliders = false;



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
	                    scrollTop: target.offset().top - headerHeight()
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
    function headerHeight() {
        return $('.header-box').height();
    }
    function headerOffset() {
        $('body').css('padding-top', headerHeight() );
    }
    headerOffset();


	// header toogle
    $( ".header-toggle, .offcanvas-close, .offcanvas-menu li a" ).on( "click", function() {
        $('body').toggleClass('offcanvas-open');
        $('.offcanvas').toggleClass('offcanvas-active');
    });

    // phone mask
	$("input[type='tel']").mask("+7 (999) 999-99-99");


    // custom scroll
    function customScrollInit() {
	    $(".testimonials-grid").niceScroll({
	    	horizrailenabled: true,
	    	cursoropacitymin: 1,
	    	cursorcolor: "#7da1ba",
	    	cursorwidth: "18px",
	    	cursorborder: "",
	    	cursorborderradius: "0px",
	    	background: "#e9f0f3",
	    	enablemousewheel: false,
	    	enablekeyboard: false
		}); 

		$(".documents-grid").niceScroll({
	    	horizrailenabled: true,
	    	cursoropacitymin: 1,
	    	cursorcolor: "#7da1ba",
	    	cursorwidth: "18px",
	    	cursorborder: "",
	    	cursorborderradius: "0px",
	    	background: "#ffffff",
	    	enablemousewheel: false,
	    	enablekeyboard: false
		}); 
    }

    function customScrollDestroy() {
		$(".testimonials-grid, .documents-grid").niceScroll().remove();
    	
    }



	// sliders
	function mobileSlidersInit() {
		$('.achievements-grid, .advantages-grid, .testimonials-grid, .documents-grid').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			dots: true,
			arrows: true,
			adaptiveHeight: true,
			responsive: [
		    {
		      breakpoint: 640,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        dots: true,
		        arrows: true
		      }
		    }
		  ]
		});

		$('.news-grid').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: true
		});
	}
	function mobileSlidersDestroy() {
		$('.achievements-grid, .advantages-grid, .testimonials-grid, .documents-grid, .news-grid').slick('unslick');
	}


	if(currentWidth > 1024) {
		customScrollInit();
		initSliders = false;
	}
	else {
		mobileSlidersInit();
		initSliders = true;
	}


	$( window ).resize(function() {
		currentWidth = $(window).width();
		console.log(currentWidth);

		if(currentWidth > 1024 && initSliders == true  ) {
			initSliders = false;
			mobileSlidersDestroy();
			customScrollInit();
		}
		else if (currentWidth <= 1024 && initSliders == false) {
			initSliders = true;
			customScrollDestroy();
			mobileSlidersInit();
		}

	});



    // $("#formOrder").submit(function() {
    //     $.ajax({
    //         type: "POST",
    //         url: "/mail.php",
    //         data: $(this).serialize()
    //     }).done(function() {
    //         $(this).find("input").val("");
    //         alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
    //         $("#formOrder").trigger("reset");
    //         yaCounter47431432.reachGoal('lid');
    //     });
    //     return false;
    // });


    // map

    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(55.76, 37.61455332),

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
        position: new google.maps.LatLng(55.78363614, 37.61455332),
        map: map,
        icon: './img/icons/icon-location.png',
        title: 'SFT'
    });


    // resize window
    $( window ).resize(function() {
        // header offset
        headerOffset();
    });

});