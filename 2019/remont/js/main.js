$(document).ready(function() {
    // phone mask
    $("input[type='tel']").mask("+7 (999) 999-99-99");

    var contentSections = $('.fix-section'),
        navigationItems = $('.fixed-nav a');
    updateNavigation();
    $(window).on('scroll', function() {
        updateNavigation();
    });
    navigationItems.on('click', function(event) {
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    function updateNavigation() {
        contentSections.each(function() {
            $this = $(this);
            var activeSection = $('.fixed-nav a[href="#' + $this.attr('id') + '"]').data('number') - 1;
            if (($this.offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($this.offset().top + $this.height() - $(window).height() / 2 > $(window).scrollTop())) {
                navigationItems.eq(activeSection).addClass('is-selected');
            } else {
                navigationItems.eq(activeSection).removeClass('is-selected');
            }
        });
    }

    function smoothScroll(target) {
        $('body,html').animate({
            'scrollTop': target.offset().top
        }, 600);
    }


    // header
    $('.offcanvas-toggler, .offcanvas .close').on('click', function(e) {
        e.preventDefault();

        $('body').toggleClass('open');
        $('.offcanvas').toggleClass('active');
    })

    // change order modal title
    $('#modalOrder').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('title') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').html('<span>Заказать</span> ' + recipient)
    })


    // counter for project slider
	var $status = $('.slider-project-media-counts');
    var $slickElement = $('.slider-project-media');


    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.html('<span>' + i + '</span> /' + slick.slideCount);
    });



    // slider project media
	$('.slider-project-media').slick({
		infinite: false,
		focusOnSelect: true,
		arrows: false,
        responsive: [
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                dots: true
            }
        }
        ]
	});

	$('.slider-project-media-controls .slick-prev').click(function() {
        $('.slider-project-media').slick('slickPrev');
    })

    $('.slider-project-media-controls .slick-next').click(function() {
        $('.slider-project-media').slick('slickNext');
    })

    // slider news
	$('.slider-news').slick({
		slidesToShow: 2,
		arrows: false,
        responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        }
      ]
	});

	$('.slider-news-controls .slick-prev').click(function() {
        $('.slider-news').slick('slickPrev');
    })

    $('.slider-news-controls .slick-next').click(function() {
        $('.slider-news').slick('slickNext');
    })


	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  		$('.slider-project-media').slick('refresh');
	})
})