$(document).ready(function() {
	//animation
	// animation
    setTimeout(function(){
    	AOS.init({
    		anchorPlacement: 'top-bottom'
    	});
    }, 100);

	// popup gallery
	$('[data-fancybox]').fancybox({
		buttons: [
			'close'
		]
	})
})