var AppView = Backbone.View.extend({
    el: $('#app'),
    initialize : function (options) {
        if(!(options && options.model))
            throw new Error('model is not defined');
        
        // this listens for new Todos; they can come when user defines a new on or from the
        // fetch command    
        this.listenTo(this.model, 'add', this.renderNewItem);
    },
    events: {
        'keypress #newTodoItem': 'addOnEnter'
    },
    addOnEnter: function (e) {
        if (e.keyCode == 13) {
            var newTodoItem = this.$('#newTodoItem');
            if(newTodoItem.val()){
                var todoItem = new TodoItem({title: newTodoItem.val()});

                this.model.create(todoItem);
                newTodoItem.val('');
            }
        }
    },
    renderNewItem: function (todo) {
        this.$('#todoList').append(new TodoItemView({model: todo}).render().$el);
    }
});