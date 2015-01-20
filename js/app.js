define(['underscore', 'backbone', 'models/song', 'views/SongView'], function(_, Backbone, Song, SongView) {
	var initialize = function() {
		var song = new Song({title: "Blue is Green"});

		var songView = new SongView({el: '#songs', model: song});
		songView.render();
	};
	
	// expose the functions as needed
	return {
		initialize: initialize
	};
	
});
