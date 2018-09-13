$( document ).ready(function() {

	var header = $('.header-box');
	var navigation = $('.navigation-wrapper');
	var chat = $('.chat-wrapper');
	

	function getElHeight(el) {
		return el.height();
	}
	//header


	// navigation
	function initNavigation() {
		$(navigation).css('top', getElHeight(header))
	}
	initNavigation() ;

	$( ".header-navigation-toggler" ).on( "click", function() {
		$('body').removeClass('chat-open')
		$('body').toggleClass('navigation-open');
		$(chat).removeClass('visible');
	  	$(navigation).toggleClass('visible');
	});


	// chat
	function initChat() {
		$(chat).css('top', getElHeight(header))
	}
	initChat();

	$( ".chat-toggler" ).on( "click", function() {
		$('body').removeClass('navigation-open');
		$('body').toggleClass('chat-open');
		$(navigation).removeClass('visible');
	  	$(chat).toggleClass('visible');
	});

	$(".chat-body").mCustomScrollbar({
	 	theme:"dark dark-chat",
	 	axis:"y"
	});
	$('.chat-body').mCustomScrollbar("scrollTo", 'bottom');



	$( ".chat-hint" ).on( "click", ".close", function() {
		$( ".chat-hint" ).slideUp();
	});



	// content
	$( ".hero-banner" ).on( "click", ".close", function() {
		$( ".hero-banner" ).slideUp();
	});
    
	var clock = $('.game-timer').FlipClock(120, {
		countdown: true,
		clockFace: 'MinuteCounter'
	});


	$('.game-active-members-slider').slick({
		infinite: true,
  		slidesToShow: 11,
  		slidesToScroll: 6,
  		responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 8,
	        slidesToScroll: 6,
	        infinite: true,
	        dots: false
	      }
	    }
	  ]
	});

	$('.bid-products-slider').slick({
		infinite: false,
		variableWidth: true,
		slidesToScroll: 3,
	});
	$('.bid-products-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		var slideScrolled = $(this).closest('.bid-products-slider');

	  	if(nextSlide != 0) {
			$(slideScrolled).addClass('scrolled');
		}
		else {
			$(slideScrolled).removeClass('scrolled');
		}
	});


	$(function(){ 
		var $ppc = $('.user-pie-chart').each(function () {
			var percent = parseInt($(this).attr('data-percent')); 
			var deg = 360 * percent / 100;
			if (percent > 50) { 
				$(this).addClass('gt-50'); 
			} 
			$(this).find('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)'); 
		})
	});



	$( window ).resize(function() {
		initNavigation();
		initChat();
	});
});