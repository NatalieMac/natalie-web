( function( $ ) {

	function centerPosition() {
		var container = $('.container.vertical-center');
		var top = $('.container.vertical-center').offset().top;
	    if (top < 0 ){
	        $(container).addClass('tall');
	    }
	    if (document.body.scrollHeight === document.body.clientHeight) {
	        $(container).removeClass('tall');
	    }
	}

	$( window )
	.load( centerPosition )
	.resize( centerPosition );

})( jQuery );