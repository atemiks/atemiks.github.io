$( document ).ready(function() {


	var currentWidth = $(window).width();

	// var initSliders = false;



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
	                    scrollTop: target.offset().top // - headerHeight()
	                }, 300);
	            }
	        }
	    });


	// header toogle
    $( ".header-mobile-toggle, .offcanvas-close, .offcanvas-menu li a" ).on( "click", function() {
        $('html, body').toggleClass('offcanvas-open');
        $('.offcanvas').toggleClass('offcanvas-active');
    });


    function customSelectInit() {
        $('.custom-select').select2({
            minimumResultsForSearch: Infinity
        });
    }
    customSelectInit();

    // phone mask
	$("input[type='tel']").mask("+7 (999) 999-99-99");


    // custom scroll
    function customScrollInit() {
        $(".portfolio-scroll").mCustomScrollbar({
            theme:"dark dark-portfolio",
            axis:"y"
         });
    }

    function customScrollDestroy() {
        $('.portfolio-scroll').mCustomScrollbar("destroy");

    }

    customScrollInit();


    // modals
    $("#modalVideo").on('hidden.bs.modal', function (e) {
        $("#modalVideo iframe").attr("src", $("#modalVideo iframe").attr("src"));
    });

    $('#modalEstimate .estimate-back').on('click', function () {
        $('#modalEstimate').modal('hide');
    })

    $('#modalEstimate .estimate-order').on('click', function () {
        $('#modalEstimate').modal('hide');
        $('#modalEstimate').on('hidden.bs.modal', function (e) {
            $('#modalOrder').modal('show');
        })
    })

    $('#modalCalcOrder .back').on('click', function () {
        $('#modalCalcOrder').modal('hide');
    })


	// sliders
    var $status = $('.hero-slider-counts');
    var $slickElement = $('.hero-slider');


    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });

    $('.hero-slider').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         dots: false,
         arrows: false,
         infinite: false,
         responsive: [
            {
              breakpoint: 767,
              settings: {
                adaptiveHeight: true
              }
            }
          ]
         
     });

    $( ".hero-slider-arrows .hero-slider-prev" ).click(function() {
        $('.hero-slider').slick('slickPrev');
    });
    $( ".hero-slider-arrows .hero-slider-next" ).click(function(){
        $('.hero-slider').slick('slickNext');
    });



    $('.works-hero-slider').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         dots: false,
         arrows: false,
         infinite: false,
         fade: true,
         swipe: false,
         swipeToSlide: false,
         draggable: false
     });

    $('.work-thumbnail-slider').slick({
         infinite: false,
         slidesToShow: 1,
         slidesToScroll: 1,
         dots: false,
         arrows: true
     });

    // $('.work-thumbnail-slider').on('beforeChange', function(nextSlide) {
      
    //     // var activeSlide = $('.works-slider .slide-item.slick-current');
    //     // var nextActiveSlide = $(activeSlide).next();
        
    //     // $('.works-slider .slide-item').removeClass('slick-current');
    //     // $(nextActiveSlide).addClass('slick-current');
    //     // $('.works-hero-slider').slick('slickGoTo', $(nextActiveSlide).attr('data-slick-index') );
    // });



    var lengthWorksSlider = $('.works-slider .slide-item').length;
    $('.works-slider').slick({
         slidesToShow: lengthWorksSlider,
         dots: false,
         arrows: false,
         vertical: true,
         infinite: false,
         swipe: false,
         swipeToSlide: false,
         draggable: false,
         responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            swipe: true,
            swipeToSlide: true,
            draggable: true,
            vertical: false,
            infinite: false,
            arrows: false,
            dots: false,
            variableWidth: true
          }
        }
      ]
     });

    $('.works-slider .slide-item').first().addClass('slick-current');

    $('.works-slider').on('click', '.slide-item', function () {
        $('.works-slider .slide-item').removeClass('slick-current');
        $(this).addClass('slick-current');
        $('.works-hero-slider').slick('slickGoTo', $(this).attr('data-slick-index') );
    });



    // $( ".calc-controls .calc-control-delete" ).click(function() {
    //     alert('hello');
    //      $(this).closest( ".calc-row" ).remove();
    // });

    $('.form-calc').on('click','.calc-control-delete',function() {
        $(this).closest('.calc-row').remove();
    });

    var text = '<div class="calc-row row"> <div class="calc-group calc-count col-xs-12 col-sm-1"></div> <div class="calc-group col-xs-12 col-sm-3"> <label for="calcType">Тип помещения</label> <select class="custom-select" name="calcType" style="width: 100%;" > <option value="Жилая комната"> Жилая комната</option> <option value="Кухня">Кухня</option> <option value="Ванная">Ванная</option> <option value="Туалет">Туалет</option> <option value="Балкон">Балкон</option> </select> </div> <div class="calc-group col-xs-12 col-sm-2"> <label for="calcLength">Длина, м</label> <input type="text" name="calcLength" > </div> <div class="calc-group col-xs-12 col-sm-2"> <label for="calcWidth">Ширина, м</label> <input type="text" name="calcWidth" > </div> <div class="calc-group col-xs-12 col-sm-2"> <label for="calcHeight">Высота, м</label> <input type="text" name="calcHeight" > </div> <div class="calc-controls col-xs-12 col-sm-2"> <button class="calc-control-delete"><i class="icon-trash" ></i></button> </div> </div>';

    $( ".calc-control-add" ).on( "click", function() {
        $('.form-calc').append(text);

        customSelectInit();
    });



    $('.testimonial-slider').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         dots: true,
         arrows: false,
         fade: true
     });
    $( ".testimonial-slider-arrows .testimonial-slider-next" ).click(function(){
        $('.testimonial-slider').slick('slickNext');
    });

    

    // $slickElement.slick({
    //     slide: 'img',
    //     autoplay: true,
    //     dots: true
    // });

	// function mobileSlidersInit() {
	// 	$('.achievements-grid, .advantages-grid, .testimonials-grid, .documents-grid').slick({
	// 		slidesToShow: 2,
	// 		slidesToScroll: 1,
	// 		dots: true,
	// 		arrows: true,
	// 		adaptiveHeight: true,
	// 		responsive: [
	// 	    {
	// 	      breakpoint: 640,
	// 	      settings: {
	// 	        slidesToShow: 1,
	// 	        slidesToScroll: 1,
	// 	        dots: true,
	// 	        arrows: true
	// 	      }
	// 	    }
	// 	  ]
	// 	});

	// 	$('.news-grid').slick({
	// 		slidesToShow: 1,
	// 		slidesToScroll: 1,
	// 		dots: true,
	// 		arrows: true
	// 	});
	// }
	// function mobileSlidersDestroy() {
	// 	$('.achievements-grid, .advantages-grid, .testimonials-grid, .documents-grid, .news-grid').slick('unslick');
	// }


	// if(currentWidth > 1024) {
	// 	customScrollInit();
	// 	initSliders = false;
	// }
	// else {
	// 	mobileSlidersInit();
	// 	initSliders = true;
	// }


	// $( window ).resize(function() {
	// 	currentWidth = $(window).width();
	// 	console.log(currentWidth);

	// 	if(currentWidth > 1024 && initSliders == true  ) {
	// 		initSliders = false;
	// 		mobileSlidersDestroy();
	// 		customScrollInit();
	// 	}
	// 	else if (currentWidth <= 1024 && initSliders == false) {
	// 		initSliders = true;
	// 		customScrollDestroy();
	// 		mobileSlidersInit();
	// 	}

	// });


	// forms
	$("#formModalOrder").submit(function() {
        $.ajax({
            type: "POST",
            url: "/formModalOrder.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#formModalOrder").trigger("reset");
        });
        return false;
    });

    $("#formHero").submit(function() {
        $.ajax({
            type: "POST",
            url: "/formHero.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#formHero").trigger("reset");
        });
        return false;
    });


    $("#formCallback1").submit(function() {
        $.ajax({
            type: "POST",
            url: "/formCallback1.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#formCallback1").trigger("reset");
        });
        return false;
    });


    $("#formCallback2").submit(function() {
        $.ajax({
            type: "POST",
            url: "/formCallback2.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#formCallback2").trigger("reset");
        });
        return false;
    });


    $("#formCallbackFooter").submit(function() {
        $.ajax({
            type: "POST",
            url: "/formCallbackFooter.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#formCallbackFooter").trigger("reset");
        });
        return false;
    });


    // map

    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    // var mapOptions = {
    //     // How zoomed in you want the map to start at (always required)
    //     zoom: 14,

    //     // The latitude and longitude to center the map (always required)
    //     center: new google.maps.LatLng(55.7897495, 37.5023705),

    //     // How you would like to style the map. 
    //     // This is where you would paste any style found on Snazzy Maps.
    //     styles: []
    // };

    // // Get the HTML DOM element that will contain your map 
    // // We are using a div with id="map" seen below in the <body>
    // var mapElement = document.getElementById('map');

    // // Create the Google Map using our element and options defined above
    // var map = new google.maps.Map(mapElement, mapOptions);

    // // Let's also add a marker while we're at it
    // var marker = new google.maps.Marker({
    //     position: new google.maps.LatLng(55.7897495, 37.5023705),
    //     map: map,
    //     // icon: './img/icons/icon-location.png',
    //     icon: './img/icons/icon-location-primary.svg',
    //     title: 'SFT'
    // });


    // resize window
    $( window ).resize(function() {
        // if(currentWidth < 1025) {

        // }
        // header offset
        // headerOffset();
    });

});