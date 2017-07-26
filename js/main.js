$(document).ready(function(){

  /* $(function () {
    $('.hidden').css('display', 'none');
  });
  */

  //waypoints


  //Scrollify
  $(function() {
    $.scrollify({
  		section : ".scroll",
  		sectionName : "Home",
  		easing: "easeOutExpo",
  		scrollSpeed: 700,
  		offset : 0,
  		scrollbars: true,
  		setHeights: true,
  		overflowScroll: false,
  		updateHash: true,
  		touchScroll:true,
      before:function(section){
        console.log(section);
        console.log(section,section!=3);
        if(section===3){
          $(".package1").fadeIn(2000);
          $(".package2").fadeIn(3000);
          $(".package3").fadeIn(4000);
        } else if(section!=3){
          $(".package1").css("display", "none");
          $(".package2").css("display", "none");
          $(".package3").css("display", "none");
        };
      },
  		after:function(index,sections) {
        if((index+1) == sections.length) {
          $(".arrow-down").hide();
        }
      }
    });
    $(".arrow-down").click(function(){
      	$.scrollify.next();
    });
  });



  //Read More clicks

  /*$('.packages-button').click( function(){
    $('.packages-section').hide();
    $('.learn-more').show();
    $('.package1').show();
    $('.package2').fadeIn(1000);
    $('.package3').fadeIn(2000);
     $('.see-less-container').fadeIn(3000);
  }); */

  //See Less clicks

  /* $('.see-less-button').click( function(){
    $('.learn-more').hide();
    $('.packages-section').show();
  }); */

  //flickity carousel

  $('.carousel').flickity({
    cellAlign: 'center',
    contain: true,
    cellSelector: '.gallery-image'
  });

  /* $('.facilities-button').click( function(){
    $('.photo-gallery-container').show (function(){
      $('.facilities-button').fadeOut();
    });
  });

  $('.x-button2').click( function(){
    $('.photo-gallery-container').hide(function(){
      $('.photo-gallery-container').fadeOut();
      $('.facilities-button').show();
    });
  }); */

});
