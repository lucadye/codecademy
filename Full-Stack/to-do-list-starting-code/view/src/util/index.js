export const createTodo = async (todo) => {
  try {
    const res = await fetch('http://localhost:8000/api/todo/create', {
      method: 'POST',
      body: todo,
    });
    return res.json();
  } catch (error) {
    return { error };
  }
};

export const getTodos = async () => {
  try {
    const res = await fetch('http://localhost:8000/api/todos');
    const data = await res.json();
    return data;
  } catch (error) {
    return { error };
  }
};

export const removeTodo = async (id) => {
  try {
    await fetch(`http://localhost:8000/api/todo/${id}`, {
      method: 'DELETE',
    });
    return 'deleted';
  } catch (error) {
    return { error };
  }
};

