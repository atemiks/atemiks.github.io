(function ($) {
	var body = $('body'),
		headerContainer = $('.header-box'),
		offcanvas = $('#offcanvas'),
		megamenu = $('#megamenu'),
		bg0 = $('#bg0');

	var lastScrollOffset = 0;
	var scrollOffset = $(window).scrollTop();

	function stickyHeader() {
		scrollOffset = $(window).scrollTop();

		if (scrollOffset > 30) {
			headerContainer.addClass('header-sticky');
			if (scrollOffset > 700) {
				headerContainer.addClass('header-out');
			}
		} else {
			headerContainer.removeClass('header-sticky');
		}

		if (!(scrollOffset > lastScrollOffset)) {
			console.log('scroll up');
			headerContainer.removeClass('header-out');
		}

		lastScrollOffset = scrollOffset <= 0 ? 0 : scrollOffset;
	}


	$(document).ready(function () {
		function openOffcanvas() {
			offcanvas.addClass('is-open');
		}

		function closeOffcanvas() {
			offcanvas.removeClass('is-open');
		}


		function openMegamenu() {
			megamenu.addClass('is-open');
		}

		function closeMegamenu() {
			megamenu.removeClass('is-open');
		}

		// Layout
		stickyHeader();


		// Custom select
		$('.select2').select2({
			minimumResultsForSearch: Infinity
		});


		// Animation
		setTimeout(function () {
			AOS.init({
				anchorPlacement: 'top-bottom'
			});
		}, 100);

		// Add smooth scrolling to all links
		$(".link-anchor").on('click', function (event) {
			if (this.hash !== "") {
				event.preventDefault();

				var hash = this.hash;

				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 600, function () {
					window.location.hash = hash;
				});
			}
		});


		// Phone mask
		$("input[type='tel']").mask("+7 (999) 999-99-99");


		// Fancybox
		$('[data-fancybox]').fancybox({
			buttons: [
				"close"
			]
		});


		// Offcanvas 
		$('.offcanvas-toggle').on('click', function () {
			openOffcanvas();
		})

		$('.offcanvas-close').on('click', function () {
			closeOffcanvas();
		})

		// megamenu
		$('.megamenu-toggle').on('click', function () {
			openMegamenu();
		})

		$('.megamenu-close').on('click', function () {
			closeMegamenu();
		})


		// calculator

	    $.fn.setCursorPosition = function (pos) {
	        this.each(function (index, elem) {
	            if (elem.setSelectionRange) {
	                elem.setSelectionRange(pos, pos);
	            } else if (elem.createTextRange) {
	                var range = elem.createTextRange();
	                range.collapse(true);
	                range.moveEnd('character', pos);
	                range.moveStart('character', pos);
	                range.select();
	            }
	        });
	        return this;
	    };

	    var $rangeSumSlider = $('#range-sum-slider');
	    var $rangeSumImport = $('#range-sum-input');

	    var $rangeTimeSlider = $('#range-time-slider');
	    var $rangeTimeImport = $('#range-time-input');

	    var getSum = $('#range-sum-input').val();
	    var getTime = $('#range-time-input').val();
	    var resultSum = getSum / getTime * currentPersent;

	    var currentPersent = 0.02;

	    function calcTotalSum() {
	    	var monthSum = +getSum,
	    		totalSum = monthSum;

	    	for(var i = 1; i <= getTime; i++) {
	    		totalSum += monthSum + monthSum * 0.02;
	    		console.log(i + ' ' + totalSum);
	    	}
	    }

	    calcTotalSum();

	    // $('.calc-type-list').on('click', '.calc-type-item', function() {
	    //     var self = $(this);
	    //     var parrent = $(self).closest('.calc-type-list');

	    //     $(parrent).find('.calc-type-item').removeClass('active');
	    //     $(self).addClass('active');

	    //     resultSum = getSum / getTime * currentPersent ;
	    //     $('.section-calc .calc-payment-month span').text(resultSum.toFixed(0)).divide();
	    // });

	    resultSum = getSum / getTime * currentPersent ;
	    $('.section-calc .calc-payment-month span').text(resultSum.toFixed(0)).divide();

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
	                resultSum = getSum / getTime * currentPersent ;
	                $('.section-calc .calc-payment-month span').text(resultSum.toFixed(0)).divide();
	            }
	            else {
	                $('.section-calc .calc-payment-month span').text('0');
	            }
	        });

	    $rangeSumImport.on('input', function() {
	        $rangeSumImport[0].value = this.value;
	        getSum = $('#range-sum-input').val();
	        getTime = $('#range-time-input').val();

	        if(getSum != 0 && getTime != 0 ) {
	                resultCalc = getSum / getTime * currentPersent ;
	                $('.section-calc .calc-payment-month span').text(resultSum.toFixed(0)).divide();
	                $rangeSumSlider.val(getSum).change();
	        }
	        else {
	            this.value = 0;
	            $('.section-calc .calc-payment-month span').text('0');
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
	                resultSum = getSum / getTime * currentPersent ;
	                $('.section-calc .calc-payment-month span').text(resultSum.toFixed(0)).divide();
	            }
	            else {
	                $('.section-calc .calc-payment-month span').text('0');
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

	    var input = $('#range-sum-input');
	    var inputslider = $('#range-sum-input');


	    $('#range-sum-slider').on("input change", function() {
	        inputslider.val(this.value);
	    });

	    $('#range-sum-input').on("input", function() {
	        input.val(this.value);
	    });


	    // get data from sliders
	    $('.range-sum-value-left').text($('#range-sum-slider').attr('min')).divide();
	    $('.range-sum-value-right').text($('#range-sum-slider').attr('max')).divide();

	    $('.range-time-value-left').text($('#range-time-slider').attr('min')).append(' месяцев');
	    $('.range-time-value-right').text($('#range-time-slider').attr('max')).append(' месяцев');



		// Forms
		$("#formModalCallback").submit(function () {
			$.ajax({
				type: "POST",
				url: "/formModalCallback.php",
				data: $(this).serialize()
			}).done(function () {
				$(this).find("input").val("");
				alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
				$("#formModalCallback").trigger("reset");
			});
			return false;
		});

		$("#formModalCalc").submit(function () {
			$.ajax({
				type: "POST",
				url: "/formModalCalc.php",
				data: $(this).serialize()
			}).done(function () {
				$(this).find("input").val("");
				alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
				$("#formModalCalc").trigger("reset");
			});
			return false;
		});


		// Map
		if ($('#contact-map').length == true) {
			// Basic options for a simple Google Map
			// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
			var mapOptions = {
				// How zoomed in you want the map to start at (always required)
				zoom: 16,

				// The latitude and longitude to center the map (always required)
				center: new google.maps.LatLng(53.234660, 34.367173),

				// How you would like to style the map. 
				// This is where you would paste any style found on Snazzy Maps.
				styles: [
					{
						"featureType": "administrative",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "administrative",
						"elementType": "geometry",
						"stylers": [
							{
								"visibility": "simplified"
							}
						]
					},
					{
						"featureType": "administrative",
						"elementType": "labels.text.fill",
						"stylers": [
							{
								"color": "#444444"
							}
						]
					},
					{
						"featureType": "landscape.man_made",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "on"
							}
						]
					},
					{
						"featureType": "landscape.man_made",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"visibility": "on"
							},
							{
								"hue": "#ffb300"
							},
							{
								"saturation": "32"
							},
							{
								"lightness": "0"
							}
						]
					},
					{
						"featureType": "landscape.natural",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "simplified"
							},
							{
								"hue": "#ffb800"
							},
							{
								"saturation": "54"
							}
						]
					},
					{
						"featureType": "poi",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "road",
						"elementType": "all",
						"stylers": [
							{
								"saturation": -100
							},
							{
								"lightness": 45
							},
							{
								"visibility": "on"
							}
						]
					},
					{
						"featureType": "road",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"visibility": "on"
							},
							{
								"hue": "#ffb800"
							},
							{
								"saturation": "29"
							},
							{
								"lightness": "64"
							},
							{
								"gamma": "1"
							}
						]
					},
					{
						"featureType": "road",
						"elementType": "geometry.stroke",
						"stylers": [
							{
								"color": "#ffda7b"
							}
						]
					},
					{
						"featureType": "road",
						"elementType": "labels",
						"stylers": [
							{
								"visibility": "simplified"
							}
						]
					},
					{
						"featureType": "road",
						"elementType": "labels.icon",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "on"
							}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "geometry.stroke",
						"stylers": [
							{
								"visibility": "simplified"
							}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "labels",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "labels.text.fill",
						"stylers": [
							{
								"color": "#ffda7b"
							}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "labels.text.stroke",
						"stylers": [
							{
								"color": "#ffda7b"
							}
						]
					},
					{
						"featureType": "transit",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "simplified"
							}
						]
					},
					{
						"featureType": "transit",
						"elementType": "labels",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "water",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"visibility": "on"
							},
							{
								"saturation": "-60"
							},
							{
								"color": "#d5cdb6"
							}
						]
					}
				]

			};

			// Get the HTML DOM element that will contain your map 
			// We are using a div with id="map" seen below in the <body>
			var mapElement = document.getElementById('contact-map');

			// Create the Google Map using our element and options defined above
			var map = new google.maps.Map(mapElement, mapOptions);

			// Let's also add a marker while we're at it
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(53.234660, 34.367173),
				map: map,
				icon: './images/icons/icon-marker.svg',
				title: 'Ремонт Легко'
			});
		}


		beforeWindowWidthResizeFunctions.push(function () {
			// if (windowSizeHelper.isPhoneToTabletResize()) {
			// 	customScrollInit();
			// }

			// if (windowSizeHelper.isTabletToPhoneResize()) {
			// 	customScrollDestroy();
			// }
		});
	})

	$(window).on('load', function () {
		windowWidth = window.innerWidth;

		// if (windowSizeHelper.isPhone()) {
		// 	customScrollDestroy();
		// }

		// if (!windowSizeHelper.isPhone()) {
		// 	customScrollInit();
		// }
	});

	$(window).scroll(function () {
		stickyHeader();
	});
})(jQuery);

var in2put = $('#range-sum-input');
$(in2put).divide();