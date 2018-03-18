$(document).ready(function() {
    'use strict'

    /* Off canvas - Start */
	$('.off-canvas-toggle').on('click', function(e) {
	 e.preventDefault();
	 $('.off-canvas-sidebar li:not(:has(.sub-menu)) span').addClass('hide-menu');
	 //$('body').toggleClass('off-canvas-opened');
	 $('html').toggleClass('off-canvas-opened');
	});

	$('.close-off-canvas').on('click', function(e) {
	 e.preventDefault();
	 $('.off-canvas-sidebar li:not(:has(.sub-menu)) span').addClass('hide-menu');
	 //$('body').removeClass('off-canvas-opened');
	 $('html').removeClass('off-canvas-opened');
	});

	$('.off-canvas-menu .sub-menu-toggle').on('click', function() {
	 var current_root = $(this).closest('.menu-item-has-children').toggleClass('opened');

	 current_root.find('> .sub-menu').slideToggle(300);

	 if(current_root.closest('.sub-menu').length){
	    var current_root = current_root.parents('.menu-item-has-children').last();
	 }

	 var root_items = $(this).closest('div').find('> ul > .menu-item-has-children').not( current_root );

	 root_items.removeClass('opened').find('> .sub-menu').slideUp(300);
	});
	/* Off canvas - End */

	/* mini search */
	$( ".search .icon-search" ).click(function() {
		 //$(".mini-search-form").toggle("300");
		var $getMininSearch = $('.mini-search-form');

		if ($getMininSearch.hasClass('is-visible')) {
	        $getMininSearch.removeClass('is-visible');
	    } else {
	        $getMininSearch.addClass('is-visible');
	    }
	});

	/* slider init */
    $('.partners-slider').slick({
    	slidesToShow: 4,
    	slidesToScroll: 4,
        dots: true,
        useCSS: true,
        useTransform: true,
        responsive: [
	    {
	      breakpoint: 769,
	      settings: {
	        slidesToShow: 3,
    		slidesToScroll: 3
	      }
	    },
	    {
	      breakpoint: 641,
	      settings: {
	        slidesToShow: 2,
    		slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 520,
	      settings: {
	        slidesToShow: 1,
    		slidesToScroll: 1
	      }
	    }
	  ]
    });
    
    $('.clients-slider').slick({
        dots: true,
        useCSS: true,
        useTransform: true
    });

    $('.trust-slider').slick({
    	slidesToShow: 4,
    	slidesToScroll: 4,
        dots: true,
        useCSS: true,
        useTransform: true,
        responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 3,
    		slidesToScroll: 3
	      }
	    },
	    {
	      breakpoint: 641,
	      settings: {
	        slidesToShow: 2,
    		slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 520,
	      settings: {
	        slidesToShow: 1,
    		slidesToScroll: 1
	      }
	    }
	  ]
    });

    // browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');
		

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

	// fixed message show
	var $fixed_message = $('.fixed-message-box');
	
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $fixed_message.addClass('fixed-message-visible') : $fixed_message.removeClass('fixed-message-visible fixed-message-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$fixed_message.addClass('fixed-message-fade-out');
		}
	});

	//open popup
	$('.cd-popup-trigger').on('click', function(event){
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
	});
	
	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
	    }
    });


    // init Isotope
	var iso = new Isotope( '.grid', {
	  itemSelector: '.element-item',
	  layoutMode: 'fitRows'
	});

	// filter functions
	var filterFns = {
	 
	};

	// bind filter button click
	var filtersElem = document.querySelector('.filters-button-group');
	filtersElem.addEventListener( 'click', function( event ) {
	  // only work with buttons
	  if ( !matchesSelector( event.target, 'button' ) ) {
	    return;
	  }
	  var filterValue = event.target.getAttribute('data-filter');
	  // use matching filter function
	  filterValue = filterFns[ filterValue ] || filterValue;
	  iso.arrange({ filter: filterValue });
	});

	// change is-checked class on buttons
	var buttonGroups = document.querySelectorAll('.button-group');
	for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
	  var buttonGroup = buttonGroups[i];
	  radioButtonGroup( buttonGroup );
	}

	function radioButtonGroup( buttonGroup ) {
	  buttonGroup.addEventListener( 'click', function( event ) {
	    // only work with buttons
	    if ( !matchesSelector( event.target, 'button' ) ) {
	      return;
	    }
	    buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
	    event.target.classList.add('is-checked');
	  });
	}

});

