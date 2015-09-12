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

			$(this).click( 

		function(){
			mask= $(this).find(".mask");
			button1 = $(this).find('h5');
			$(button).toggleClass('h5_hover');
			$(button).toggleClass('h5_click');
			 setTimeout(function() {
			$(button).toggleClass('h5_click');
       		 
       		 $(button).toggleClass('h5_hover');
   			 }, 1000);
			//$(button).delay("slow").toggleClass('h5_hover');

			//$(button).delay(1000).toggleClass('h5_click');
			//$(button1).toggleClass('h5_click').delay(5000).toggleClass('h5_click');
			//$(button1).addClass('h5_click').delay(5000).removeClass('h5_click');
			
		});

			
		},

		function(){
			$(mask).toggleClass('mask_hover');
			$(this).toggleClass('card_hover');
			$(button).toggleClass('h5_hover');
	});

	/*$('.card').click( 

		function(){
			mask= $(this).find(".mask");
			button1 = $(this).find('h5');
			$(button).toggleClass('h5_hover');
			$(button).toggleClass('h5_click');
			//$(button).delay("slow").toggleClass('h5_hover');

			//$(button).delay(1000).toggleClass('h5_click');
			//$(button1).toggleClass('h5_click').delay(5000).toggleClass('h5_click');
			//$(button1).addClass('h5_click').delay(5000).removeClass('h5_click');
			
		});*/

	

});