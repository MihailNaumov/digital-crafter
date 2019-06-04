/*Плавный скролл (Переделать! 
Нужен вариант с добавлением кнопок через один общий класс)*/
function slowScroll (id) {
    var offset = 0;
    $('html, body').animate ({
      scrollTop: $(id).offset ().top - offset
    }, 1000);
    return false;
  }
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({items:1, 
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