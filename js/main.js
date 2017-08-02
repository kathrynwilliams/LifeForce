$(document).ready(function(){
  $(function(){
    $(".homescreen-all-text").css("display", "none");
    $(".homescreen-all-text").fadeIn(3000);
  });
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
        if(section===0){
          $(".homescreen-all-text").fadeIn(2000);
        } else if(section!=0){
          $(".homescreen-all-text").css("display", "none");
        };
      },
  		after:function(index,sections) {
        if((index+1) == sections.length) {
          $(".arrow-down").hide(); //makes arrow disappear on last section
        }
      }
    });
    $(".arrow-down").click(function(){
      	$.scrollify.next();
    });
  });

  //flickity carousel

  $('.carousel').flickity({
    cellAlign: 'center',
    contain: true,
    cellSelector: '.gallery-image'
  });

});
