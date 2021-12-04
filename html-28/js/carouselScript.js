
/*Effect list

1	Slide
2	Fade


*/


//Set speed and delay in seconds
	var speed = 1.5;
	var delay = 3;
	var sliderSelector = "#slides";
	var effect = 2;
	 
	jQuery(document).ready(function() {
 			speed *= 1000;			
			delay *= 1000;
			var run = setInterval('rotate()', delay);   
			
			 
			//grab the width and calculate left value
			var item_width = jQuery(sliderSelector).outerWidth(); 
			var left_value = item_width * (-1);
			jQuery(sliderSelector+'>ul>li').hide();
			jQuery(sliderSelector+'>ul>li:first-child').show();
				 
					 
			//if user clicked on prev button
			jQuery('#prev').click(function() {
		 
				var nextChild;
				 if(jQuery(sliderSelector+'>ul>li:visible').is(':first-child')){
					nextChild = jQuery(sliderSelector+'>ul>li:last-child');
				 }else{
					nextChild = jQuery(sliderSelector+'>ul>li:visible').prev();
				 }
				
				switch(effect){
				
					case 1:
						jQuery(sliderSelector+'>ul>li:visible').hide('slide', {direction: 'right'}, speed);
						nextChild.show('slide', {direction: 'left'}, speed);
						break;
						
					case 2:
						jQuery(sliderSelector+'>ul>li:visible').fadeOut(speed);
						nextChild.fadeIn(speed);
						break;
				
				}
		 
				//cancel the link behavior            
				return false;
					 
			});
		 
		  
			//if user clicked on next button
			jQuery('#next').click(function() {
				var nextChild;
				 if(jQuery(sliderSelector+'>ul>li:visible').is(':last-child')){
					nextChild = jQuery(sliderSelector+'>ul>li:first-child');
				 }else{
					nextChild = jQuery(sliderSelector+'>ul>li:visible').next();
				 }
				switch(effect){
				
					case 1:
						jQuery(sliderSelector+'>ul>li:visible').hide('slide', {direction: 'left'}, speed);
						nextChild.show('slide', {direction: 'right'}, speed);
						break;
						
					case 2:
						jQuery(sliderSelector+'>ul>li:visible').fadeOut(speed);
						nextChild.fadeIn(speed);
						break;
				
				}
				return false;
				 
			});        
			 
			//if mouse hover, pause the auto rotation, otherwise rotate it
			jQuery(sliderSelector).hover(
				function() {
					clearInterval(run);
				}, 
				function() {
					run = setInterval('rotate()', delay);   
				}
			); 
				 
		});
		 
		//a simple function to click next link
		//a timer will  this function, and the rotation will begin :)  
		function rotate() {
			jQuery('#next').click();
		}