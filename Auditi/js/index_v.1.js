let body = document.getElementsByTagName('body');
let banner = document.getElementsByClassName('banner');
let ul = banner[0].getElementsByTagName('ul');
let li = ul[0].getElementsByTagName('li');
let current = 0;
let slideInterval = setInterval(nextSlide, 2000);

function nextSlide(){
	li[current].style.background = '';
	current = (current + 1)%li.length;
	li[current].style.background = 'green';
}
