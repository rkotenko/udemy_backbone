
// Mini project for the collection section of the course

var Vehicle = Backbone.Model.extend({
    validate: function (attrs) {
        if(!attrs.regNumber) {
            return 'Registration number is required';
        }
    },
    start: function() {
        console.log('Vehicle started');
    },
    urlRoot: '/api/vehicles'
});

var VehicleCollection = Backbone.Collection.extend({
    model: Vehicle
});

var vehicles = new VehicleCollection([
    new Vehicle({regNumber: 'xli887', color: 'Blue'}),
    new Vehicle({regNumber: 'znp123', color: 'Blue'}),
    new Vehicle({regNumber: 'zuv456', color: 'Gray'})
]);

var blueCars = vehicles.where({color: 'Blue'});
console.log('Blue cars: ' + blueCars);

var oneCar = vehicles.findWhere({regNumber: 'xli887'});
console.log('xli887: ' + oneCar);
vehicles.remove(oneCar);
console.log(vehicles.toJSON());
vehicles.each(function (car) {
    console.log(car);
})


