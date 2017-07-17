$(document).ready(function(){

  $(function () {
    $('.hidden').css('display', 'none');
  });

  //Read More clicks


  $('.packages-button').click( function(){
    $('.packages-section').fadeOut("slow", function(){
      $('.learn-more').fadeIn("slow");
    });
  });

  $('.see-less-button').click( function(){
    $('.learn-more').fadeOut("slow", function(){
      $('.packages-section').fadeIn("slow");
    });
  });

  $('.carousel').flickity({
    cellAlign: 'center',
    contain: true,
    cellSelector: '.gallery-image',
  });

  $('.facilities-button').click( function(){
    $('.photo-gallery-container').show (function(){
      $('.facilities-button').fadeOut();
    });
  });

  $('.x-button2').click( function(){
    $('.photo-gallery-container').hide(function(){
      $('.photo-gallery-container').fadeOut();
      $('.facilities-button').show();
    });
  });

});
