
// Mini project for the models section of the course

var Vehicle = Backbone.Model.extend({
    validate: function (attrs) {
        if(!attrs.registrationNumber) {
            return 'Registration number is required';
        }
    },
    start: function() {
        console.log('Vehicle started');
    },
    urlRoot: '/api/vehicles'
});

var Car = Vehicle.extend({
    start: function () {
        console.log('Car started with registration number ' + this.get('registrationNumber'));
    }
});

var car = new Car({
    registrationNumber: 'XLI887',
    color: 'Red'
});
