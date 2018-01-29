$(function(){

	$('.top').parallax("100%",0.2);
	$('.menu-bar-btn').click(function(){
		if($(".menu-mobile").hasClass("menu-mobile-active")){
			$('.menu-mobile').removeClass('menu-mobile-active');
		}else{
			$('.menu-mobile').addClass('menu-mobile-active');
		}
	});

	$('.menu-bar-btn-close').click(function(){
		if($(".menu-mobile").hasClass("menu-mobile-active")){
			$('.menu-mobile').removeClass('menu-mobile-active');
		}else{
			$('.menu-mobile').addClass('menu-mobile-active');
		}
	});
});