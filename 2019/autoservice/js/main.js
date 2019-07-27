$(document).ready(function() {
    function openOffcanvas() {
        $('body').addClass('overlay');
        $('.offcanvas').addClass('open');
    }

    function closeOffcanvas() {
        $('body').removeClass('overlay');
        $('.offcanvas').removeClass('open');
    }

    function openMobileSearch() {
        $('body').addClass('overlay');
        $('.search-mobile').addClass('open');
    }

    function closeMobileSearch() {
        $('body').removeClass('overlay');
        $('.search-mobile').removeClass('open');
    }

    // phone mask
    $("input[type='tel']").mask("+7 (999) 999-99-99");


    // offcanvas
    $('.menu-toggler').on('click', function() {
         openOffcanvas();
    })

    $('.offcanvas-close').on('click', function() {
         closeOffcanvas();
    })

    // header
    $('.header-search .search-toggler').on('click', function() {
         openMobileSearch();
    })

    $('.bg0').on('click', function() {
         closeOffcanvas();
         closeMobileSearch();
    })



    // slider news
	$('.gallery-slider').slick({
		slidesToShow: 1,
		arrows: true,
        dots: false,
        mobileFirst: true,
        responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 4
            }
        },
        ]
	});

    function initStationMap() {
        var myLatLng = {lat: 55.7504461, lng: 37.6174943};

        var map = new google.maps.Map(document.getElementById('station-map'), {
            center: {lat: 55.7504461, lng: 37.6174943},
            zoom: 15,
            disableDefaultUI: true,
            styles: 
            [
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
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
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
                    "featureType": "poi",
                    "elementType": "labels.text",
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
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#dbdbdb"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                }
                ]

        });

        var iconBase =
            './images/icons/marker-active.png';

        var marker = new google.maps.Marker({
            position: myLatLng,
            icon: iconBase,
            map: map
        });
    }

    function initResultMap() {
        var myLatLng = {lat: 55.7504461, lng: 37.6174943};

        var map = new google.maps.Map(document.getElementById('result-map'), {
            center: {lat: 55.7504461, lng: 37.607800},
            zoom: 15,
            disableDefaultUI: true,
            styles: 
            [
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
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
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
                    "featureType": "poi",
                    "elementType": "labels.text",
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
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#dbdbdb"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                }
                ]

        });

        var iconBase =
            './images/icons/marker-active.png';

        var features = [
            {
                position: new google.maps.LatLng(55.7534461, 37.6174943)
            },
            {
                position: new google.maps.LatLng(55.7524461, 37.6144943)
            },
            {
                position: new google.maps.LatLng(55.7504461, 37.6274943)
            },
            {
                position: new google.maps.LatLng(55.7524461, 37.6254943)
            }
        ];

        // Create markers.
        for (var i = 0; i < features.length; i++) {
          var marker = new google.maps.Marker({
            position: features[i].position,
            icon: iconBase,
            map: map
          });
        };
    }

    if( $('#station-map').length ) {
        initStationMap();
    }

    if( $('#result-map').length ) {
        initResultMap();
    }

})

$(window).on('scroll', function() {
    var header = $('.header'),
        scroll = $(window).scrollTop();

    if (scroll > 80) {
        header.addClass('header-fixed');
    } else {
        header.removeClass('header-fixed');
    }
});
