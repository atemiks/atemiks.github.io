$(document).ready(function() {
	//animation
    setTimeout(function(){
    	AOS.init({
    		anchorPlacement: 'top-bottom'
    	});
    }, 100);

	// parallax design scene 
    let k20DesignScene = $('#k20-design-parallax').get(0);
	let k20DesignParallaxInstance = new Parallax(k20DesignScene);


	// parallax camera scene 
    let k20CameraScene = $('#k20-camera-parallax').get(0);
	let k20CameraParallaxInstance = new Parallax(k20CameraScene);

	// parallax battery scene 
    let k20BatteryScene = $('#k20-battery-parallax').get(0);
	let k20BatteryParallaxInstance = new Parallax(k20BatteryScene);

	// parallax battery scene 
    let k20FlashlightScene = $('#k20-flashlight-parallax').get(0);
	let k20FlashlightParallaxInstance = new Parallax(k20FlashlightScene);
});