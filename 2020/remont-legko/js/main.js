(function ($) {
	var body = $('body'),
		headerContainer = $('.header-box'),
		offcanvas = $('#offcanvas'),
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


	function customScrollInit() {
		$(".nano").nanoScroller({
			alwaysVisible: true,
			sliderMinHeight: 104,
			sliderMaxHeight: 104
		})
	}

	function customScrollDestroy() {
		$(".nano").nanoScroller({
			destroy: true
		});
	}


	$(document).ready(function () {
		function openOffcanvas() {
			body.addClass('open');
			offcanvas.addClass('open');
		}

		function closeOffcanvas() {
			body.removeClass('open');
			offcanvas.removeClass('open');
		}

		// Layout
		stickyHeader();


		// Tabs
		$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
			// init custom scroll bar
			// $(".nano").nanoScroller();
			if (windowSizeHelper.isPhone()) {
				// console.log('phone');
				$(".nano").nanoScroller();
			}
		})


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

		$('#offcanvas').on('click', '.offcanvas-menu-link', function () {
			closeOffcanvas();
		})

		$(bg0).on('click', function () {
			closeOffcanvas();
		})


		// Sliders
		$('.hero-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
			var i = (currentSlide ? currentSlide : 0) + 1;
			$('.hero-slider-fraction').text(i + '/' + slick.slideCount);
		});

		$('.hero-slider').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: false,
			fade: true,
			autoplay: true
		});

		$(".hero-slider-prev").click(function () {
			$('.hero-slider').slick('slickPrev');
		});

		$(".hero-slider-next").click(function () {
			$('.hero-slider').slick('slickNext');
		});


		$('.gallery-slider').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			centerMode: true,
			variableWidth: true
		});


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


		// Map
		if ($('#contact-map').length == true) {
			// Basic options for a simple Google Map
			// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
			var mapOptions = {
				// How zoomed in you want the map to start at (always required)
				zoom: 16,

				// The latitude and longitude to center the map (always required)
				center: new google.maps.LatLng(53.308009, 34.301909),

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
				position: new google.maps.LatLng(53.308009, 34.301909),
				map: map,
				icon: './images/icons/icon-marker.svg',
				title: 'Ремонт Легко'
			});
		}


		beforeWindowWidthResizeFunctions.push(function () {
			if (windowSizeHelper.isPhoneToTabletResize()) {
				customScrollInit();
			}

			if (windowSizeHelper.isTabletToPhoneResize()) {
				customScrollDestroy();
			}
		});
	})

	$(window).on('load', function () {
		windowWidth = window.innerWidth;

		if (windowSizeHelper.isPhone()) {
			customScrollDestroy();
		}

		if (!windowSizeHelper.isPhone()) {
			customScrollInit();
		}
	});

	$(window).scroll(function () {
		stickyHeader();
	});
})(jQuery);