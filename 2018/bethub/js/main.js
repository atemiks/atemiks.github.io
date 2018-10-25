$( document ).ready(function() {

	var header = $('.header-box');
	var navigation = $('.navigation-wrapper');
	var chat = $('.chat-wrapper');
	var inventory = $('.inventory-wrapper');
	var bg0 = $('.bg0');
	

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
		$('body').toggleClass('navigation-open');
	  	$(navigation).toggleClass('visible');
	  	$(bg0).toggleClass('visible');
	});


	// chat
	function initChat() {
		$(chat).css('top', getElHeight(header))
	}
	initChat();

	$( ".chat-toggler" ).on( "click", function() {
		$('body').toggleClass('chat-open');
	  	$(chat).toggleClass('visible');
	});

	// $(".chat-body").mCustomScrollbar({
	// 	scrollInertia: 300,
	//  	theme:"dark dark-chat",
	//  	axis:"y"
	// });
	// $('.chat-body').mCustomScrollbar("scrollTo", 'bottom');
	$(".chat-body").scrollTop($(".chat-body")[0].scrollHeight);



	$( ".chat-hint" ).on( "click", ".close", function() {
		$( ".chat-hint" ).slideUp();
	});


	// inventory
	function initInventory() {
		$(inventory).css('top', getElHeight(header))
	}
	initInventory();

	$( ".btn-inventory" ).on( "click", function() {
		$(inventory).addClass('visible');
		$(bg0).addClass('visible');
	});
	$( ".inventory-toggler" ).on( "click", function() {
		$(inventory).removeClass('visible');
		$(bg0).removeClass('visible');
	});


	$(".inventory-wrapper .body").mCustomScrollbar({
		scrollInertia: 300,
	 	theme:"dark dark-chat",
	 	axis:"y"
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


	// history
	$( ".history-table" ).on( "click", '.btn', function() {
		var currentRow = $(this).closest('tr');
		$(currentRow).toggleClass('active');
		$(currentRow).next().slideToggle();
	});

	$(".history-wrapper").mCustomScrollbar({
	 	theme:"dark dark-chat",
	 	axis:"y",
	 	callbacks:{
	        whileScrolling:function(){
	            var pct = this.mcs.topPct;
            	var currentParent = this.closest('.history-wrapper');
	            if(pct >= 95){
	            	$(currentParent).addClass('visible');
	            } else {
	            	$(currentParent).removeClass('visible');
	            }
	        }
	    }
	});

	$(".history-inventory-wrapper").mCustomScrollbar({
	 	theme:"dark dark-chat",
	 	axis:"y"
	});


	// modal
    $( ".active-game-detail" ).on( "click", ".active-game-detail-btn" ,function(e) {

        var currentParent = $(e.currentTarget).closest('.active-game-detail');

        var currentInput = $(currentParent).find('input');
        currentInput.select();
        document.execCommand('copy');

    });

    //
    $( bg0 ).on( "click", function() {
    	$('body').removeClass('navigation-open');
	  	$(navigation).removeClass('visible');

		$(inventory).removeClass('visible');

		$(bg0).removeClass('visible');
	});



	$( window ).resize(function() {
		initNavigation();
		initChat();
		initInventory();
	});
});