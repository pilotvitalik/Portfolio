$(".fotoTeam div:last a").click(function(){
	$(this).each(function(index,element){
		let b = ($(this).attr("class"));
			if(b!="main"){
				$(this).children("img").appendTo($(".about_team div:first"));
				$(".fotoTeam div:first p:first").after($(this).children("p"));
				$(this).append($(".about_team div:first img:first"));
				$(this).children("img").before($(".fotoTeam div:first p:first"));
			};
	});
});
$(".content form button").click(function(){
	$("html,body").scrollTop($("#contact").offset().top);
})
