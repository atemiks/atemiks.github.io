$(document).ready(function() {
	//animation
    setTimeout(function(){
    	AOS.init({
    		anchorPlacement: 'top-bottom'
    	});
    }, 100);

	// parallax scenes
    let c3nRestyleScene = $('#c3n-restyle-parallax').get(0);
	let c3nRestyleParallaxInstance = new Parallax(c3nRestyleScene);

	let c3nDeisgnScene = $('#c3n-design-parallax').get(0);
	let c3nDeisgnParallaxInstance = new Parallax(c3nDeisgnScene);
});