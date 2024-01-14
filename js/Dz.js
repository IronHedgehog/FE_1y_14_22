// ------------------------DZ------------------

// 1. Створити розмітку з кнопкою та текстовим полем. За допомогою JavaScript отримати доступ до кнопки та текстового поля за їх ідентифікаторами та змінити текст на кнопці на значення текстового поля.
// ctrl + D - скопіювати нижче
const input = document.querySelector("#input");
const button = document.querySelector("#button");
// текстовий контент кнопки буде дорівнювати значенню інпута
button.textContent = input.value;

// const inputValue = input.value;
// const buttonText = button.textContent;

// console.log(button.textContent);

// 2. Створити розмітку з заголовком та зображенням. За допомогою JavaScript отримати доступ до зображення та змінити значення атрибута "src" на шлях до іншого зображення.

const img = document.querySelector("#img");

img.src =
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg";

console.log(img.src);

// 3. Створити розмітку з посиланням та зображенням. За допомогою JavaScript отримати доступ до посилання та змінити значення атрибута "href" на нову URL-адресу. Також отримати доступ до зображення та додати новий атрибут "alt" з описом зображення.

const link = document.querySelector("#link"); // Доступ до поcислання
const imgg = document.querySelector("#alt"); // Доступ до картинки

link.href = "http://127.0.0.1:5500/index.html"; //змінити значення атрибута "href" на нову URL-адресу

imgg.alt = "Пусте значення"; // додати новий атрибут "alt" з описом зображення.

// 4. Створити розмітку зі списком елементів. За допомогою JavaScript отримати доступ до першого елемента списку та змінити його вміст на новий текст.

const list = document.querySelector("#list");

const childElement = list.firstElementChild; // Знайшли перший елемент списку(перший дитячий елемент)
let childTextContent = childElement.textContent; // отримали текстове значення дитячого елементу
childElement.textContent = "Привіт"; // звернення до текстового контенту дитячого елементу та присвоєння йому нового значення
