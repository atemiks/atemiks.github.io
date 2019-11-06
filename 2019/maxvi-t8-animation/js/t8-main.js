$(document).ready(function() {
	//animation
    setTimeout(function(){
    	AOS.init({
    		anchorPlacement: 'top-bottom'
    	});
    }, 100);

	// popup gallery
	$('[data-fancybox]').fancybox({
		buttons: [
			'close'
		]
	});

	// colors animation
	var tl = new TimelineMax({onUpdate:updatePercentage});
	const controller = new ScrollMagic.Controller();


	var width = $(document).width();

	$(window).resize(function(){
		width = $(document).width();
	});
	var animOffset = 0
		if ( $('.t8-glass').height() <= $( window ).height() ) {
			$('.t8-glass').css('min-height', '100vh');
		} else {
			animOffset = 250;
		}
		if (width > 1199){
			tl.to('.t8-phone-screen-block', 1, {x: -200, y:-70});
			tl.to('.t8-phone-screen', 1, {display: 'none'});
			tl.to('.t8-phone-screen-2', .1, {display:'block'});
			tl.to('.t8-phone-screen-2', .3, {display:'none'});
			tl.to('.t8-phone-screen-3', .1, {display:'block'});
			tl.to('.t8-phone-screen-3', .3, {display:'none'});
			tl.to('.t8-phone-screen-4', .1, {display:'block'});
			tl.to('.t8-phone-screen-text', .5, {x:0});
			tl.to('.t8-phone-screen-arrow-right-overvlow img', .5, {x:0}, '=-.5');
			tl.to('.t8-phone-screen-arrow-right-overvlow span', .5, {x:0}, '=-.5');
			tl.to('.t8-phone-screen-arrow-left-overvlow img', .5, {x:0}, '=-.5');
			tl.to('.t8-phone-middle-block', 1, {x: 200}, "=.1");
			tl.to('.t8-phone-back-block', 1, {x: -50, scale: .7}, "=-1");
			tl.to('.t8-phone-back', 1, {filter: "blur(8px)"}, "=-.8");
			// tl.to('.t8-phone-back-blur', 1, {opacity: 1}, "=-1");
			tl.to('.t8-phone-buttons-block', 1, {x: -290, y: 100}, "=-1.2");
			tl.to('.t8-phone-buttons', 1, {filter: "blur(8px)", scale: .9}, "=-.8");
			// tl.to('.t8-phone-buttons-blur', 1, {opacity: 1}, "=-1");
			tl.to('.t8-phone-middle-text', 1, {x: 10}, "=-1");

			const scene = new ScrollMagic.Scene({
				triggerElement: ".t8-glass",
									triggerHook: "onLeave",
									offset: animOffset,
									duration: "100%"
			})
				.setPin(".t8-glass")
				.setTween(tl)
					.addTo(controller);
		} else if (width > 991) {
			tl.to('.t8-phone-screen-block', 1, {x: -150, y:-40});
			tl.to('.t8-phone-screen', .1, {display:'none'});
			tl.to('.t8-phone-screen-2', .1, {display:'block'});
			tl.to('.t8-phone-screen-2', .3, {display:'none'});
			tl.to('.t8-phone-screen-3', .1, {display:'block'});
			tl.to('.t8-phone-screen-3', .3, {display:'none'});
			tl.to('.t8-phone-screen-4', .1, {display:'block'});
			tl.to('.t8-phone-screen-text', .5, {x:0});
			tl.to('.t8-phone-screen-arrow-right-overvlow img', .5, {x:0}, '=-.5');
			tl.to('.t8-phone-screen-arrow-right-overvlow span', .5, {x:0}, '=-.5');
			tl.to('.t8-phone-screen-arrow-left-overvlow img', .5, {x:0}, '=-.5');
			tl.to('.t8-phone-middle-block', 1, {x: 150}, "=.1");
			tl.to('.t8-phone-back-block', 1, {x: -50, scale: .7}, "=-1");
			tl.to('.t8-phone-back', 1, {filter: "blur(8px)"}, "=-.8");
			// tl.to('.t8-phone-back-blur', 1, {opacity: 1}, "=-1");
			tl.to('.t8-phone-buttons-block', 1, {x: -220, y: 60}, "=-1.2");
			tl.to('.t8-phone-buttons', 1, {filter: "blur(8px)", scale: .9}, "=-.8");
			// tl.to('.t8-phone-buttons-blur', 1, {opacity: 1}, "=-1");
			tl.to('.t8-phone-middle-text', 1, {x: 10}, "=-1");

			const scene = new ScrollMagic.Scene({
				triggerElement: ".t8-glass",
									triggerHook: "onLeave",
									offset: 50,
									duration: "100%"
			})
				.setPin(".t8-glass")
				.setTween(tl)
					.addTo(controller);
		} else if (width > 767) {
			tl.to('.t8-phone-screen-block', 1, {x: -120, y:-40});
			tl.to('.t8-phone-screen', .1, {display:'none'});
			tl.to('.t8-phone-screen-2', .1, {display:'block'});
			tl.to('.t8-phone-screen-2', .3, {display:'none'});
			tl.to('.t8-phone-screen-3', .1, {display:'block'});
			tl.to('.t8-phone-screen-3', .3, {display:'none'});
			tl.to('.t8-phone-screen-4', .1, {display:'block'});
			tl.to('.t8-phone-screen-text', .5, {x:0});
			tl.to('.t8-phone-screen-arrow-right-overvlow img', .5, {x:0}, '=-.5');
			tl.to('.t8-phone-screen-arrow-right-overvlow span', .5, {x:0}, '=-.5');
			tl.to('.t8-phone-screen-arrow-left-overvlow img', .5, {x:0}, '=-.5');
			tl.to('.t8-phone-middle-block', 1, {x: 150}, "=.1");
			tl.to('.t8-phone-back-block', 1, {x: -50, scale: .7}, "=-1");
			tl.to('.t8-phone-back', 1, {filter: "blur(8px)"}, "=-.8");
			// tl.to('.t8-phone-back-blur', 1, {opacity: 1}, "=-1");
			tl.to('.t8-phone-buttons-block', 1, {x: -220, y: 60}, "=-1.2");
			tl.to('.t8-phone-buttons', 1, {filter: "blur(8px)", scale: .9}, "=-.8");
			// tl.to('.t8-phone-buttons-blur', 1, {opacity: 1}, "=-1");
			tl.to('.t8-phone-middle-text', 1, {x: 10}, "=-1");

			const scene = new ScrollMagic.Scene({
				triggerElement: ".t8-glass",
									triggerHook: "onLeave",
									offset: 0,
									duration: "100%"
			})
				.setPin(".t8-glass")
				.setTween(tl)
					.addTo(controller);
		} else if (width <= 767) {
			$('.t8-glass').css('height', 'auto');
			tl.to('.t8-phone-animation-block', 1, {y: 50});
			tl.to('.t8-phone-screen-block', 1, {x: 70, y:-150}, '=-1');
			tl.to('.t8-phone-screen', .1, {display:'none'});
			tl.to('.t8-phone-screen-2', .1, {display:'block'});
			tl.to('.t8-phone-screen-2', .3, {display:'none'});
			tl.to('.t8-phone-screen-3', .1, {display:'block'});
			tl.to('.t8-phone-screen-3', .3, {display:'none'});
			tl.to('.t8-phone-screen-4', .1, {display:'block'});
			tl.to('.t8-phone-screen-text', .5, {x:0});
			tl.to('.t8-phone-screen-text-overflow', .5, {y: '-30px'});
			tl.to('.t8-phone-screen-arrow-right-overvlow img', .5, {x:0}, '=-.5');
			tl.to('.t8-phone-screen-arrow-right-overvlow span', .5, {x:0}, '=-.5');
			tl.to('.t8-phone-screen-arrow-left-overvlow img', .5, {x:0}, '=-.5');
			tl.to('.t8-glass .t8-phone-screen-arrow-right-overvlow', .5, {y:'-70px'}, '=-.5');
			tl.to('.t8-phone-screen-arrow-left-overvlow', .5, {y:'-68px'}, '=-.5');
			tl.to('.t8-phone-middle-block', 1, {x: 90}, "=.1");
			tl.to('.t8-phone-back-block', 1, {x: -20, y: -30, scale: .7}, "=-1");
			tl.to('.t8-phone-back', 1, {filter: "blur(8px)"}, "=-.8");
			// tl.to('.t8-phone-back-blur', 1, {opacity: 1}, "=-1");
			tl.to('.t8-phone-buttons-block', 1, {x: -75, y: 75}, "=-1.2");
			tl.to('.t8-phone-buttons', 1, {filter: "blur(8px)", scale: .9}, "=-.8");
			// tl.to('.t8-phone-buttons-blur', 1, {opacity: 1}, "=-1");
			tl.to('.t8-phone-middle-text', 1, {x: 10}, "=-1");

			const scene = new ScrollMagic.Scene({
				triggerElement: ".t8-glass",
									triggerHook: "onLeave",
									offset: 0,
									duration: "100%"
			})
				.setPin(".t8-glass")
				.setTween(tl)
					.addTo(controller);
		}
	
		function updatePercentage() {
			//percent.innerHTML = (tl.progress() *100 ).toFixed();
			tl.progress();
			// console.log(tl.progress());
		}
})