$( document ).ready(function() {
    $( ".header-toggler, .offcanvas-close" ).on( "click", function() {
	  	$(".offcanvas").toggleClass('offcanvas-open');
	});


    var swiperResearch = new Swiper('.swiper-research', {
    	slidesPerView: 4,
    	freeMode: true,
	
		scrollbar: {
			el: '.swiper-scrollbar',
			hide: false,
		},

		breakpoints: {
			576: {
				slidesPerView: 1
			},
			767: {
				slidesPerView: 2
			},
			1024: {
				slidesPerView: 3
			}
		}
	});

	var swiperNews = new Swiper('.swiper-news', {
    	slidesPerView: 3,
    	freeMode: true,
	
		scrollbar: {
	        el: '.swiper-scrollbar',
	        hide: false,
	    },

	    breakpoints: {
			767: {
				slidesPerView: 1
			},
			991: {
				slidesPerView: 2
			}
		}
	});
});