class TodoInput {
  constructor({$App, onAdd}) {
    this.$target = document.createElement('input');
    console.log($App,onAdd);
    this.$target.className='todo_input';
    $App.appendChild(this.$target);
    this.$target.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        if(this.$target.value !== '') {
          onAdd(e.target.value);
          this.$target.value = '';
        } else {
          alert('한글자 이상 작성해주세요!')
        }
      }
    })
  }
}

export default TodoInput;
