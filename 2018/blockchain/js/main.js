$( document ).ready(function() {
	setTimeout(function(){
	  AOS.init();
	}, 100);

    $( ".header-toggler, .offcanvas-close" ).on( "click", function() {
	  	$(".offcanvas").toggleClass('offcanvas-visible');
	  	$('body').toggleClass("offcanvas-open");
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


	// page trading
	 var swiperResearch = new Swiper('.swiper-team', {
    	slidesPerView: 'auto',
    	freeMode: true,
	
		scrollbar: {
			el: '.swiper-scrollbar',
			hide: false,
		},

		// breakpoints: {
		// 	576: {
		// 		slidesPerView: 1
		// 	},
		// 	767: {
		// 		slidesPerView: 2
		// 	},
		// 	1024: {
		// 		slidesPerView: 3
		// 	}
		// }
	});
});