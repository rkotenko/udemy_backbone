var Album = Backbone.Collection.extend({
	model: Song,
	url: '/api/songs',
	getPopularSong: function() {
		if(this.length == 0)
			return undefined;
		
		// sortBy is an underscore method and sorts in ascending order
		var sortedSongs = this.sortBy(function(song) {
			return song.get('numberOfPlays');
		});
		
		return sortedSongs[sortedSongs.length - 1]
	}
});