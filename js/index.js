const p = document.getElementById("text");
const text = document.getElementsByClassName("ttt");
const txt = document.querySelector(".ttt");

console.log(document.body);
console.log(text);
console.log(p);
console.log(txt);
// textContent = дозволяє замінити текстовий контент елементу
p.textContent = "Artem";

console.log(p);

// CТВОРЕННЯ DOM вузлів БАЗОВЕ

const heading = document.createElement("h1");

// Вузол який ми створили він може знаходитись тільки в одному місці
heading.textContent = "Заголовок який ми створили в JS";

document.body.append(heading);

const img = document.createElement("img");

img.src =
  "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
img.alt = "Картинка";

console.log(img);

document.body.prepend(img);

document.body.before(heading);
document.body.after(img);
// Видалити елементи
img.remove();
// innerHtml - Спочатку абсолютно все видаляє
// додає те що ви попросили
// innerHtml = ми використовуємо для того,щоб видалити контент
// document.body.innerHTML = "";

const template = "<ul><li>asd</li><li>asd</li></ul>";
document.body.insertAdjacentHTML("beforeend", template);
// Щоб отримати дата атрибути ви маєте використовувати dataset і через крапку звертатись до другого слова вашого датаатрибута
console.log(p.dataset.text);
console.log(img.hasAttribute("onload"));

console.log(img.getAttribute("src"));
