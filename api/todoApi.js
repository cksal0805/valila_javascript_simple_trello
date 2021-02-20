const username = 'dumbo';

export const loadTodoListApi = async() => {
  await fetch(`https://todo-api.roto.codes/${username}`, {
    method: 'GET',
  }).then((response) => {
    if(response.ok) {
      return await response.json();
    } else {
      throw new Error('데이터를 로드하는데 문제 발생');
    }
  });
}

export const addTodoListApi = async(todo) => {
  await fetch(`https://todo-api.roto.codes/${username}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content: todo
    })
  }).then((response) => {
    if(response.ok) {
      return await loadTodoListApi.json();
    } else {
      throw new Error('데이터를 추가하는데 문제 발생');
    }
  });
}

export const deleteTodoListApi = async({id}) => {
  await fetch(`https://todo-api.roto.codes/${username}/${id}`, {
    method: 'DELETE',
  }).then((response) => {
    if(response.ok) {
      return await loadTodoListApi.json();
    } else {
      throw new Error('데이터를 삭제하는데 문제 발생');
    }
  });
}

export const deleteAllTodoListApi = async() => {
  await fetch(`https://todo-api.roto.codes/${username}/all`, {
    method: 'DELETE'
  }).then((response) => {
    if(response.ok) {
      return await loadTodoListApi.json();
    } else {
      throw new Error('데이터를 모두삭제하는데 문제 발생');
    }
  });
}

export const toggleState = async({id}) => {
  await fetch(`https://todo-api.roto.codes/${user}/${id}/toggle`, {
    method: 'PUT'
  }).then
}