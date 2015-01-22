describe('Songs', function() {
	var song;
	beforeEach(function() {
		song = new Song();
	});
	
	it('urlRoot should be set to /api/songs', function() {
		expect(song.urlRoot).toEqual('/api/songs');
	});
	
	it('numberOfPlays should default to 0', function() {
		expect(song.get('numberOfPlays')).toEqual(0);
	});
	
	it('title is required', function() {
		expect(song.isValid()).toBeFalsy();
		song.set('title', 'You lost that loving feeling');
		expect(song.isValid()).toBeTruthy();
	});
	
	it('when play is called, numberOfPlays should increase by 1', function() {
		song.play();
		expect(song.get('numberOfPlays')).toEqual(1);
	});
});