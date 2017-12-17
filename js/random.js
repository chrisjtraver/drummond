(function($) {
  "use strict"; // Start of use strict

  var randomNumber = Math.floor(Math.random() * 100);
  
  if (randomNumber > 20) {
  	$('.scary').css('display', 'none');
  } else {
  	$('.not-scary').css('display', 'none');
  }

})(jQuery); // End of use strict