$(document).ready(function() {
	//animation
    setTimeout(function(){
    	AOS.init({
    		anchorPlacement: 'top-bottom'
    	});
    }, 100);

	// parallax design scene 
    let c9iDesignScene = $('#c9i-design-parallax').get(0);
	let c9iDesignParallaxInstance = new Parallax(c9iDesignScene);
});