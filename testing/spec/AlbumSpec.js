describe('Albums', function() {
	var albums;
	beforeEach(function() {
		album = new Album();
	});
	
	it('the url should be set to /api/songs', function() {
		expect(album.url).toEqual('/api/songs');
	});
	
	describe('getPopularSong', function() {
		it('should return undefined if the collection is empty', function() {
			expect(album.getPopularSong()).toBeUndefined();
		});
	
		it('should return song with highest number of plays if the collection is not empty', function() {
			var song1 = new Song({title: 'Test', numberOfPlays: 8}),
				song2 = new Song({title: 'Song 2', numberOfPlays: 2}),
				song3 = new Song({title: 'Song 3', numberOfPlays: 5});
			album.add([song1, song2, song3]);
			expect(album.getPopularSong()).toEqual(song1);
		});
	});
});