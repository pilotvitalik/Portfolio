let body=document.querySelector("body");
let img = [	'img/categories_breeches_banner.png',
			'img/product_woman_bag.png',
			'img/product_white_tees.png',
			'img/Banner_Levis.png',
			'img/product_tees.png'
			];
let name = ['bRANDED CARGOS',
			'EMS Women  bAG',
			'light tees',
			'Cowhide Standard Crew',
			'bRANDED tEES'];
let parag = ['Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Sodales ut eu sem integer vitae justo eget magna fermentum. Justo laoreet sit amet cursus sit ame',
			 'Tristique risus nec feugiat in fermentum posuere urna. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Nulla aliquet porttitor lacus luctus accumsan. ',
			 'Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Aliquam sem fringilla ut morbi tincidunt augue interdum. Sociis natoque penatibus et magnis',
			 "White coloured, short-sleeved, printed T-shirt for men by Levi's. This crew-neck T-shirt is made of organic cotton and comes in a regular fit.",
			 'Ac felis donec et odio pellentesque diam volutpat commodo sed. Dictumst quisque sagittis purus sit amet volutpat. Cursus metus aliquam eleifend mi in nulla posuere. '];


function imageRotator(i) {
  $('.banner div:first-child img:first-child').attr("src",img[i])
  $('.common .banner div:first-child form h4').text(name[i])
  $('.common .banner div:first-child form p').text(parag[i])

  i++;
  if (i == 1 || 2 || 4){$('.banner div:first-child img:nth-child(2)').css('display','block')
  			 	$('.banner div:first-child form h4').css('height','97px')
  				$('.banner div:first-child form h4').css('margin','15px 97px 26px 101px')
  				$('.banner div:first-child form p').css('margin','0 0 29px 101px')
};
  if (i == 3){
          $('.banner div:first-child img:nth-child(2)').css('display','none')
          $('.banner div:first-child form h4').css('height','47px')
  			  $('.banner div:first-child form h4').css('margin','15px 97px 0 101px')
  			  $('.banner div:first-child form p').css('margin','auto 0 auto 101px')
  			  $('.banner div:first-child form button').css('margin','0 0 45px 104px')
          $('.banner ul li:nth-child(3)').css('background','#79d8cc')
}else{
  $('.banner ul li:nth-child(3)').css('background','#ffffff')
};
  if (i == 5){
          $('.banner div:first-child img:nth-child(2)').css('display','none')
          $('.banner div:first-child form h4').css('height','47px');
  			  $('.banner div:first-child form h4').css('margin','15px 97px 0px 101px');
  			  $('.banner div:first-child form p').css('margin','auto 0 auto 101px');
  			  $('.banner div:first-child form button').css('margin','0 0 45px 104px');
          $('.banner ul li:last').css('background','#79d8cc');
  			  i = 0;
};
  if (i == 1){
          $('.banner ul li:first').css('background','#79d8cc');
          $('.banner ul li:last').css('background','#ffffff')
          $('.banner div:first-child img:nth-child(2)').css('display','none')
  }else{
          $('.banner ul li:first').css('background','#ffffff')
  }
    if (i == 2){
          $('.banner ul li:nth-child(2)').css('background','#79d8cc')
          $('.banner div:first-child img:nth-child(2)').css('display','none')
  }else{
          $('.banner ul li:nth-child(2)').css('background','#ffffff')
  }
    if (i == 4){
          $('.banner ul li:nth-child(4)').css('background','#79d8cc')
  }else{
          $('.banner ul li:nth-child(4)').css('background','#ffffff')
  }

  setTimeout("imageRotator(" + i + ")", 3000);
}

  


body.onload=imageRotator(0);