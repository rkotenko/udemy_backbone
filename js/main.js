// temp holding space for code I might need to use for each lesson
var Song = Backbone.Model.extend({
    defaults: {
        plays: 10001
    }
});

var SongView = Backbone.View.extend({
    initialize: function () {
        this.model.on("change", this.render, this);
    },
    render: function () {
        var template = _.template($('#songTemplate').html());
		var html = template(this.model.toJSON());
		this.$el.html(html);

        return this;
    }
});


var song = new Song({title: "Blue is Green"});

var songView = new SongView({el: '#songs', model: song});
songView.render();

