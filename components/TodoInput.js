class TodoInput {
  constructor({target, onAdd}) {
    const $target = document.createElement('<input type="text"></input>')
    $target.className='todo_input';
    document.appendChild($target);
  }
}

export default TodoInput;
