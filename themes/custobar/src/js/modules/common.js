
$(document).ready( function() {

	$(".ninja-btn").click( function() {
	  $(this).toggleClass("active");
	  $('.menu').slideToggle(400);
	});

  //$('.popup').magnificPopup();
  	//Slider

  	$('.slider').slick({
  		dots: true,
      autoplay: true,
      autoplaySpeed: 8000,
      mobileFirst: true,
      speed: 500
  	});

});	
