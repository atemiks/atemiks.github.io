$(document).ready(function() {
	//animation
    setTimeout(function(){
    	AOS.init({
    		anchorPlacement: 'top-bottom'
    	});
    }, 100);

	// parallax scenes
    let p2DesignScene = $('#p2-design-parallax').get(0);
	let p2DesignParallaxInstance = new Parallax(p2DesignScene);
});