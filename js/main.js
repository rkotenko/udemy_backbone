var Vehicle = Backbone.Model.extend();

var Vehicles = Backbone.Collection.extend({
	model: Vehicle
});

var VehicleView = Backbone.View.extend({
	template: _.template($('#vehicleTemplate').html()),
	events: {
		'click.delete': 'delete'
	},
	delete: function() {
		// destroy the model and then remove the view
		this.model.destroy();
		this.remove();
		console.log('removed a view');
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON())); // creates and inserts html using the template and a json version of the model data
		return this;
	}
});

var VehiclesView = Backbone.View.extend({
	el: '#vehicles', // render this view at this html element,
	initialize: function() {
		this.listenTo(this.model, 'add', this.addOne);
	},
	// no corresponding button on page.  I created this just to play a bit with events.
	addOne: function(vehicle) {
		var vehicleView = new VehicleView({model: vehicle});
		this.$el.append(vehicleView.render().$el);
	},
	render: function() {
		var self = this; // set to ensure that inside of the .each, append is referring to the VehiclesView, not the vehicle
		this.model.each(function(vehicle) {
			var vehicleView = new VehicleView({model: vehicle}); // model contains the data for the view
			self.$el.append(vehicleView.render().$el);
		});
	}
});

var vehicles = new Vehicles([
	new Vehicle({regNum: 'abc123', color: 'blue'}),
	new Vehicle({regNum: 'xyz123', color: 'red'})
]);

var vehiclesView = new VehiclesView({model: vehicles}); // model is a collection, a collection of vehicles
vehiclesView.render();

