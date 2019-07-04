$(document).ready(function(){
	let a = $('.banner div:first-child .item:nth-child(2) form h4');
	a.css('width','305px');
	$('.banner div:first-child .item:nth-child(2) form p').css('top','110px');
	$('.banner div:first-child .item:nth-child(4) form p').css('top','110px');

	var owl = $('.owl-carousel');
              owl.owlCarousel({
                items: 1,
                loop: true,
                margin: 0,
                autoplay: true,
                autoplayTimeout: 7000,
                autoplayHoverPause: true
              });
});