var ArtistsView = Backbone.View.extend({
	render: function () {
		this.$el.html('Artists view!');
		
		return this;
	}
});

var AlbumsView = Backbone.View.extend({
	render: function () {
		this.$el.html('Albums view!');

		return this;
	}
});

var GenresView = Backbone.View.extend({
	render: function () {
		this.$el.html('Genres view!');

		return this;
	}
});

var AppRouter = Backbone.Router.extend({
	routes: {
		"albums": 'viewAlbums',
		"albums/:albumId": 'viewAlbumById',
		"artists": 'viewArtists',
		"genres": 'viewGenres',
		"*other": "defaultRoute"
	},
	
	viewAlbumById: function (albumId) {
		
	},
	
	viewAlbums: function () {
		var view = new AlbumsView({el: '#container'});
		view.render();
	},

	viewArtists: function () {
		var view = new ArtistsView({el: '#container'});
		view.render();
	},

	viewGenres: function () {
		var view = new GenresView({el: '#container'});
		view.render();
	},
	
	defaultRoutes: function () {
		
	}
});

var router = new AppRouter();
Backbone.history.start();

var NavView = Backbone.View.extend({
	events: {
		'click': "onClick"
	},
	
	onClick: function (e) {
		var $li = $(e.target);
		router.navigate($li.attr("data-url"), {trigger: true});
	}
});

var navView = new NavView({el: "#nav"});