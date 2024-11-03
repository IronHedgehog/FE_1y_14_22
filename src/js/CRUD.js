fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));
// POST - ?

const todo = {
  id: 10,
  title: 'ASDAS',
  descr: 'zxc',
};

fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'POST',
  body: JSON.stringify(todo),
  headers: {
    'Content-Type': 'multipart/formData',
  },
});

// U - UPDATE

// put,patch

const updateTodo = {
  completed: true,
};

fetch('https://jsonplaceholder.typicode.com/todos/101', {
  method: 'PATCH',
  body: JSON.stringify(updateTodo),
})
  .then(response => response.json())
  .then(todo => console.log(todo));

fetch('https://jsonplaceholder.typicode.com/todos/103', {
  method: 'PUT',
  body: JSON.stringify(updateTodo),
})
  .then(response => response.json())
  .then(todo => console.log(todo));

// D - delete

// DELETE

fetch('https://jsonplaceholder.typicode.com/todos/31', {
  method: 'DELETE',
})
  .then(response => response.json())
  .then(todo => console.log(todo));
