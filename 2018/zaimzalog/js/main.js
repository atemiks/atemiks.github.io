$( document ).ready(function() {
	// animation
	setTimeout(function(){
	  AOS.init();
	}, 100);
	
	// phone mask
	$("input[type='tel']").mask("+7 (999) 999-99-99");

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
            }, 600);
          }
        }
      });

	// header
	$( ".header-offcanvas-toggler, .offcanvas-close, .offcanvas-menu" ).on( "click", function() {
		$('.offcanvas').toggleClass('visible');
	});


    // examples
    $('.examples-slider').slick({
        slidesToShow: 2,
        centerMode: true,
        variableWidth: true,
        dots: false,
        arrows: false,
        responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            centerMode: false,
            dots: false,
            arrows: false
          }
        }
      ]
    });

    $('.examples-slider-controls').on( "click", '.arrow-prev', function() {
        $('.examples-slider').slick('slickPrev');
    });
    $('.examples-slider-controls').on( "click", '.arrow-next', function() {
        $('.examples-slider').slick('slickNext');
    });


    // calculator
    var $rangeSumSlider = $('#range-sum-slider');
    var $rangeSumImport = $('#range-sum-input');

    var $rangeTimeSlider = $('#range-time-slider');
    var $rangeTimeImport = $('#range-time-input');

    

    var getSum = $('#range-sum-input').val();
    var getTime = $('#range-time-input').val();
    var resultSum = getSum * .9;
    var resultCalc =  getSum / getTime;
    $('.result-box .result-sum').text(resultSum.toFixed(2));
    $('.result-box .result').text(resultCalc.toFixed(2));

    // range sum
    $rangeSumSlider
        .rangeslider({
            polyfill: false
        })
        .on('input', function() {
            $rangeSumImport[0].value = this.value;
            getSum = $('#range-sum-input').val();
            getTime = $('#range-time-input').val();

            if(getSum != 0 && getTime != 0 ) {
            	resultSum = getSum * .9;
                resultCalc = getSum / getTime;
                $('.result-box .result-sum').text(resultSum.toFixed(2));
                $('.result-box .result').text(resultCalc.toFixed(2));
            }
            else {
            	$('.result-box .result-sum').text('0');
                $('.result-box .result').text('0');
            }
        });

    $rangeSumImport.on('input', function() {
        if (this.value == "") {
            this.value = 0;
            $rangeSumSlider.val(this.value).change();
        } else {
            $rangeSumSlider.val(this.value).change();
        }

    });

    // range time 
    $rangeTimeSlider
        .rangeslider({
            polyfill: false
        })
        .on('input', function() {
            $rangeTimeImport[0].value = this.value;
            getSum = $('#range-sum-input').val();
            getTime = $('#range-time-input').val();

            if(getSum != 0 && getTime != 0 ) {
                resultCalc = getSum / getTime;
                $('.result-box .result').text(resultCalc.toFixed(2));
            }
            else {
                $('.result-box .result').text('0');
            }

        });

    $rangeTimeImport.on('input', function() {
        if (this.value == "") {
            this.value = 0;
            $rangeTimeSlider.val(this.value).change();
        } else {
            $rangeTimeSlider.val(this.value).change();
        }

    });

    var $rangeSumHandler = $('.range-sum-slider-wrap .rangeslider__handle');

    var $rangeTimeHandler = $('.range-time-slider-wrap .rangeslider__handle');

    // get data from sliders
    $('.range-sum-value-left').text($('#range-sum-slider').attr('min'));
    $('.range-sum-value-right').text($('#range-sum-slider').attr('max'));

    $('.range-time-value-left').text($('#range-time-slider').attr('min'));
    $('.range-time-value-right').text($('#range-time-slider').attr('max'));


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
        title: ''
    });
});