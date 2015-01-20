define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	var SongView = Backbone.View.extend({
		initialize: function () {
			this.model.on("change", this.render, this);
		},
		render: function () {
			this.$el.html(this.model.get('title') + ' - Listeners: ' + this.model.get("listeners"));

			return this;
		}
	});
	
	return SongView;
});