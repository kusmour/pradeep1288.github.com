$(function(){
	
	var mag = $('#magazine');
	
	// initiazlie turn.js on the #magazine div
	mag.turn();

	// turn.js defines its own events. We are listening
	// for the turned event so we can center the magazine
	mag.bind('turned', function(e, page, pageObj) {
	
		if(page == 1 && $(this).data('done')){
			mag.addClass('centerStart').removeClass('centerEnd');
		}
		else if (page == 32 && $(this).data('done')){
			mag.addClass('centerEnd').removeClass('centerStart');
		}
		else {
			mag.removeClass('centerStart centerEnd');
		}
		
	});

	setTimeout(function(){
		// Leave some time for the plugin to
		// initialize, then show the magazine
		mag.fadeTo(500,1);
	},1000);


	$(window).bind('keydown', function(e){
		
		// listen for arrow keys
		
		if (e.keyCode == 37){
			mag.turn('previous');
		}
		else if (e.keyCode==39){
			mag.turn('next');
		}

	});

});
