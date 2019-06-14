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
	$('.top-carousel').owlCarousel({items:1, 
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
				stagePadding:500,

			},
		}});
});
$(function(){
	$('.portfolio-slider').owlCarousel({items:1, 
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
				stagePadding:0,
			},
			1200:
			{
				stagePadding:200,
			},
			1600:
			{
				stagePadding:360,

			},
		}});
});

$('.menu__btn').on('click', function(e)
{
	e.preventDefault;
	$(this).toggleClass('menu__btn_active');
	$('.menu-nav').toggleClass('menu-nav_active');
	$('.head').toggleClass('head_active');
});

window.onresize = function(event) {
if(window.matchMedia('(min-width: 1368px)').matches){
		$('.menu__btn').removeClass('menu__btn_active');
		$('.menu-nav').removeClass('menu-nav_active');
		$('.head').removeClass('head_active');
	};
};