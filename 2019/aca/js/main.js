$( document ).ready(function() {

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
        .not('[href="#tabs-description"]')
        .not('[href="#tabs-specifications"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
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

    // phone mask
    $("input[type='tel']").mask("+7 (999) 999-99-99");

    // custom number
    $(".custom-number").append('<div class="inc button"></div><div class="dec button"></div>');
    $(".custom-number .button").on("click", function() {
      var $button = $(this);
      var oldValue = $button.parent().find("input").val();

      if ($button.hasClass('inc')) {
          var newVal = parseFloat(oldValue) + 1;
        } else {
        if (oldValue > 0) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 0;
        }
      }
      $button.parent().find("input").val(newVal);
    });

    // custom select
    $('.custom-select').select2({
        minimumResultsForSearch: Infinity
    });

    // header
    $( ".header-search-toggler" ).on( "click", function() {
        $('.header-search').toggleClass('active');
    });

    $( ".offcanvas-toggler, .offcanvas .close" ).on( "click", function() {
    	$('body').toggleClass('offcanvas-open');
        $('.offcanvas').toggleClass('visible');
    });

    // slider

    // page home
	$('.slider-hero').slick({
        arrows: false,
        dots: true
    });

    $('.slider-blog').slick({
        slidesToShow: 2,
        arrows: true,
        dots: false,
        responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows: true,
            dots: false
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true
          }
        }
      ]
    });

    // page product
     $('.slider-product').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-product-nav'
    });
    $('.slider-product-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-product',
        arrows: true,
        dots: false,
        focusOnSelect: true,
        responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            arrows: true,
            dots: false
          }
        }
      ]
    });

    // page about
    $('.slider-documents').slick({
        slidesToShow: 1,
        variableWidth: true,
        arrows: false,
        dots: false
    });

    $('.documents-controls .slide-prev').click(function() {
        $('.slider-documents').slick('slickPrev');
    })

    $('.documents-controls .slide-next').click(function() {
        $('.slider-documents').slick('slickNext');
    })

    // pages
    $('.slider-products').slick({
        slidesToShow: 1,
        variableWidth: true,
        arrows: true,
        dots: false,
        responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            variableWidth: true,
            arrows: false,
            dots: true
          }
        }
      ]
    });

    // page catalog
    $( ".catalog-nav-toggler" ).on( "click", function() {
        $('.catalog-aside-inner').slideToggle()
    });
    
    $( ".catalog-view-buttons" ).on( "click", '.catalog-view-button', function() {
        var self = $(this);
        $('.catalog-view-buttons .catalog-view-button').removeClass('active');
        $(self).addClass('active');
    });


    // page product
    $( ".product-block .btn-link" ).on( "click", function() {
        var self = $(this);
        if( $(self).hasClass('more-specifications') ) {
            $('#description-tab').tab('show');
        } else if ( $(self).hasClass('more-description') ) {
            $('#specifications-tab').tab('show');
        }
    });


    // page basket
    $('.basket-grid .basket-trash').on('click','.basket-action',function() {
        $(this).closest('.basket-item').remove();
    });

});
