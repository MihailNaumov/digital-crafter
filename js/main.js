/*Плавный скролл (Переделать! 
Нужен вариант с добавлением кнопок через один общий класс)*/
function slowScroll (id) {
	var offset = 0;
	$('html, body').animate ({
		scrollTop: $(id).offset ().top - offset
	}, 1000);
	return false;
}
/*Карусель*/
$(function(){
	$('.top-carousel').owlCarousel({
		loop:true,
		autoplay:8000,
		autoplayHoverPause:true,
		smartSpeed:1000,
		nav:true,
		navText: ["",""],
		pagination : true,
		items:1, 
		responsiveClass:true,
		responsive:{
			0:{
				stagePadding:0,
			},
			600:{
				stagePadding:0,

			},
			800:
			{
				stagePadding:0,
			},
			1000:
			{
				stagePadding:200,
			},
			1200:
			{
				stagePadding:300,
			},
			1600:
			{
				stagePadding:300,

			},
		}});
});
$(function(){
	$('.portfolio-slider').owlCarousel({
		autoplay:true,
		autoplay:8000,
		smartSpeed:1000,
		autoplayHoverPause:true,
		loop:true,
		pagination : true,
		nav:true,
		navText:["",""],
		items:1, 
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				stagePadding:0,
			},
			600:{
				stagePadding:0,

			},
			800:
			{
				items:1,
				stagePadding:200,
			},
			960:
			{
				items:1,
				stagePadding:0,
			},
			1300:
			{
				items:1,
				stagePadding:150,
			},
			1600:
			{
				items:1,
				stagePadding:360,

			},
		}});
	
});
        
/*Show mobile menu*/
$('.menu__btn').on('click', function(e)
{
	e.preventDefault;
	$(this).toggleClass('menu__btn_active');
	$('.menu-nav').toggleClass('menu-nav_active');
	$('.head').toggleClass('head_active');
});

/*Close mobile menu when screen width less then 1368*/
window.onresize = function(event) {
	if(window.matchMedia('(min-width: 1368px)').matches){
		$('.menu__btn').removeClass('menu__btn_active');
		$('.menu-nav').removeClass('menu-nav_active');
		$('.head').removeClass('head_active');
	};
};