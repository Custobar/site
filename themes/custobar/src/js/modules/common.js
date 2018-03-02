
$(document).ready( function() {

  $('.video-bg').click(function(e) {
    e.preventDefault();
    $('#video').html('<iframe src="https://player.vimeo.com/video/149581829?title=0&byline=0&portrait=0;autoplay=true"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>');
    $(this).css('display', 'none');
  });

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
