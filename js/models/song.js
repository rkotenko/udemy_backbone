// dependencies are in order
define(['underscore', 'backbone'], function(_, Backbone) {
	var Song = Backbone.Model.extend({
		defaults: {
			listeners: 0
		}
	});
	
	return Song;
});

