$(document).ready(function () {
    'use strict'

    // animation effect
    jQuery('.post').addClass("unshow").viewportChecker({
        classToAdd: 'show animated fadeInUp',
        offset: 100
    });   

    // burger
    $('#burger button').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('mob_menu_open ');
    }); 

    // init sliders
    $('.slider-testimonials').slick({
        arrows: false,
    	dots: false,
    	adaptiveHeight: true
	});
    $('.slider-arrow-left').click(function(){
        $('.slider-testimonials').slick('slickPrev');
    })

    $('.slider-arrow-right').click(function(){
        $('.slider-testimonials').slick('slickNext');
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
    if ( $("div").is("#map") ) {
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 10,
            scrollwheel: false,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(60.002739, 30.298263),
            
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(60.002739, 30.298263),
            icon: './img/icons/icon-marker.png',
            map: map
        });
        
    }

    /* accordion */
    $('.collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".sprite-icon-arrow-down").removeClass("sprite-icon-arrow-down").addClass("sprite-icon-arrow-up");
    }).on('hidden.bs.collapse', function(){
    $(this).parent().find(".sprite-icon-arrow-up").removeClass("sprite-icon-arrow-up").addClass("sprite-icon-arrow-down");
    });

    // fancy box
    $('[data-fancybox]').fancybox({
        infobar : false,
        toolbar : false,
        arrows : false
    })

});