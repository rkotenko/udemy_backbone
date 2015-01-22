describe('TweetView', function() {
	var tweetView, tweet;
	
	beforeEach(function() {
		tweet = new Tweet();
		tweetView = new TweetView({model: tweet});
		tweetView.render();
	});
	
	it('tagName should be li', function() {
		expect(tweetView.tagName).toEqual('li');
	});
	
	it('className should be tweet', function() {
		expect(tweetView.className).toEqual('tweet');
	});
	
	it('should refresh when model state changes', function() {
		tweet.set('body', 'updated');
		expect(tweetView.$el).toContainText('updated');
	});
	
	describe('when clicking delete', function() {
		it('should display a confirmation box', function() {
			spyOn(window, 'confirm');
			tweetView.$el.find('#delete').click();
			expect(window.confirm).toHaveBeenCalled();
		});
		
		it('should destroy the model if user clicks delete', function() {
			spyOn(window, 'confirm').and.returnValue(true);
			spyOn(tweet, 'destroy');
			tweetView.$el.find('#delete').click();
			expect(tweet.destroy).toHaveBeenCalled();
		});
	});
});