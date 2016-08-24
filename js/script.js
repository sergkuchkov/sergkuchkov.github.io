$('.slider-items').slick({
 
  dots: true
  
});

$('.enter').on('click', function(){
    $('.mobi-menu').addClass('active');
});

$('.mobi-menu i').on('click', function(){
    $('.mobi-menu').removeClass('active');
});

$('.tabs').tabs();

$('.slider2').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true
});