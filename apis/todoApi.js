const username = 'dumbo';

export const loadTodoListApi = async() => {
  const response = await fetch(`https://todo-api.roto.codes/${username}`, {
    method: 'GET',
  });
  if(response.ok) {
    const data = await response.json()
    return data;
  } else {
    throw new Error('데이터를 로드하는데 문제 발생');
  }
}

export const addTodoListApi = async(todo) => {
  const response = await fetch(`https://todo-api.roto.codes/${username}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content: todo
    })
  })
  if(response.ok) {
    return await loadTodoListApi();
  } else {
    throw new Error('데이터를 추가하는데 문제 발생');
  }
}

export const deleteTodoListApi = async(id) => {
  const response = await fetch(`https://todo-api.roto.codes/${username}/${id}`, {
    method: 'DELETE',
  })
  if(response.ok) {
    return await loadTodoListApi(); // 삭제하고 다시 로드
  } else {
    throw new Error('데이터를 삭제하는데 문제 발생');
  }
}

export const deleteAllTodoListApi = async() => {
  const response = await fetch(`https://todo-api.roto.codes/${username}/all`, {
    method: 'DELETE'
  })
  if(response.ok) {
    return await loadTodoListApi();
  } else {
    throw new Error('데이터를 모두삭제하는데 문제 발생');
  }
}

export const toggleState = async(id) => {
  const response = await fetch(`https://todo-api.roto.codes/${user}/${id}/toggle`, {
    method: 'PUT'
  })
}