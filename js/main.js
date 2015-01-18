var bus = _.extend({}, Backbone.Events);

var Vehicle = Backbone.Model.extend();

var Vehicles = Backbone.Collection.extend({
	model: Vehicle,
	initialize: function () {
		// listen for the newVehicleAdded event to create a new item in the collection
		this.listenTo(bus, 'newVehicleAdded', this.addVehicle)
	},
	addVehicle: function (regNum) {
		this.add(new Vehicle({regNum: regNum})); // could also use create if we were saving to server
	}
});

var NewVehicleView = Backbone.View.extend({
	el: '#new_vehicle',
	template: _.template($('#new_vehicle_template').html()),
	events: {
		'click #add_new_vehicle': 'addVehicle',
		'keyup #new_reg_number': 'checkAddButton'
	},
	addVehicle: function () {
		var newRegNumberInput = $('#new_reg_number');
		// fire an addVehicle event, passing the registration number with it	
		bus.trigger('newVehicleAdded', newRegNumberInput.val());
		
		// clear out the reg field and disable add
		newRegNumberInput.val('');
		$('#add_new_vehicle').prop('disabled', true);
	},
	// check if the field has text.  If so, enable the add button
	checkAddButton: function () {
		if($('#new_reg_number').val().length > 0) {
			$('#add_new_vehicle').prop('disabled', false);
		} else {
			$('#add_new_vehicle').prop('disabled', true);	
		}	
	},
	render: function () {
		this.$el.html(this.template());
	}
});

var VehicleView = Backbone.View.extend({
	template: _.template($('#vehicle_template').html()),
	events: {
		'click .delete': 'delete'
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON())); // creates and inserts html using the template and a json version of the model data
		return this;
	}
});

VehicleView.prototype.delete =  function() {
		// destroy the model and then remove the view
		this.model.destroy();
		this.remove();
		console.log('removed a view');
};

var VehiclesView = Backbone.View.extend({
	el: '#vehicles', // render this view at this html element,
	initialize: function() {
		this.listenTo(this.model, 'add', this.addOne);
	},
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
var newVehicleView = new NewVehicleView();
newVehicleView.render();
vehiclesView.render();

