document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);
// ЗАСТАРІЛО (НЕ ВИКОРИСТОВУВАТИ)
// document.addEventListener("keypress", onKeyUp);
// ЗАСТАРІЛО (НЕ ВИКОРИСТОВУВАТИ)

function onKeyDown(e) {
  // console.log(e);
  // щоб
  // e.preventDefault();
  // console.log("KeyDown");
  console.log(e.code);
  // e.key = регістрочутливий - повертає символ який ви клацнули, маленька буква або велика
  // console.log(e.key);

  if ((e.ctrlKey || e.metaKey) && e.code === "KeyV") {
    console.log("Комба робе");

    document.body.style.backgroundColor = "black";
  }
}

function onKeyUp(e) {
  document.body.style.backgroundColor = "white";

  // console.log("UP");
}

// Мишки

const button = document.querySelector(".as");

document.body.addEventListener("dblclick", dbClick);

function dbClick(e) {
  console.log("ДабЛклік");
}

document.body.addEventListener("contextmenu", context);

function context(e) {
  e.preventDefault();
  console.log("open menu");
}

document.body.addEventListener("mousemove", onMouseMove);

function onMouseMove(e) {
  console.log(e);
}

// 2. Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. При натисканні на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає 1 параметр amount - число. Функція створює стільки div, скільки вказано в amount і додає їх в div#boxes.
// Кожен створений div:
// Має випадковий rgb колір фону
// Розміри найпершого div - 30px на 30px
// Кожен наступний div після першого, повинен бути ширше і вище попереднього на   10px
// Створи функцію destroyBoxes(), яка очищає div#boxes.
// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Створити</button>
//   <button type="button" data-action="destroy">Очистити</button>
// </div>

// <div id="boxes"></div>
