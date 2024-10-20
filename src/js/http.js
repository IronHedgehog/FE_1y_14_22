import axios from 'axios';

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

// fetch('https://6672fd0a6ca902ae11b2b1ad.mockapi.io/users', {
//   method: 'POST',
//   headers: 'application/json',
//   body: 1,
// })
//   .then(response => {
//     console.log('ви успішно зараєструвались');
//   })
//   .catch(error => console.log(error));

const createHtml = data => {
  const htmlMarkup = data
    .map(data => {
      return `<h1>${data.title}</h1><h1>${data.completed}</h1>`;
    })
    .join('');
  document.body.innerHTML = htmlMarkup;
};

const getData = async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/todos'
  );
  createHtml(data);
};

// const data = getData();

// console.log(data);

// Put,patch - методи для оновлення обʼєкту
// put - зачищає старий обʼєкт та замість нього вставляє новий
const update = {
  title: 'Artem',
  body: 'Оновив',
};

// put,patch,delete,get,POST

async function putRequest() {
  const { data } = await axios.put(
    'https://jsonplaceholder.typicode.com/posts/51',
    update
  );

  console.log(data);
}

putRequest();

// не зачіпає увесь обʼєкт, оновлює тільки поля які вказані у вашому обʼєкті налаштувань
async function patchRequest() {
  const { data } = await axios.patch(
    'https://jsonplaceholder.typicode.com/posts/49',
    update
  );

  console.log(data);
}

patchRequest();

async function deleteRequest() {
  const { data } = await axios.delete(
    'https://jsonplaceholder.typicode.com/posts/50'
  );

  console.log(data);
}

deleteRequest();

const postData = {
  name: 'Artme',
};

async function postRequest() {
  try {
    const { data } = await axios.post(
      'https://jsonplaceholder.tpicode.com/posts',
      postData
    );

    console.log(data);
  } catch (error) {
    console.log(error);
    throw new Error('server crushed');
  }
}
// postRequest();

// ?_limit=5&_sort=name
const getComments = async (_page = 1) => {
  const searchParams = new URLSearchParams({
    _limit: 20,
    // _sort: 'name',

    _page,
  });
  const params = '?' + searchParams.toString();
  const mainUrl = 'https://jsonplaceholder.typicode.com';

  const { data } = await axios.get(`${mainUrl}/comments${params}`);
  console.log(data);
  _page += 1;
};

document.body.addEventListener('click', getComments);
