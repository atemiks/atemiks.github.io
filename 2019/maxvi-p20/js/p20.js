$(document).ready(function() {
	// animation
    setTimeout(function(){
    	AOS.init();
    }, 100);
    
	// gallery slider
	$('.slider-gallery-wrapper').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		draggable: false,
		swipe: false,
		swipeToSlide: false,
		touchMove: false,
		infinite: false
	});

    $('.slider-gallery').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false
	});

	// colors tabs
	$('a.color-card').on('click', function(e) {
		e.preventDefault();
	});
})