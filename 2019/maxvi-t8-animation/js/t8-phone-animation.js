$(document).ready( function() {
  var tl = new TimelineMax({onUpdate:updatePercentage});
	const controller = new ScrollMagic.Controller();


	var width = $(document).width();
	height = $( document ).height();

	$(window).resize(function(){
		width = $(document).width();
		height = $( document ).height();
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
			tl.to('.t8-phone-screen-4', .3, {display:'none'});
			tl.to('.t8-phone-screen-5', .1, {display:'block'});
			tl.to('.t8-phone-screen-5', .3, {display:'none'});
			tl.to('.t8-phone-screen-6', .1, {display:'block'});
			tl.to('.t8-phone-screen-6', .3, {display:'none'});
			tl.to('.t8-phone-screen-7', .1, {display:'block'});
			tl.to('.t8-phone-screen-7', .3, {display:'none'});
			tl.to('.t8-phone-screen-8', .1, {display:'block'});
			tl.to('.t8-phone-screen-8', .3, {display:'none'});
			tl.to('.t8-phone-screen-9', .1, {display:'block'});
			tl.to('.t8-phone-screen-text', .5, {x:0});
			tl.to('.t8-phone-screen-arrow-right-overvlow img', .5, {x:0}, '=-.5');
			tl.to('.t8-phone-screen-arrow-right-overvlow span', .5, {x:0}, '=-.5');
			tl.to('.t8-phone-screen-arrow-left-overvlow img', .5, {x:0}, '=-.5');
			tl.to('.t8-phone-middle-block', 3, {x: 200}, "=.1");
			tl.to('.t8-phone-back-block', 3, {x: -50, scale: .7}, "=-3");
			tl.to('.t8-phone-back-blur', 3, {opacity: 1}, "=-3");
			tl.to('.t8-phone-back', 3, {opacity: 0}, "=-2.5");
			tl.to('.t8-phone-buttons-block', 3, {x: -290, y: 100}, "=-3.2");
			tl.to('.t8-phone-buttons', 3, {filter: "blur(8px)", scale: .9}, "=-2.8");
			tl.to('.t8-phone-middle-text', 3, {x: 10}, "=-3");
			tl.to('.t8-phone-middle-text', 15, {x: 10}, "=0");

			const scene = new ScrollMagic.Scene({
				triggerElement: ".t8-glass",
									triggerHook: "onLeave",
									offset: animOffset,
									duration: "100%"
			})
				.setPin(".t8-glass")
				.setTween(tl)
					.addTo(controller);
		} else if (width > 991 && height < 700) {
			tl.to('.t8-phone-screen-block', 1, {x: -150, y:-20});
			tl.to('.t8-phone-screen', .1, {display:'none'});
			tl.to('.t8-phone-screen-2', .1, {display:'block'});
			tl.to('.t8-phone-screen-2', .3, {display:'none'});
			tl.to('.t8-phone-screen-3', .1, {display:'block'});
			tl.to('.t8-phone-screen-3', .3, {display:'none'});
			tl.to('.t8-phone-screen-4', .1, {display:'block'});
			tl.to('.t8-phone-screen-4', .3, {display:'none'});
			tl.to('.t8-phone-screen-5', .1, {display:'block'});
			tl.to('.t8-phone-screen-5', .3, {display:'none'});
			tl.to('.t8-phone-screen-6', .1, {display:'block'});
			tl.to('.t8-phone-screen-6', .3, {display:'none'});
			tl.to('.t8-phone-screen-7', .1, {display:'block'});
			tl.to('.t8-phone-screen-7', .3, {display:'none'});
			tl.to('.t8-phone-screen-8', .1, {display:'block'});
			tl.to('.t8-phone-screen-8', .3, {display:'none'});
			tl.to('.t8-phone-screen-9', .1, {display:'block'});
			tl.to('.t8-phone-screen-text', .5, {x:0});
			tl.to('.t8-phone-screen-arrow-right-overvlow img', .5, {x:0}, '=-.5');
			tl.to('.t8-phone-screen-arrow-right-overvlow span', .5, {x:0}, '=-.5');
			tl.to('.t8-phone-screen-arrow-left-overvlow img', .5, {x:0}, '=-.5');
			tl.to('.t8-phone-middle-block', 3, {x: 150}, "=.1");
			tl.to('.t8-phone-back-block', 3, {x: -50, scale: .7}, "=-3");
			tl.to('.t8-phone-back-blur', 3, {opacity: 1}, "=-3");
			tl.to('.t8-phone-back', 3, {opacity: 0}, "=-2.5");
			tl.to('.t8-phone-buttons-block', 1, {x: -220, y: 30}, "=-3.2");
			tl.to('.t8-phone-buttons', 3, {filter: "blur(8px)", scale: .9}, "=-2.8");
			tl.to('.t8-phone-middle-text', 3, {x: 10}, "=-3");
			tl.to('.t8-phone-middle-text', 15, {x: 10}, "=0");

			const scene = new ScrollMagic.Scene({
				triggerElement: ".t8-glass",
									triggerHook: "onLeave",
									offset: 10,
									duration: "100%"
			})
				.setPin(".t8-glass")
				.setTween(tl)
					.addTo(controller);
		}
		 else if (width > 991) {
			tl.to('.t8-phone-screen-block', 1, {x: -150, y:-40});
			tl.to('.t8-phone-screen', .1, {display:'none'});
			tl.to('.t8-phone-screen-2', .1, {display:'block'});
			tl.to('.t8-phone-screen-2', .3, {display:'none'});
			tl.to('.t8-phone-screen-3', .1, {display:'block'});
			tl.to('.t8-phone-screen-3', .3, {display:'none'});
			tl.to('.t8-phone-screen-4', .1, {display:'block'});
			tl.to('.t8-phone-screen-4', .3, {display:'none'});
			tl.to('.t8-phone-screen-5', .1, {display:'block'});
			tl.to('.t8-phone-screen-5', .3, {display:'none'});
			tl.to('.t8-phone-screen-6', .1, {display:'block'});
			tl.to('.t8-phone-screen-6', .3, {display:'none'});
			tl.to('.t8-phone-screen-7', .1, {display:'block'});
			tl.to('.t8-phone-screen-7', .3, {display:'none'});
			tl.to('.t8-phone-screen-8', .1, {display:'block'});
			tl.to('.t8-phone-screen-8', .3, {display:'none'});
			tl.to('.t8-phone-screen-9', .1, {display:'block'});
			tl.to('.t8-phone-screen-text', .5, {x:0});
			tl.to('.t8-phone-screen-arrow-right-overvlow img', .5, {x:0}, '=-.5');
			tl.to('.t8-phone-screen-arrow-right-overvlow span', .5, {x:0}, '=-.5');
			tl.to('.t8-phone-screen-arrow-left-overvlow img', .5, {x:0}, '=-.5');
			tl.to('.t8-phone-middle-block', 3, {x: 150}, "=.1");
			tl.to('.t8-phone-back-block', 3, {x: -50, scale: .7}, "=-3");
			tl.to('.t8-phone-back-blur', 3, {opacity: 1}, "=-3");
			tl.to('.t8-phone-back', 3, {opacity: 0}, "=-2.5");
			tl.to('.t8-phone-buttons-block', 1, {x: -220, y: 60}, "=-3.2");
			tl.to('.t8-phone-buttons', 3, {filter: "blur(8px)", scale: .9}, "=-2.8");
			tl.to('.t8-phone-middle-text', 3, {x: 10}, "=-3");
			tl.to('.t8-phone-middle-text', 15, {x: 10}, "=0");

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
			tl.to('.t8-phone-screen-4', .3, {display:'none'});
			tl.to('.t8-phone-screen-5', .1, {display:'block'});
			tl.to('.t8-phone-screen-5', .3, {display:'none'});
			tl.to('.t8-phone-screen-6', .1, {display:'block'});
			tl.to('.t8-phone-screen-6', .3, {display:'none'});
			tl.to('.t8-phone-screen-7', .1, {display:'block'});
			tl.to('.t8-phone-screen-7', .3, {display:'none'});
			tl.to('.t8-phone-screen-8', .1, {display:'block'});
			tl.to('.t8-phone-screen-8', .3, {display:'none'});
			tl.to('.t8-phone-screen-9', .1, {display:'block'});
			tl.to('.t8-phone-screen-text', .5, {x:0});
			tl.to('.t8-phone-screen-arrow-right-overvlow img', .5, {x:0}, '=-.5');
			tl.to('.t8-phone-screen-arrow-right-overvlow span', .5, {x:0}, '=-.5');
			tl.to('.t8-phone-screen-arrow-left-overvlow img', .5, {x:0}, '=-.5');
			tl.to('.t8-phone-middle-block', 3, {x: 150}, "=.1");
			tl.to('.t8-phone-back-block', 3, {x: -50, scale: .7}, "=-3");
			tl.to('.t8-phone-back-blur', 3, {opacity: 1}, "=-3");
			tl.to('.t8-phone-back', 3, {opacity: 0}, "=-2.5");
			tl.to('.t8-phone-buttons-block', 3, {x: -220, y: 60}, "=-3.2");
			tl.to('.t8-phone-buttons', 3, {filter: "blur(8px)", scale: .9}, "=-2.8");
			tl.to('.t8-phone-middle-text', 3, {x: 10}, "=-3");
			tl.to('.t8-phone-middle-text', 15, {x: 10}, "=0");

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
			tl.to('.t8-phone-screen-4', .3, {display:'none'});
			tl.to('.t8-phone-screen-5', .1, {display:'block'});
			tl.to('.t8-phone-screen-5', .3, {display:'none'});
			tl.to('.t8-phone-screen-6', .1, {display:'block'});
			tl.to('.t8-phone-screen-6', .3, {display:'none'});
			tl.to('.t8-phone-screen-7', .1, {display:'block'});
			tl.to('.t8-phone-screen-7', .3, {display:'none'});
			tl.to('.t8-phone-screen-8', .1, {display:'block'});
			tl.to('.t8-phone-screen-8', .3, {display:'none'});
			tl.to('.t8-phone-screen-9', .1, {display:'block'});
			tl.to('.t8-phone-screen-text', .5, {x:0});
			tl.to('.t8-phone-screen-text-overflow', .5, {y: '-30px'});
			tl.to('.t8-phone-screen-arrow-right-overvlow img', .5, {x:0}, '=-.5');
			tl.to('.t8-phone-screen-arrow-right-overvlow span', .5, {x:0}, '=-.5');
			tl.to('.t8-phone-screen-arrow-left-overvlow img', .5, {x:0}, '=-.5');
			tl.to('.t8-glass .t8-phone-screen-arrow-right-overvlow', .5, {y:'-70px'}, '=-.5');
			tl.to('.t8-phone-screen-arrow-left-overvlow', .5, {y:'-68px'}, '=-.5');
			tl.to('.t8-phone-middle-block', 3, {x: 90}, "=.1");
			tl.to('.t8-phone-back-block', 3, {x: -20, y: -30, scale: .7}, "=-3");
			tl.to('.t8-phone-back-blur', 3, {opacity: 1}, "=-3");
			tl.to('.t8-phone-back', 3, {opacity: 0}, "=-2.5");
			tl.to('.t8-phone-buttons-block', 3, {x: -75, y: 75}, "=-3.2");
			tl.to('.t8-phone-buttons', 3, {filter: "blur(8px)", scale: .9}, "=-2.8");
			tl.to('.t8-phone-middle-text', 3, {x: 10}, "=-3");
			tl.to('.t8-phone-middle-text', 15, {x: 10}, "=0");

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
			tl.progress();
		}
});