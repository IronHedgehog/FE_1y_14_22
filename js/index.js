// Impera
// impera - опис кожного кроку

const number = [1, 2, 3, 4, 5];

const filteredNums = [];

for (let index = 0; index < number.length; index++) {
  if (number[index] > 2) {
    filteredNums.push(number[index]);
  }
}

console.log(filteredNums);

// Declarate

const numberDeclarate = [1, 2, 3, 4, 5];

// filter - це метод перебору циклу який
// 1) повертає новий масив
// 2) повертає відфільтрований масив за умовою

// Чисті функції - це функції які при роботі з масивом не замінюють його початкові значення
// const filteredDeclarateNums = numberDeclarate.filter(function (value) {
//   return value > 2;
// });
filteredDeclarateNums = numberDeclarate.filter((value) => value > 2);

console.log(numberDeclarate);

console.log(filteredDeclarateNums);

// dirty func

// Функції які змінюють початкові дані над якими функція проводить роботу

// plusNum -  Працює з масивом який ми прислали та працює з значеннями в масиві
const plusNum = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    array[i] += value;
  }
};

plusNum(numberDeclarate, 20);

console.log(numberDeclarate);

// pure func

// Функції які не змінюють початкові значення
// plus - створює новий масив result
// пушить в нього необхідні нові значення
// Повертає новий масив result у зовнішній код
const plus = (array, value) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + value);
  }

  return result;
};

const newArray = [1, 2, 3, 4, 6];

const plusNumns = plus(newArray, 2000);

console.log(newArray);

console.log(plusNumns);

for (let i = 0; i < newArray.length; i++) {
  console.log(newArray[i]);
}

// foreach - перебирає масив, нічого не повертає.Може змінювати поточні данні

// foreach = for з світу методів перебору масивів
// array - це масив на якому ми викликаємо метод перебору (foreach)
// index - індекс поточного елементу в масиві
// number - поточне значення масиву
newArray.forEach((number, index, array) => console.log(number, index, array));

// майже всі, методи перебору - це чисті функції
// map - це метод перебору масивів який
// 1) Повертає новий масив тієї ж довжини, що ї той на якому був викликаний
// 2) Чиста функція
// 3) Може використовуватись для трансформації масиву
const qwe = newArray.map((number) => number + 10);

console.log(newArray);
console.log(qwe);

// filter

// filter -  це метод перебору масиву який
// 1) повертає новий масив відфільтрований за умовою

const filter = newArray.filter((item) => item > 2);
console.log(filter);
console.log(newArray);

// find

// find - дозволяє знайти один елемент серед багатьох
// 1) find коли знаходить перший елемент який задовольняє умову припиняє перибирати масив
// якщо елемент не знайдено отримаєм undefined
// Повертає перший збіг
const four = newArray.find((item) => item === 4);
console.log(four);

// every

// Перевіряє чи пройшли перевірку ВСІ елементи масиву тоді every повертає true ЯКЩО ХОЧА Б ОДИН НЕ ПРОЙШОВ ПОВЕРТАЄ FALSE
// Метод повертає true або false

const con = [1, 2, 3, 4, 10000];
console.log(con.every((item) => item <= 10));
// some

// Перевіряє чи пройшов перевірку ХОЧА Б ОДИН елемент масиву тоді some повертає true ЯКЩО ВСІ НЕ ПРОЙШЛИ ПОВЕРТАЄ FALSE
console.log(con.some((item) => item <= 10));

// reduce,sort

const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

// акумулятор це початкове значення з якого все починається

//reduce приймає першим параметром акумулятор другим поточние елемент перебору, index, array
//
const totalBalance = users.reduce((acc, user) => {
  return acc + user.balance;
}, 0);

console.log(totalBalance);
// Викликає помилку
// const newArr = users.reduce((acc, user) => {
//   console.log(acc.push(users));
// }, []);

// const newObj = users.reduce((acc, item) => {
//   console.log(acc);
//   acc.gender = item.gender;
//   console.log(acc);
// }, {});
// не викликає помилку
// Перебираючі методи це також функції, якщо вони нічого не повертають з них вілитає в основному undefined
const newArr = users.reduce((acc, user) => {
  acc.push(user);
  return acc;
}, []);

console.log(newArr);

const newObj = users.reduce((acc, item) => {
  acc.gender = item.gender;
  return acc;
}, {});

console.log(newObj);

// .sort
const arrNums = [2, 4, 3, 1, 5, 6, 7, 8, 9, 10];

console.log(arrNums.sort());

const clients = ["Yura", "Petro", "Artem", "Igor"];

console.log(clients.sort());

const obj = [
  {
    name: "Artem",
    daysActive: 15,
  },
  {
    name: "Petro",
    daysActive: 3,
  },
  {
    name: "Yura",
    daysActive: 20,
  },
  {
    name: "Igor",
    daysActive: 10,
  },
];

const sortedByActiveDays = (a, b) => b.daysActive - a.daysActive;
console.log(obj.sort(sortedByActiveDays));

// Ланцюжки методів

const result = arrNums.filter((number) => number >= 5).sort((a, b) => a - b);
console.log(result);

console.log(result);

const activePlayers = obj
  .filter((user) => user.daysActive >= 10)
  .map((user) => user.name);

console.log(activePlayers);

const fruit = ["apple", "pear", "banana"];

fruit.sort(function (a, b) {
  return a.localeCompare(b);
});

console.log(fruit);
