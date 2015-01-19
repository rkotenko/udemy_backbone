var Vehicle = Backbone.Model.extend();

var Vehicles = Backbone.Collection.extend({
	model: Vehicle
});

var HomeView = Backbone.View.extend({
	el: '#container',
	render: function () {
		this.$el.html('Welcome!');
		return this;
	}
});

var VehicleView = Backbone.View.extend({
	template: _.template($('#vehicle_template').html()),
	render: function () {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});

var VehiclesView = Backbone.View.extend({
	el: '#container',
	render: function () {
		var self = this;
		this.$el.empty();
		this.model.each(function (vehicle) {
			var vehicleView = new VehicleView({model: vehicle});
			self.$el.append(vehicleView.render().$el);
		});
	}
});

var cars = new Vehicles([
	new Vehicle({name: 'Toyota', regNum: '123ABC'}),
	new Vehicle({name: 'Ford', regNum: 'ABC345'}),
	new Vehicle({name: 'Mazda', regNum: 'DEF123'})
]);

var boats = new Vehicles([
	new Vehicle({name: 'Skipper', regNum: '123ABC'}),
	new Vehicle({name: 'Sailboat', regNum: 'ABC345'}),
	new Vehicle({name: 'Battleship', regNum: 'DEF123'})
]);

var Router = Backbone.Router.extend({
	routes: {
		'home': 'goHome',
		'cars': 'viewCars',
		'boats': 'viewBoats'
	},
	goHome: function () {
		var homeView = new HomeView();
		homeView.render();
	},
	viewCars: function () {
		var carsView = new VehiclesView({model: cars});
		carsView.render();
	},
	viewBoats: function () {
		var boatsView = new VehiclesView({model: boats});
		boatsView.render();
	}
});

var router = new Router();
Backbone.history.start();
router.navigate('home', {trigger: true});
