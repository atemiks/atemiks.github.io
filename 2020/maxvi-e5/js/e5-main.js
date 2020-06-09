// animate phone
let	windowOffset = undefined, 
	phone = $('.js-e5-phone-figure'),
	dock = $('.js-e5-dock-figure'),
	phoneOffset = undefined,
	phoneStyleOffset = undefined,
	dockOffset = undefined,
	dockStyleOffset = undefined;

function initAnimatePhone() {
	phoneStyleOffset = parseInt(phone.css('top')),
	phoneOffset = phone.offset().top - phoneStyleOffset,
	dockStyleOffset = phoneStyleOffset,
	dockOffset = dock.offset().top - dockStyleOffset;
}

function phoneAnimation() {
	windowOffset = $(window).scrollTop();

	if(windowOffset >= phoneOffset && windowOffset <= dockOffset) {
		phone.addClass('is-fixed');
		phone.css('top', phoneStyleOffset);
	} else if (windowOffset >= dockOffset) {
		phone.removeClass('is-fixed');
		phone.css('top', dockOffset - phoneOffset + phoneStyleOffset);
	} else {
		phone.removeClass('is-fixed');
		phone.css('top', phoneStyleOffset);
	}
}

$(document).ready(function() {
	//animation
    setTimeout(function(){
    	AOS.init({
    		anchorPlacement: 'top-bottom'
    	});
    }, 100);

	// init phone animation
	initAnimatePhone();
	phoneAnimation();
});

$(window).on('resize', function() {
	initAnimatePhone();
	phoneAnimation();
});

$(window).on('scroll', function() {
	// animate phone on tablet and pc
	if($(window).width() >= 768) {
		phoneAnimation();
	}
});