"use strict";

//-------------------ВЛАСТИВОСТІ ТА МЕТОДИ------------

// length(властивість)  =  довжина

const name =
  "длтплфтвалптцдлтшуарут-щ0-023-0шщцвтлвт мьб івиаоілввиаоівафіоаофуикпфоифцівлоси ліовт с";

// console.log(name.length);

// Метод = Виконати дію

//  log(логувати) = щось показати в консоль
// () - це означає виклик методу
// console.log(name);

// Властивість це характеристика яка означає якісь наші властивості
// -------------------СУВОРИЙ РЕЖИМ-------------------

// СУВОРИЙ РЕЖИМ ПОТРІБЕН ДЛЯ ТОГО ЩОБ МИ ЗАПИСУВАЛИ ГАРНИЙ СУЧАСНИЙ JS КОД
const x = 10;
// console.log(x);

// ------------------- ЗМІННІ І ТИПИ------------------

// Змінна = це комірка у пам'яті куди ми записуємо якесь значення.

// const  = константа = має у собі значення які не можна  змінювати далі по коду(90% випадків), обовʼязково оголосити значення при створенні
const b = 20;

const HELLO_MESSAGE = "Привіт,User";

const bigInt = 100;

const log = 12;
// let = можна одразу не давати значення, можна дати та перевизначити значення  далі в коді(10%)

let result;
let a = "a" + b;

// Старий синтаксис - с часів динозаврів -  можуть викликати в великій кількості проблеми в памʼяті ПК(Окремі випадки на старих проектах і то наврядчи)

var t;

t = b + a;

result = a + t;

console.log(b, a, t, result);

// number, string, boollean, null,undefined,bigInt, symbol.
// Object,function
// Тип данних число
const number = 5;

// NaN = not a number, NaN = тип данних число
console.log(typeof NaN);
console.log(Number.parseInt("ajsdajsdjlajsd2"));
//
// тип данних строка
const string = "asdasd";
// тип данниї булеан

// || = логічний оператор або
// Булеан може мати лише два значення правда(true)або не правда(false)
const bollean = true || false;
// null = буквально пустота; Яку в майбутньому ми можемо чимось наповнити. Значення яке задаючть вручну для того щоб показати,що в майбутньому ми плануємо щось у цій змінній змінити.
const nullType = null;

// undefined =  ми відправили JS  пошукати якісь данні, він пішов шукати і нічого не знайшов
const undef = undefined;

let d;

console.log(d);
// bigInt = Великі числа які зустрічаються в основному при роботі в банківських установах;

// Symbol = тип данних який використовується при утворенні бібліотек(Він потрібен для привєʼязки контексту)
//
// -----------------------TYPEOF----------------------
// Суть методу typeof у тому що він показує вам тип даних які ви передаєте
function asda(params) {}

console.log(typeof 5);
console.log(typeof "5");
console.log(typeof true);
console.log(typeof null);
console.log(typeof NaN);
console.log(typeof asda);
console.log(typeof undefined);

// ---------------ВЗАЄМОДІЯ З КОРИСТУВАЧЕМ -----------
// alert();confirm() prompt();

// alert = виведення повідомлення користувачу з довільним змістом

const str = "Hello,user";

// alert(str);
// Метод який дозволяє щось запитати у користувача і зберегти його відповідь
// const prom = prompt("Скільки вам років?");
// console.log(prom);

// дозволяє запитата у користувачи чи він погоджується з нашим повідомленням і реагувати на його відповідь
// const con = confirm("Чи погоджуєтесь ви, з правами користуванням сайту?");

// якщо
// if (con === false) {
//   document.body.style.backgroundColor = "black";
//   document.body.style.color = "white";
// } else {
//   document.body.style.backgroundColor = "white";
//   document.body.style.color = "white";
// alert("Welcome");
// }

// ЯКЩО ВСТИГНЕМО
// РОБОТА З ЧИСЛАМИ ТА ОСНОВНІ МАТЕМАТИЧНІ ОПЕРАТОРИ ТА МЕТОДИ

// console.log("as");

const u = "undefined";
console.log(typeof u);

let username;
console.log(username);
username = "Artem";
console.log(username);
// оголошена = утворенна;

const o = "asdas";
o = "qwe";
console.log(o);
