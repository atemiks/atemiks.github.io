$(document).ready(function() {
	//animation
    setTimeout(function(){
    	AOS.init({
    		anchorPlacement: 'top-bottom'
    	});
    }, 100);

	// parallax drawing scene 
    let mgtDrawingScene = $('#mgt-drawing-parallax').get(0);
	let mgtDrawingParallaxInstance = new Parallax(mgtDrawingScene);


	// parallax lock scene 
    let mgtLockScene = $('#mgt-lock-parallax').get(0);
	let mgtLockParallaxInstance = new Parallax(mgtLockScene);

	// parallax eyesafe scene 
    let mgtEyeSafeScene = $('#mgt-eyesafe-parallax').get(0);
	let mgtEyeSafeParallaxInstance = new Parallax(mgtEyeSafeScene);
});