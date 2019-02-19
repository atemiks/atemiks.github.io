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
	'images/section-display/9.png'
];

let element = document.querySelector('.display-promo-img');

let Visible = (target) => {
    let blockHeight = $(element).height();
    let frame = blockHeight/9;
	let startAnim = 2.8; // скорость старта анимации

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
      
    if (targetPosition.top <= windowPosition.bottom - blockHeight /startAnim) {
        element.src = images[1];
    }
    if (targetPosition.top + frame <= windowPosition.bottom - blockHeight /startAnim) {
        element.src = images[2];
    }
    if (targetPosition.top + frame*2 <= windowPosition.bottom - blockHeight /startAnim) {
        element.src = images[3];
    }
    if (targetPosition.top + frame*3 <= windowPosition.bottom - blockHeight /startAnim) {
        element.src = images[4];
    }
    if (targetPosition.top + frame*4 <= windowPosition.bottom - blockHeight /startAnim) {
        element.src = images[5];
    }
    if (targetPosition.top + frame*5 <= windowPosition.bottom - blockHeight /startAnim) {
        element.src = images[6];
    }
    if (targetPosition.top + frame*6 <= windowPosition.bottom - blockHeight /startAnim) {
        element.src = images[7];
    }
    if (targetPosition.top + frame*7 <= windowPosition.bottom - blockHeight /startAnim) {
        element.src = images[8];
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

