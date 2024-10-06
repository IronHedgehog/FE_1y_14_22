// Fetch дозволяє робити http запити

// fetch();
// 'https://jsonplaceholder.typicode.com/todos/1' - вписати шлях до даних які ми хочемо отримати

// fetch за замовчуванням відправляє запит на отримання даних
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => {
    if (!response.ok) {
      console.log('Помилка в промісі');
      throw new Error('Помилка');
    }
    // response - Переклад на JSON формат
    return response.json();
  })
  .then(data => console.log(data));
// .then(json => console.log(json));

fetch('https://6672fd0a6ca902ae11b2b1ad.mockapi.io/users', {
  method: 'POST',
  // headers: 'authorization',
  body: 1,
})
  .then(response => {
    console.log('ви успішно зараєструвались');
  })
  .catch(error => console.log(error));
