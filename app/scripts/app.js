
'use strict';

// Instantiates global instances / events
(function($) {

	//private global
	var clientId_ = '64448854b9e84ee9b0986e5faf529c7a';
	var loadMore = document.getElementById('load-more');

    var feed = new Instafeed({
        get: 'tagged',
        clientId: clientId_, // hide this var better
        tagName: 'leftfieldlabs',
        resolution: 'low_resolution',
        limit: 200,
    	template: '<div class="image-container"><a href="{{link}}" target="_blank"><img src="{{image}}" />' +
    	'<p class="image-caption">{{caption}}</p>' +
    	'</a></div>'
    });

    feed.run();

    loadMore.addEventListener('click', function() {
    	var result = feed.next();
    	feed.next();

    	if (result == false) {
    		loadMore.classList.add('hidden');
    	}
    });



})(jQuery);