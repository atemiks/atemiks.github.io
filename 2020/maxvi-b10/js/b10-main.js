$(document).ready(function() {
	//animation
    setTimeout(function(){
    	AOS.init({
    		anchorPlacement: 'top-bottom'
    	});
    }, 100);

	// parallax speakers scene 
    let b10SpeakersScene = $('#b10-speakers-parallax').get(0);
	let b10SpeakersParallaxInstance = new Parallax(b10SpeakersScene);

	console.log(b10SpeakersScene);
});