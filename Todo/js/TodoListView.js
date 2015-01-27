var TodoListView = Backbone.View.extend({
    tagName: 'ul',
    id: 'todoList',
    initialize : function (options) {
        if(!(options && options.model))
            throw new Error('model is not defined');
        
        // this listens for new Todos; they can come when user defines a new on or from the
        // fetch command    
        this.listenTo(this.model, 'add', this.renderNewItem);
    },
    events: {
        'click #add': 'addTodo',
        'keypress #newTodoItem': 'checkForEnterKey'
    },
    addTodo: function () {
        var newTodoItem = this.$('#newTodoItem');
        if(newTodoItem.val()){
            var todoItem = new TodoItem({title: newTodoItem.val()});
            
            this.model.create(todoItem);
            newTodoItem.val('');
        }
        
    },
    checkForEnterKey: function (e) {   
        if (e.keyCode == 13)
            this.addTodo();
    },
    renderNewItem: function (todo) {
        this.$el.append(new TodoItemView({model: todo}).render().$el);
    },
    render: function () {
        var self = this;
        
        this.$el.append('<input type="text" autofocus id="newTodoItem"></input><button id="add">Add</button>');
        
        this.model.each(function (todoItem) {
            var view = new TodoItemView({model: todoItem});
            self.$el.append(view.render().$el);
        });
        
        return this;
    }
});