$( document ).ready(function() {

	// custom select

	$('.select-custom').each(function(){
	    var $this = $(this), numberOfOptions = $(this).children('option').length;
	  
	    $this.addClass('select-hidden'); 
	    $this.wrap('<div class="select"></div>');
	    $this.after('<div class="select-styled"></div>');

	    var $styledSelect = $this.next('div.select-styled');
	    $styledSelect.text($this.children('option').eq(0).text());
	  
	    var $list = $('<ul />', {
	        'class': 'select-options'
	    }).insertAfter($styledSelect);
	  
	    for (var i = 0; i < numberOfOptions; i++) {
	        $('<li />', {
	            text: $this.children('option').eq(i).text(),
	            rel: $this.children('option').eq(i).val()
	        }).appendTo($list);
	    }
	  
	    var $listItems = $list.children('li');
	  
	    $styledSelect.click(function(e) {
	        e.stopPropagation();
	        $('div.select-styled.active').not(this).each(function(){
	            $(this).removeClass('active').next('ul.select-options').hide();
	        });
	        $(this).toggleClass('active').next('ul.select-options').toggle();
	    });
	  
	    $listItems.click(function(e) {
	        e.stopPropagation();
	        $styledSelect.text($(this).text()).removeClass('active');
	        $this.val($(this).attr('rel'));
	        $list.hide();
	    });
	  
	    $(document).click(function() {
	        $styledSelect.removeClass('active');
	        $list.hide();
	    });

	});


	// mobile header
	$( ".header-toggle" ).on( "click", function() {
	  	$("html, body").toggleClass('mobile-offcanvas-active');
	  	$(this).toggleClass('header-toggle-close');
	  	$(".mobile-offcanvas").toggleClass('mobile-offcanvas-active');
	});
	$( ".action-search" ).on( "click", function() {
	  	$(".form-search-plan").toggleClass('form-search-plan-active');
	});


	// page home
	$('.slider-hero').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
	 	autoplay: true,
  		autoplaySpeed: 3000

	});


	// page plan

	 $('.slider-plan').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		fade: true,
		asNavFor: '.slider-plan-nav'
	});
	$('.slider-plan-nav').slick({
		slidesToShow: 12,
		slidesToScroll: 1,
		asNavFor: '.slider-plan',
		arrows: false,
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		variableWidth: true
	});


	$( ".image-flip-btn" ).on( "click", function() {
		$(this).next().toggleClass('active');
	});


});