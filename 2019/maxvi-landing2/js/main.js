$( document ).ready(function() {
	// animation
    setTimeout(function(){
    	AOS.init();
    }, 100);

	// animate first img on ready
	$(front).addClass('animate');
	$(back).addClass('animate');

	// gallery slider
	$('.slider-gallery-wrapper').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		draggable: false,
		swipe: false,
		swipeToSlide: false,
		touchMove: false,
		infinite: false
	});

    $('.slider-gallery').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false
	});

	// colors tabs
	$('a.color-card').on('click', function(e) {
		e.preventDefault();
	});
});

//first phone anim

const front = document.getElementById('front-img');
const back = document.getElementById('back-img');

let frontTranslate = 85;
let backTranslate = 0;

let lastScrollTop = 0;

$(window).scroll(function(event){
	let st = $(this).scrollTop();
	if (st > lastScrollTop){
		if (frontTranslate <= 150) {
			frontTranslate++;
			backTranslate--;
			front.style.transform = 'translateY(' + frontTranslate + 'px)';
			back.style.transform = 'translateY(' + backTranslate + 'px)';
		}
	} else {
		if (frontTranslate >= 85) {
			frontTranslate--;
			backTranslate++;
			front.style.transform = 'translateY(' + frontTranslate + 'px)';
			back.style.transform = 'translateY(' + backTranslate + 'px)';	
		}
	}
	lastScrollTop = st;
});

//second phone anim

let images = [
	'images/section-display/1.png',
	'images/section-display/2.png',
	'images/section-display/3.png',
	'images/section-display/4.png',
	'images/section-display/5.png',
	'images/section-display/6.png',
	'images/section-display/7.png',
	'images/section-display/8.png',
	'images/section-display/9.png',
	'images/section-display/10.png',
	'images/section-display/11.png',
	'images/section-display/12.png',
	'images/section-display/13.png',
	'images/section-display/14.png',
	'images/section-display/15.png',
	'images/section-display/16.png',
	'images/section-display/17.png',
	'images/section-display/18.png',
	'images/section-display/19.png',
	'images/section-display/20.png',
	'images/section-display/21.png',
	'images/section-display/22.png',
	'images/section-display/23.png',
	'images/section-display/24.png',
	'images/section-display/25.png'
];

let element = document.querySelector('.display-promo-img');

let Visible = (target) => {
    let blockHeight = $(element).height() * .75;
    let frame = blockHeight/30;
    let startAnim = 0; // speed animation
    if ( $(window).width() < 767 ) {
    	startAnim = 1.2; // speed animation for mobile
    } else {
    	startAnim = 2.4; // speed animation for desktop
    }

    let targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
      },

      windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight
	  };
	  
	for (let i = 0; i < images.length; i++) {
		if (targetPosition.top + frame*i <= windowPosition.bottom - blockHeight /startAnim) {
			element.src = images[i];
		}
	}
};

Visible(element);

function loadImage(path) {
	return new Promise((resolve, reject) => {
		let image = new Image();
		image.src = path;

		image.onload = () => resolve(image);
		image.onerror = () => reject(path);
	});
}

Promise.all(images.map(loadImage)).then(
	images => {
		window.addEventListener('scroll', function() {
            Visible(element);
        });
	}
);

