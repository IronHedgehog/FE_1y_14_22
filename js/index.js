// 6  значень які за замовчуванням дорівнюють false
// 0 null NaN false "" undefined
// АБСОЛЮТНО ВСІ ІНШІ ЗНАЧЕННЯ = TRUE
// повертає значення яке набуває false або останню правду
// console.log(false && "к" && "false" && "Привіт");
// true && "к"  - к
// "к" && "false" - false
// "false" && "Привіт" - "Привіт"
// console.log(false || "к" || "false" || "Привіт");
// ІНСТРУМЕНТИ РОЗГАЛУДЖЕННЯ КОДУ
// Розгалудження коду =  Виконання коду за умовою
// Перший інструмент - if - якщо?
// якщо в круглі дужки іфу передати вираз який буде завжди false то код всередині фігурних дужок іфу ніколи не виконається

let subscribe = "plus";

const start = 0;

const plus = 300;

const plusPlus = 600;

const plusPlusExtra = 900;

const user = 700;

// В круглих дужках будь який вираз який приводить до false то код в фігурних дужках ніколи не виконається

//if (лінивий) -  як тільки він бачить співпадіння першого кейсу він його виконує та виходить

// Ялинками

if (user >= plusPlusExtra) {
  console.log("Ви можете придбати підписку plusPlusExtra");
  // true (тут і зупиняємось якщо if true)
} else if (user >= plusPlus) {
  console.log("Ви можете придбати підписку plus plus");
  // якщо у людини менше 900 гривень але більше або = 600
} else if (user >= plus) {
  // якщо у людини менше 600 гривень але більше або = 300
  console.log("Ви можете придбати підписку plus ");
} else {
  // Якщо жодна з умов не підійшла то видаємо else
  console.log("Вам надано підписку старт");
}

// if (user >= plus) {
//   console.log("Ви можете придбати підписку plus");
// }

// if (user >= plusPlus) {
//   console.log("Ви можете придбати підписку plus plus");
// }

// if (user >= plusPlusExtra) {
//   console.log("Ви можете придбати підписку plus plus Extra");
// }
// if (умова яка має повернути true || false)
// true - відпрацьовує
// false - не відпрацьовує (відпрацьовує якщо не виконується if)
//  6 значень які завжди = false (null, undefined ,0 , "", NaN, false)
if (0) {
  //false
  console.log(0 / 0); // NaN
} else if (1) {
  //false
  console.log(null); // null
} else {
  //якщо жодна умова не підійшла,то виконується else
  console.log(1 / 0); // infinity
}

// ТЕрнарні оператори

const age = 17;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("child");
}

const isAdult = age >= 18 ? "Adult" : "child"; // - child
// тернарний оператор річ для найпростіших порівнянь
console.log(isAdult);

// тернарний оператор складається з трьох частин
// 1 - цe порівняння
// 2 - ? - Запитуємо у браузера чи правильне це порівнняняʼ
// 3 якщо правда то повератається значення після  ? якщо не правда повертається значення після :

const a = 115;
const b = 2;
//
const num = a > b ? a : b;
console.log(num);

// Switch - щось схоже на if else
// Якщо у вас є можливість не використовувати Switch ви маєти її використати
// Все що записується за допомогою Switch можна записати за допомогою if ... else  але не навпаки.

const money = 100;

const standart = 0;
const silver = 100;
const gold = 250;
const platinum = 500;
const diamond = 1000;

// switch (key) - key те що ми будемо порівнювати
switch (money) {
  // case - це умова яку ми перевіряємо тобто чи дорівнює money === 0
  case 0:
    console.log("standart");
    break;
  // money === 100
  case 100:
    console.log("silver");
    break;
  // money ===250
  case 250:
    console.log("gold");
    break;
  // 500 = platinum
  case 500:
    console.log("platinum");
    break;
  case 1000:
    // 1000 = diamond
    console.log("diamond");
    break;
  default:
    // default - виконується коли жоден з кейсів не підійшов
    console.log("Неочікувана поведінка");
    break;
}
