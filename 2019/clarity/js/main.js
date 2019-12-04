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
		
		if ( !(scrollOffset > lastScrollOffset)) {
			console.log('scroll up');
			headerContainer.removeClass('header-out');
		}

		lastScrollOffset = scrollOffset <= 0 ? 0 : scrollOffset;
	}

	function setServicesBg(el) {
		var marginTop =  $(el).position().top,
			marginLeft =  $(el).position().left,
			elWidth = $(el).outerWidth(),
			elHeight = $(el).outerHeight(),
			container = $(el).closest('.services-grid'),
			containerBg = container.find('.services-grid-bg'),
			children = container.find('.service-card');


		children.removeClass('is-active');
		$(el).addClass('is-active');
		containerBg.css({'opacity' : '1' ,'width' : elWidth, 'height' : elHeight, 'top' : marginTop, 'left' : marginLeft});
	}

	$(document).ready(function() {
		function openOffcanvas() {
			body.addClass('open');
			offcanvas.addClass('open');
		}

		function closeOffcanvas() {
			body.removeClass('open');
			offcanvas.removeClass('open');
		}

		// Animation
	    setTimeout(function(){
	    	AOS.init({
	    		anchorPlacement: 'top-bottom'
	    	});
	    }, 100);

		// Layout
		stickyHeader();


		$('.offcanvas-toggle').on('click', function() {
			openOffcanvas();
		})

		$('.offcanvas-close').on('click', function() {
			closeOffcanvas();
		})

		$(bg0).on('click', function() {
			closeOffcanvas();
		})

		// Add smooth scrolling to all links
		$(".link-anchor").on('click', function(event) {
		    if (this.hash !== "") {
		        event.preventDefault();

		        var hash = this.hash;

		        $('html, body').animate({
		            scrollTop: $(hash).offset().top
		        }, 600, function() {
		            window.location.hash = hash;
		        });
		    }
		});


		// Phone mask
	    $("input[type='tel']").mask("+7 (999) 999-99-99");


	    // Sliders
	    $('.slider-portfolio').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
			fade: true
		});


		// Services
		$('.services-grid').each(function() {
			var container = $(this),
				el = container.find('.service-card.is-active');

			setServicesBg(el);
		});

		$('.service-card').mouseenter(function(e) {
			setServicesBg(e.currentTarget);
		});


		// Portfolio
		$('.portfolio-card').each(function() {
			var card = $(this),
				cardTitle = $(card).find('.portfolio-title');

			if (cardTitle.text().length > 14) {
				cardTitle.addClass('title-sm');
			}
		});


		// Forms
		$('.form-explain').on('click', '.form-explain-toggle', function (event) {
			var target = $(event.currentTarget),
				sectionContainer = target.closest('section'),
				formContainer = target.closest('.form-explain'),
				formHiddenEl = formContainer.find('.form-group.d-none');

			sectionContainer.addClass('section-explained');
			target.addClass('d-none');
			formHiddenEl.removeClass('d-none');
		});

		$("#formModalCallback").submit(function() {
			$.ajax({
				type: "POST",
				url: "/formModalCallback.php",
				data: $(this).serialize()
			}).done(function() {
				$(this).find("input").val("");
				alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
				$("#formModalCallback").trigger("reset");
			});
			return false;
		});
	})


	$(window).scroll(function(){
		stickyHeader();
	});

	$(window).resize(function(){
		$('.services-grid').each(function() {
			var container = $(this),
				el = container.find('.service-card.is-active');

			setServicesBg(el);
		});
	});
}) (jQuery);