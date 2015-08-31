$(document).ready( function() {

	// Scroll to top at reload
	$(this).scrollTop(0);

	$('.card').hover( 

		/*function(){
			$(this).find('div.card_img').toggleClass('card_img_hover');
			$(this).toggleClass('card_hover');
		},

		function(){
			$(this).find('div.card_img').toggleClass('card_img_hover');
			$(this).toggleClass('card_hover');
		}
			*/
		
		function(){
			read_img_url = $(this).find('.card_img').css("background-image");
			val_img_url = read_img_url.replace(/["']/g, "");

			$(this).find('.card_img').css("background", "linear-gradient(rgba(255,255,255, 0.3),rgba(255,255,255, 0.3)), " + val_img_url);
			$(this).toggleClass('card_hover');
		},

		function(){
			$(this).find('.card_img').css("background", "linear-gradient(rgba(255,255,255, 0.0),rgba(255,255,255, 0.0)), " + val_img_url);
			$(this).toggleClass('card_hover');
	});


});