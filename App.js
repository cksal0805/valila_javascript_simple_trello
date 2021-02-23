import { addTodoListApi, deleteTodoListApi, loadTodoListApi } from './apis/todoApi.js';
import TodoInput from './components/TodoInput.js';
import TodoList from './components/TodoList.js';

class App {
  constructor($App) {
    this.$app = $App;
    this.state = {
      todos: this.init()
    }
    this.TodoInput = new TodoInput({
        $App,
        onAdd: async(value) => {
          try {
            const todos = await addTodoListApi(value);
            await this.setState(todos);
          } catch(error) {
            console.error(error);
            alert(error);
          }
        },
    })
    this.TodoList = new TodoList({
      $App,
      todos: this.state,
      onDeleteTodo: async(id) => {
        try {
          const todos = await deleteTodoListApi(id);
          console.log(todos);
          // await this.setState(todos);
        } catch(error) {
          console.error(error);
          alert(error);
        }
      }
    })
  }
  async init () {
    const todos = await loadTodoListApi();
    await this.setState(todos);
  }
  setState(todos) {
    this.state.todos = todos
    this.TodoList.setState(todos)
  }
}

export default App;
