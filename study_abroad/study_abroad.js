$(document).ready( function() {

	// Scroll to top at reload
	$(this).scrollTop(0);
	$(".card_content").hide();

	$('.card_display').hover( 

		function(){
			mask = $(this).find(".mask");
			button = $(this).find('h5');
			cardBackground =  $(this).parents(".card").siblings(".card_background");


			$(mask).toggleClass('mask_hover');
			$(this).toggleClass('card_display_hover');
			$(button).toggleClass('h5_hover');
		},

		function(){
			$(mask).toggleClass('mask_hover');
			$(this).toggleClass('card_display_hover');
			$(button).toggleClass('h5_hover');
	});

	$('.card_display').click( 

		function(){
			$(mask).toggleClass('mask_hover');
			$(button).toggleClass('h5_hover');
			$(button).toggleClass('h5_click');
			
			setTimeout( function() {
				$(button).toggleClass('h5_click');
       		 	$(button).toggleClass('h5_hover');
				$(mask).toggleClass('mask_hover');
   			 }, 150);		
		},

		function(){
			$(cardBackground).toggleClass('card_background_clicked');
			
			$(this).next(".card_content").slideToggle(200, function(){
				if( $(this).is(":visible")){
					$(button).text("READ LESS");
				}
				else{
					$(button).text("READ MORE");
					//$(card_background).toggleClass("card_background_clicked");
				}
			});

		}


	);	

});