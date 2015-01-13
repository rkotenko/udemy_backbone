var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
    model: Song
});

var SongView = Backbone.View.extend({
    tagName: 'li',
    render: function () {
        this.$el.html(this.model.get('title'));
        
        return this;
    }
});

var SongsView = Backbone.View.extend({
    initialize: function () {
        this.model.on('add', this.onSongAdded, this);
    },
    onSongAdded: function (song) {
        var songView = new SongView({model: song});
        this.$el.append(songView.render().$el);
    },
    tagName: 'ul',
    render: function () {
        var self = this;
        this.model.each(function (song) {
            var songView = new SongView({model: song});
            self.$el.append(songView.render().$el);
        });
    }
});

var songs = new Songs([
    new Song({title: "Blue is Green"}),
    new Song({title: "So What"}),
    new Song({title: "All Blues"})
]);

var songsView = new SongsView({el: '#songs', model: songs});
songsView.render();

/*// Mini project for the collection section of the course

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
});
*/

