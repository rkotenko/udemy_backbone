var TodoItemView = Backbone.View.extend({
    tagName: 'li',
    initialize: function (options) {
        if(!(options && options.model))
            throw new Error('model is not specified');  
        
        // when changed, call the render function again
        this.listenTo(this.model, 'change', this.render);
        
        // listen for when the model is destroyed.  When it happens, remove this view
        this.listenTo(this.model, 'destroy', this.remove);
    },
    events: {
        "click .toggle": "toggle",
        "click .delete": "deleteTodo"
    },
    deleteTodo: function () {
        this.model.destroy();
    },
    toggle: function() {
        this.model.toggle();
        this.model.save();
        console.log(this.model.toJSON());
    },
    render: function () {
        this.$el.toggleClass('completed', this.model.get('completed'));
        var template = $('#todoItemTemplate').html();
        var html = Mustache.render(template, this.model.toJSON());
        this.$el.html(html);
        //console.log(html);
        return this;
    }
});
