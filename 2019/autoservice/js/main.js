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
        var map = new google.maps.Map(document.getElementById('station-map'), {
            center: {lat: 55.7504461, lng: 37.6174943},
            zoom: 15,
            styles: 
            [
              {
                "featureType": "administrative",
                "stylers": [
                  {
                    "saturation": "-100"
                  }
                ]
              },
              {
                "featureType": "administrative.province",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "landscape",
                "stylers": [
                  {
                    "saturation": -100
                  },
                  {
                    "lightness": 65
                  },
                  {
                    "visibility": "on"
                  }
                ]
              },
              {
                "featureType": "poi",
                "stylers": [
                  {
                    "saturation": -100
                  },
                  {
                    "lightness": "50"
                  },
                  {
                    "visibility": "simplified"
                  }
                ]
              },
              {
                "featureType": "road",
                "stylers": [
                  {
                    "saturation": "-100"
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "stylers": [
                  {
                    "lightness": "30"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "stylers": [
                  {
                    "visibility": "simplified"
                  }
                ]
              },
              {
                "featureType": "road.local",
                "stylers": [
                  {
                    "lightness": "40"
                  }
                ]
              },
              {
                "featureType": "transit",
                "stylers": [
                  {
                    "saturation": -100
                  },
                  {
                    "visibility": "simplified"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                  {
                    "hue": "#ffff00"
                  },
                  {
                    "saturation": -97
                  },
                  {
                    "lightness": -25
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [
                  {
                    "saturation": -100
                  },
                  {
                    "lightness": -25
                  }
                ]
              }
            ]
        })
    }

    initStationMap();


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
