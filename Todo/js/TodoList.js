var TodoList = Backbone.Collection.extend({
    url: 'http://jsonplaceholder.typicode.com/todos',
    model: TodoItem
});