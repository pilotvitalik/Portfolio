$(document).ready(function(){
	let a = $('.banner div:first-child .item:nth-child(2) form h4');
	a.css('width','305px');
	$('.banner div:first-child .item:nth-child(2) form p').css('top','110px');
	$('.banner div:first-child .item:nth-child(4) form p').css('top','110px');
    $('.categories li:nth-child(4) div h5').css('width','163px');
    $('.categories li:nth-child(4) div button').css('margin','120px 0 0 -163px');
    $('.categories li:nth-child(2) div img').css('margin','26.5px 0 0 40px');
    $('.categories li:nth-child(3) div img').css('margin','26.5px 0 0 60px');
    
	var owl = $('.owl-carousel');
              owl.owlCarousel({
                items: 1,
                loop: true,
                margin: 0,
                autoplay: true,
                autoplayTimeout: 7000,
                autoplayHoverPause: true
              });

  $("#flexiselDemo3").flexisel({
        visibleItems: 3,
        itemsToScroll: 1,         
        autoPlay: {
            enable: true,
            interval: 8000,
            pauseOnHover: true
        }        
    });
});