$(document).ready( function() {
	/*$('#about_btn').mouseenter(function() {
		$(this).toggleClass('links');
	

	});
*/
	// Scroll to top at reload
	$(this).scrollTop(0);


	// Scroll to ABOUT page
	$('#about_btn').click( function() {
		$('html, body').animate({
        	scrollTop: $("#about_page").offset().top
  		}, 0);

	});


	// Scroll to HOW IT WORKS page
	$('#hiw_btn').click( function() {
		$('html, body').animate({
        	scrollTop: $("#hiw_page").offset().top
  		}, 0);

	});

});