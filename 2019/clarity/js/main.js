$(document).ready(function() {
	var body = $('body'),
		offcanvas = $('#offcanvas'),
		bg0 = $('#bg0');

	function openOffcanvas() {
		body.addClass('open');
		offcanvas.addClass('open');
	}

	function closeOffcanvas() {
		body.removeClass('open');
		offcanvas.removeClass('open');
	}

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

	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	        // Prevent default anchor click behavior
	        event.preventDefault();

	        // Store hash
	        var hash = this.hash;

	        // Using jQuery's animate() method to add smooth page scroll
	        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	        $('html, body').animate({
	            scrollTop: $(hash).offset().top
	        }, 600, function() {

	            // Add hash (#) to URL when done scrolling (default click behavior)
	            window.location.hash = hash;
	        });
	    } // End if
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


	// Portfolio
	$('.portfolio-card').each(function() {
		console.log('wroks');
		var card = $(this),
			cardTitle = $(card).find('.portfolio-title');

		if (cardTitle.text().length > 14) {
			cardTitle.addClass('title-sm');
		}
	})

})