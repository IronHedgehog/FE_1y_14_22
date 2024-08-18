import Handlebars from 'handlebars';
import { data } from './js/data';

//Склали HTML шаблон необхідного виду
// const template = Handlebars.compile('Name: {{name}}');
// console.log(template({ name: 'Artem' }));

const template = document.querySelector('#template').innerHTML.trim();

const shablon = Handlebars.compile(template);

// // .insertAdjacentHTML - дозволяє зарендерити розмітку на екран
// document.body.insertAdjacentHTML(
//   'beforeend',
//   shablon({
//     title: 'Заголовок',
//     items: ['Привіт', ',', 'світ', '12', ':', '12', 10, 20, 30],
//   })
// );

// document.body.insertAdjacentHTML(
//   'afterbegin',
//   shablon({
//     title: 'title',
//     items: ['АЛО', 'Привіт,', 'як справи?'],
//   })
// );

const form = document.querySelector('#form');
const renderButton = document.querySelector('.render-button');

form.addEventListener('submit', e => {
  // Забороняємо оновлення сторінки при оновленні форми
  e.preventDefault();
  // .elements - зберігає всі теги форми
  const titleInputValue = form.elements.title.value;
  const textAreaContent = form.elements.each.value;

  // split - метод який дозволяє зібрати строку в масив
  // join - метод який дозволяє розібрати масив в строку

  const validTextAreaContent = textAreaContent.split(' ');

  document.body.insertAdjacentHTML(
    'beforeend',
    shablon({
      title: titleInputValue,
      items: validTextAreaContent,
    })
  );
});

// renderButton.addEventListener('click', e => {
//   document.body.insertAdjacentHTML(
//     'afterbegin',
//     shablon({
//       title: 'title',
//       items: ['АЛО', 'Привіт,', 'як справи?'],
//     })
//   );
// });

const dataTemplate = document.querySelector('#dataTemplate').innerHTML.trim();

// trim - дозволяє обрізати пробіли по краям

const dataSchablon = Handlebars.compile(dataTemplate);

document.body.insertAdjacentHTML(
  'beforeend',
  dataSchablon({ title: 'Продукти', items: data })
);

const newTemplate = document.querySelector('#newTemplate').innerHTML.trim();

console.log(newTemplate);
const newSchablon = Handlebars.compile(newTemplate);

console.log(newSchablon);

document.body.insertAdjacentHTML(
  'beforeend',
  newSchablon({ name: 'Petro', lastName: 'Petrovich' })
);

const object = {
  name: 'Artem',
  age: 30,
  lastName: 'Faust',
};

const objectJSON = JSON.stringify(object);

console.log(object);
console.log(objectJSON);

console.log(objectJSON.name);

const obj = JSON.parse(objectJSON);

console.log(obj);
console.log(obj.name);
