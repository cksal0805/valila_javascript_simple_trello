class TodoList {
  constructor({$App, todos, onDeleteTodo}) {
    this.$todoElement = document.createElement('ul');
    this.$todoElement.className = 'todoList';
    $App.appendChild(this.$todoElement);
    this.state = {
      todos,
    };
  }
  todoListRender = (todo) => {
    return (
      `<li key="${todo._id}">
        <p>${todo.content}</p>
        <button type="button">삭제</button>
      </li>`
    );
  }
  render = () => {
    this.$todoElement.innerHTML = this.state.todos.map((v) =>
      this.todoListRender(v)
    ).join('');
  }
  setState = (nextState) => {
    this.state.todos = nextState;
    this.render();
  }
}

export default TodoList;
