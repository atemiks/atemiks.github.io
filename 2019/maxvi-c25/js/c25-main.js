$(document).ready(function() {
	//animation
    setTimeout(function(){
    	AOS.init({
    		anchorPlacement: 'top-bottom'
    	});
    }, 100);


	// parallax display scene 
    var c25DisplayScene = $('#c25-display-parallax').get(0);
	var c25DisplayParallaxInstance = new Parallax(c25DisplayScene);

	// parallax ui scene 
	var c25UIScene = $('#c25-ui-parallax').get(0);
	var c25UIParallaxInstance = new Parallax(c25UIScene);

	// colors animation
	var tl = new TimelineMax({onUpdate:updatePercentage});
	const controller = new ScrollMagic.Controller();


	var width = $(document).width();

	$(window).resize(function(){
		width = $(document).width();
	});

	if (width > 991){
		tl.to('.c25-colors-image', 1, {x:0})
		tl.to('#firstPhoneColor', 1, {x:0}, "=-1");
		tl.to('#secondPhoneColor', 1, {x:100}, "=-1");
		tl.to('#thirdPhoneColor', 1, {x:200}, "=-1");
		tl.to('#fourthPhoneColor', 1, {x:300}, "=-1");
		tl.to('#fifthPhoneColor', 1, {x:400}, "=-1");
		tl.to('#firstPhoneColor', .1, {display:'none'}, "=0");
		tl.to('#firstPhoneColorRotate1', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate1', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate2', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate2', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate3', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate3', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate4', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate4', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate5', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate5', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate6', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate6', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate7', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate7', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate8', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate8', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate9', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate9', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate10', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate10', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate11', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate11', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate12', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate12', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate13', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate13', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate14', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate14', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate15', .1, {x:0, display:'block'}, "=0");
	} else if (width <= 991 && width > 768) {
		tl.to('.c25-colors-image', 1, {x:20})
		tl.to('#firstPhoneColor', 1, {x:0}, "=-1");
		tl.to('#secondPhoneColor', 1, {x:60}, "=-1");
		tl.to('#thirdPhoneColor', 1, {x:120}, "=-1");
		tl.to('#fourthPhoneColor', 1, {x:180}, "=-1");
		tl.to('#fifthPhoneColor', 1, {x:240}, "=-1");
		tl.to('#firstPhoneColor', .1, {display:'none'}, "=-1");
		tl.to('#firstPhoneColor', .1, {display:'none'}, "=0");
		tl.to('#firstPhoneColorRotate1', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate1', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate2', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate2', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate3', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate3', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate4', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate4', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate5', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate5', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate6', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate6', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate7', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate7', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate8', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate8', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate9', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate9', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate10', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate10', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate11', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate11', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate12', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate12', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate13', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate13', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate14', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate14', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate15', .1, {x:0, display:'block'}, "=0");
	} else if (width <= 768 && width > 576) {
		tl.to('.c25-colors-image', 1, {x:60})
		tl.to('#firstPhoneColor', 1, {x:0}, "=-1");
		tl.to('#secondPhoneColor', 1, {x:60}, "=-1");
		tl.to('#thirdPhoneColor', 1, {x:120}, "=-1");
		tl.to('#fourthPhoneColor', 1, {x:180}, "=-1");
		tl.to('#fifthPhoneColor', 1, {x:240}, "=-1");
		tl.to('#firstPhoneColor', .1, {display:'none'}, "=0");
		tl.to('#firstPhoneColorRotate1', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate1', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate2', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate2', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate3', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate3', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate4', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate4', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate5', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate5', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate6', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate6', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate7', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate7', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate8', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate8', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate9', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate9', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate10', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate10', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate11', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate11', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate12', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate12', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate13', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate13', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate14', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate14', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate15', .1, {x:0, display:'block'}, "=0");
	} else if (width <= 576) {
		tl.to('.c25-colors-image', 1, {x:20})
		tl.to('#firstPhoneColor', 1, {x:0}, "=-1");
		tl.to('#secondPhoneColor', 1, {x:30}, "=-1");
		tl.to('#thirdPhoneColor', 1, {x:60}, "=-1");
		tl.to('#fourthPhoneColor', 1, {x:90}, "=-1");
		tl.to('#fifthPhoneColor', 1, {x:120}, "=-1");
		tl.to('#firstPhoneColor', .1, {display:'none'}, "=0");
		tl.to('#firstPhoneColorRotate1', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate1', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate2', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate2', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate3', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate3', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate4', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate4', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate5', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate5', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate6', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate6', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate7', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate7', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate8', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate8', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate9', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate9', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate10', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate10', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate11', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate11', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate12', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate12', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate13', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate13', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate14', .1, {x:0, display:'block'}, "=0");
		tl.to('#firstPhoneColorRotate14', .1, {display:'none'}, "=.1");
		tl.to('#firstPhoneColorRotate15', .1, {x:0, display:'block'}, "=0");
	}

	const scene = new ScrollMagic.Scene({
		triggerElement: ".c25-colors",
		triggerHook: "onLeave",
		duration: '400%'
	})
		.setPin(".c25-colors")
		.setTween(tl)
		.addTo(controller);


	function updatePercentage() {
		tl.progress();
	}
});