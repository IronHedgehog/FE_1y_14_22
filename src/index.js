import Handlebars from 'handlebars';
import { data } from './js/data';
// Імпортували великий масив даних

// Винесли у змінну ключ (щоб не допустити людьського фактору)
const LOCAL_STORAGE_KEY = 'data';

// JSON
// LocalStorage - зберігає все у вигляді строк
// Встановили у локальну памʼять(довгу памʼять) - дані у вигляді строки
localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));

//getItem - дозволяє за ключем забрати дані(Віддає дані у вигляди строки)
const dataFromStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
// Для того щоб ці дані повернути до нормального вигляду ми маємо з вами їх пропарсити використовючи метод JSON.parse()
const parsedStorageData = JSON.parse(dataFromStorage);

console.log(parsedStorageData);
// removeItem() - потрібен для того,щоб видалити один окремий ключ
// localStorage.removeItem(LOCAL_STORAGE_KEY);
// .clear() - Повністю очіщує довгу памʼять
// localStorage.clear();

const COMMENTS_LOCAL_STORAGE_KEY = 'comments';

const comments = [];

const nameInput = document.getElementById('name');
const commentInput = document.getElementById('comment');
const submitButton = document.getElementById('submitComment');
const template = document.getElementById('inputHtml').innerHTML.trim();

const compileShablon = Handlebars.compile(template);

submitButton.addEventListener('click', () => {
  const newComment = {
    name: nameInput.value,
    comment: commentInput.value,
  };
  comments.push(newComment);
  localStorage.setItem(COMMENTS_LOCAL_STORAGE_KEY, JSON.stringify(comments));

  const getItemFromLocal = localStorage.getItem(COMMENTS_LOCAL_STORAGE_KEY);

  const parsedComments = JSON.parse(getItemFromLocal);

  document.body.insertAdjacentHTML(
    'beforebegin',
    compileShablon({ comments: parsedComments })
  );
});

document.addEventListener('DOMContentLoaded', () => {
  const getItemFromLocal = localStorage.getItem(COMMENTS_LOCAL_STORAGE_KEY);

  const parsedComments = JSON.parse(getItemFromLocal);

  document.body.insertAdjacentHTML(
    'beforebegin',
    compileShablon({ comments: parsedComments })
  );
});

// TODO: FIX CODE
// FIXME:
