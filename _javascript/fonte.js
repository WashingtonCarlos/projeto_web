	@charset "UTF-8";



function click(){
		$(document).ready(function(){
			$('.img-responsive').on( "click", function() {
				$(this).toggleClass('maxSize')
			});
		});
	}
	