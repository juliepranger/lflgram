
'use strict';

// Instantiates global instances / events
(function($) {

    var feed = new Instafeed({
        get: 'tagged',
        clientId: '64448854b9e84ee9b0986e5faf529c7a', // hide this
        tagName: 'leftfieldlabs',
        resolution: 'low_resolution',
    	template: '<a href="{{link}}"><img src="{{image}}" /></a>'
    });
    feed.run();

})(jQuery);