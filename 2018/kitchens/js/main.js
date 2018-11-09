$( document ).ready(function() {
    // animation
    setTimeout(function(){
      AOS.init();
    }, 100);


    // Smooth scroll
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
            }, 1000 );
          }
        }
    });

    // phone mask
    $("input[type='tel']").mask("+7 (999) 999-99-99");

    // header
    $( ".offcanvas-toggler" ).on( "click", function() {
        $('body').toggleClass('offcanvas-open');
        $('.offcanvas').toggleClass('visible');
    });
    $( ".offcanvas .close, .offcanvas-nav a" ).on( "click", function() {
        $('body').removeClass('offcanvas-open');
        $('.offcanvas').removeClass('visible');
    });

    // page home
    $('.slider-portfolio').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-portfolio-nav',
        fade: true,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    fade: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            }
        ]
    });
    $('.slider-portfolio-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-portfolio',
        dots: false,
        focusOnSelect: true
    });

    $('.slider-project-media').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false
    });


    $('.slider-portfolio-controls .slide-prev').click(function() {
        $('.slider-portfolio').slick('slickPrev');
    });
    $('.slider-portfolio-controls .slide-next').click(function() {
        $('.slider-portfolio').slick('slickNext');
    });

    var $testimonialStatus = $('.slider-testimonials-info');
    $('.slider-testimonials').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $testimonialStatus.html('<span>' + i + '</span>' + '/' + slick.slideCount);
    });

    $('.slider-testimonials').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        loop: false,
        arrows: true,
        dots: false
    });


    // page catalog
    
    $('#modalCatalog').on('shown.bs.modal', function (event) {
        $('.slider-modal-media').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
        });

        setTimeout(function() {
            $('.slider-modal-media').css({'visibility': 'visible', 'opacity': '1'});
        }, 300);
    })

    // calculator
    var currentUnitIndex = $( ".calc-unit.active" ).index();
    var maxUnits = $('.calc-unit').length - 1;

    function calcPrevDisable() {
        $( ".calc-controls .calc-prev" ).attr('disabled', 'disabled');
    }
    function calcPrevActive() {
        $( ".calc-controls .calc-prev" ).removeAttr('disabled');
    }
    function calcNextDisable() {
        $( ".calc-controls .calc-next" ).attr('disabled', 'disabled');
    }
    function calcNextActive() {
        $( ".calc-controls .calc-next" ).removeAttr('disabled');
    }

    // change unit active el
    $( ".calc-unit" ).on( "click", '.calc-title', function(e) {
        e.stopPropagation();
        var currentParent = $(e.currentTarget).closest('.calc-unit');
        currentUnitIndex = currentParent.index();

        $( ".calc-unit" ).removeClass('active');
        $(currentParent).addClass('active');

        if( currentUnitIndex == 0 ) {
            calcPrevDisable();
            calcNextActive();
        }
        else if ( currentUnitIndex == maxUnits ) {
            calcPrevActive();
            calcNextDisable();
        } else {
            calcPrevActive();
            calcNextActive();
        }
    });

    // change choose active el
    $( ".calc-choose-grid" ).on( "click", '.calc-choose', function(e) {
        var currentParent = $(e.currentTarget).closest('.calc-choose-grid');
        var currentValue;

        $(currentParent).find('.calc-choose').removeClass('active');
        $(e.currentTarget).addClass('active');

        currentValue =  $(currentParent).find('.calc-choose.active .calc-choose-name').text();
        $(currentParent).prev().val(currentValue);
    });
    // show selected shape
    $( ".calc-choose-shape-grid" ).on( "click", '.calc-choose', function(e) {
        var currentParent = $(e.currentTarget).closest('.calc-choose-grid');
        var currentValue =  $(currentParent).find('.calc-choose.active .calc-choose-name').text();
        var selectedShapeName = $('.calc-selected-shape-name');
        var selectedShapeMedia = $('.calc-selected-shape-media');

        if( currentValue == "Прямая" ) {
            selectedShapeName.text('Прямая');
            selectedShapeMedia.css('background-image', 'url("./images/page-home/section-calc/step-shape/shape-type-1.png")');
        }
        else if( currentValue == "Угловая" ) {
            selectedShapeName.text('Угловая');
            selectedShapeMedia.css('background-image', 'url("./images/page-home/section-calc/step-shape/shape-type-2.png")');
        }
        else if( currentValue == "Островная" ) {
            selectedShapeName.text('Островная');
            selectedShapeMedia.css('background-image', 'url("./images/page-home/section-calc/step-shape/shape-type-3.png")');
        }
        else if( currentValue == "Другая" ) {
            selectedShapeName.text('Другая');
            selectedShapeMedia.css('background-image', 'url("./images/page-home/section-calc/step-shape/shape-type-4.png")');
        }
    });

    // calc controls
    $( ".calc-controls" ).on( "click", '.calc-prev', function(e) {
        var currentEl = $('.calc-unit.active');
        currentUnitIndex = currentEl.index();

        currentEl.removeClass('active');
        currentEl.prev().addClass('active');

        if( (currentUnitIndex - 1 ) == 0 )
            calcPrevDisable();
        else
            calcNextActive();
    });

    $( ".calc-controls" ).on( "click", '.calc-next', function(e) {
        var currentEl = $('.calc-unit.active');
        currentUnitIndex = currentEl.index();

        currentEl.removeClass('active');
        currentEl.next().addClass('active');

        if( (currentUnitIndex + 1) == maxUnits )
            calcNextDisable();
        else
            calcPrevActive();

    });
    
});