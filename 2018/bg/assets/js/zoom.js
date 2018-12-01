let popUp = document.querySelector('.big-image');
popUp.onclick = function() { popUp.classList.add('fade'); }
let grad = document.querySelectorAll('.gradient');
for (let elem of grad) {
	elem.addEventListener('click', function(){
	  createDiv(this.nextElementSibling);
	  showElem();
	});
}

function createDiv (img) {
	let imgSrc = img.getAttribute('src'),
	div = document.createElement('div'),
	bigImg = document.createElement('img');
	div.classList.add('big-image_block');
	bigImg.setAttribute('src', imgSrc);
	div.appendChild(bigImg);
	popUp.appendChild(div);
}

function showElem() {
	popUp.classList.remove('fade');
}