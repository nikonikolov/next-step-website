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


	$('.card').click( 

		function(){
			$(mask).toggleClass('mask_hover');
			$(button).toggleClass('h5_hover');
			$(button).toggleClass('h5_click');
			
			setTimeout( function() {
				$(button).toggleClass('h5_click');
       		 	$(button).toggleClass('h5_hover');
				$(mask).toggleClass('mask_hover');
   			 }, 150);		
	});

});