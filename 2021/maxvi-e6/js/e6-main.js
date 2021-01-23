$(document).ready(function() {
	//animation
    setTimeout(function(){
    	AOS.init({
    		anchorPlacement: 'top-bottom'
    	});
    }, 100);

	// parallax emergency scene 
    let e6EmergencyScene = $('#e6-emergency-parallax').get(0);
	let e6EmergencyParallaxInstance = new Parallax(e6EmergencyScene);
});