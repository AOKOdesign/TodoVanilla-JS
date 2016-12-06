var todoList = {
  todos: [],
  addTodos: function(todoText) {
    this.todos.push({
        todoText: todoText,
        completed: false
      });
  },
  changeTodo: function(pos, todoText) {
    this.todos[pos].todoText = todoText; 
  },
  deleteTodo: function (pos) {
    this.todos.splice(pos, 1);
  },
  toggleCompleted: function (pos) {
    var todo = this.todos[pos];
    todo.completed = !todo.completed;
  },
  toggleAll: function () {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    
    if (completedTodos === totalTodos) {
      for(i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for(i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
  }
};

var handlers = {
  addTodos: () => {
   var addTodoTextInput = document.getElementById('addTodoTextInput'); 
   todoList.addTodos(addTodoTextInput.value);
   addTodoTextInput.value = '';
   view.displayTodos();
  },
  changeTodo: () => {
    var changeTodoPosInput = document.getElementById('changeTodoPosInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPosInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPosInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: () => {
    var deleteTodoPosInput = document.getElementById('deleteTodoPosInput');
    todoList.deleteTodo(deleteTodoPosInput.valueAsNumber);
    deleteTodoPosInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: () => {
    var toggleTodoPosInput = document.getElementById('toggleTodoPosInput');
    todoList.toggleCompleted(toggleTodoPosInput.valueAsNumber);
    toggleTodoPosInput.value = '';
    view.displayTodos();
  },
  toggleAll: () => {
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: () => {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';
      
      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }

      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
};
















