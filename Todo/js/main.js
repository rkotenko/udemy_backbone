$(document).ready(function () {

    var todoList = new TodoList();
    todoList.fetch();
    
    var todoListView = new TodoListView({model: todoList});
    $('body').append(todoListView.render().$el);  
});