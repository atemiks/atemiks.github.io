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


    // Map
    function initContactMap() {
        var myLatLng = {lat: 55.699869, lng: 37.504058};

        var map = new google.maps.Map(document.getElementById('contact-map'), {
            center: {lat: 55.699869, lng: 37.504058},
            zoom: 15,
            disableDefaultUI: true,
            
        });

        var iconBase =
            'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

        var marker = new google.maps.Marker({
            position: myLatLng,
            // icon: iconBase,
            map: map
        });
    }

    if( $('#contact-map').length ) {
        initContactMap();
    }


    // Forms
    $("#formCallback").submit(function() {
		$.ajax({
			type: "POST",
			url: "/formCallback.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('#modalThanks').modal('show');
			$("#formCallback").trigger("reset");
		});
		return false;
	});

	$("#modalFormCallback").submit(function() {
		$.ajax({
			type: "POST",
			url: "/modalFormCallback.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('#modalCallback').modal('hide');
			$('#modalThanks').modal('show');
			$("#modalFormCallback").trigger("reset");
		});
		return false;
	});
})