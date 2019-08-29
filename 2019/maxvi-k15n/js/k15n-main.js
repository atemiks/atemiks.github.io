$(document).ready(function() {
	//animation
    setTimeout(function(){
    	AOS.init({
    		anchorPlacement: 'top-bottom'
    	});
    }, 100);


	// parallax scene 
    var scene = $('#parallax-camera').get(0);
	var parallaxInstance = new Parallax(scene);


	// gallery slider
	$('.k15n-display-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1200,
		arrows: false,
		dots: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		pauseOnDotsHover: false
	});

});