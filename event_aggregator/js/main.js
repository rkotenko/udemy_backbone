
var Venue = Backbone.Model.extend();

var Venues = Backbone.Collection.extend({
	model: Venue
});

var VenueView = Backbone.View.extend({
	tagName: "li",

	events: {
		"click": "onClick"
	},

	onClick: function(){
		bus.trigger('venueSelected', this.model);
	},

	render: function(){
		this.$el.html(this.model.get("name"));

		return this;
	}
});

var VenuesView = Backbone.View.extend({
	tagName: "ul",

	id: "venues",
	render: function(){
		var self = this;

		this.model.each(function(venue){
			var view = new VenueView({ model: venue}); 
			self.$el.append(view.render().$el);
		});

		return this;
	}
});

var MapView = Backbone.View.extend({
	el: "#map-container",
	initialize: function () {
		this.listenTo(bus, 'venueSelected', this.showVenue);	
	},
	showVenue: function (venue) {
		this.model.add(venue);
		this.render();	
	},
	render: function(){
		var places = '';
		this.model.each(function (venue) {
			places += venue.get('name') + '&nbsp;'
		});
		
		if(places.length != 0)
			this.$("#venue-name").html(places);

		return this;
	}
});

var bus = _.extend({}, Backbone.Events);

var venues = new Venues([
	new Venue({ name: "30 Mill Espresso" }),
	new Venue({ name: "Platform Espresso" }),
	new Venue({ name: "Mr Foxx" })
]);

var venuesView = new VenuesView({ model: venues});
$("#venues-container").html(venuesView.render().$el);

var mapView = new MapView({model: new Venues()});
mapView.render();





