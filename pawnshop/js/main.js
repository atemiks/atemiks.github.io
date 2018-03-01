$( document ).ready(function() {

	// animation
	setTimeout(function(){
	  AOS.init();
	}, 100);

	// smooth scroll
	$('a[href*="#"]')
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      if (target.length) {
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	      }
	    }
	  });

	// phone mask
	$("input[type='tel']").mask("+7 (999) 999-99-99");

    // header
    $( ".mobile-toggle, .offcanvas-close" ).on( "click", function() {
        $('body').toggleClass('offcanvas-open');
        $('.offcanvas').toggleClass('offcanvas-active');
    });


	// sliders
	$('.slider-example').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false
	});

	$('.examples-controls .example-control-left').click(function() {
        $('.slider-example').slick('slickPrev');
    })

    $('.examples-controls .example-control-right').click(function() {
        $('.slider-example').slick('slickNext');
    })


	// calculator
    var $rangeSumSlider = $('#range-sum-slider');
    var $rangeSumImport = $('#range-sum-input');

    var $rangeTimeSlider = $('#range-time-slider');
    var $rangeTimeImport = $('#range-time-input');

    var getSum = $('#range-sum-input').val();
    var getTime = $('#range-time-input').val();
    var resultCalc =  getSum / getTime;
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
                resultCalc = getSum / getTime;
                $('.result-box .result').text(resultCalc.toFixed(2));
            }
            else {
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
        zoom: 13,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(55.750665, 37.586016),

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
        position: new google.maps.LatLng(55.750665, 37.586016),
        map: map,
        icon: './img/icons/icon-location-3d.png',
        title: 'Автоломбард'
    });
            
	

});