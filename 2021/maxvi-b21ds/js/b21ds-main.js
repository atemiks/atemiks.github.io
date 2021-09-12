$(document).ready(function() {
	//animation
    setTimeout(function(){
    	AOS.init({
    		anchorPlacement: 'top-bottom'
    	});
    }, 100);

	// parallax sos scene 
    let b21dsDesignScene = $('#b21ds-sos-parallax').get(0);
	let b21dsDesignParallaxInstance = new Parallax(b21dsDesignScene);
});