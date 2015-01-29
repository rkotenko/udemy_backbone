$(document).ready(function () {

    var todoList = new TodoList();
    todoList.fetch();
    
    var app = new AppView({model: todoList});
    $('body').append(app.render().$el);  
});