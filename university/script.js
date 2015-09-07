$(document).ready( function() {

	// Scroll to top at reload
	$(this).scrollTop(0);

	$('.card').hover( 

		function(){
			mask= $(this).find(".mask");
			button = $(this).find('h5');

			$(mask).toggleClass('mask_hover');
			$(this).toggleClass('card_hover');
			$(button).toggleClass('h5_hover');
		},

		function(){
			$(mask).toggleClass('mask_hover');
			$(this).toggleClass('card_hover');
			$(button).toggleClass('h5_hover');
	});
});