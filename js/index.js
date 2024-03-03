d();
// signUp - функція яка як параметр приймає інші функція така функція називається функцією вищого порядку

function signUp(filterUser) {
  const filteredUser = filterUser();
}

// колбек - це функція яка сама по собі ніколи не відпрацьовує. ПРоте вона відпрацьовує  інших функціях та передається туди як параметр
function getInfo() {
  console.log("Отримали інформацію");
}
function filterUser(info) {
  const userInfo = info();
  console.log("Юзери пофільтровані боти видалені");
}

const a = 5;

function findName(name, test) {
  let result = "Людину не знайдено";
  if (test(name.toLowerCase())) {
    result = `${name}, привіт!`;
  }
  return result;
}

function test(name) {
  if (name === "Artem".toLowerCase()) {
    return true;
  }
  return false;
}

console.log(findName("artem", test));

console.log(a);

var b = 10;

function d(b = 10, a = 3) {
  console.log(a + b);
}

// sortedArr - cтрілочна функція яка сортує за зростанням будь-який масив

//  const sortedArr - ми створили змінну та дали назву нашій функції
// (arr) - параметри стрілочної функції
//=> обовʼязкова частина стрілочної функції (вона має функцію раннього повернення ця стрілка мітстиь у собі ретурн)

//якщо у вас одна строка коду то вам не потрбіно писати ретурн проте якщо їх 2 та більше то він все ще обовʼязковим

// {} - тіло функції, воно пишеться та виконуєтсья одразу після стрілки
// неявне повернення(ретурн прихований у трілці)
const getSumm = (a, b) => a + b + c;

const getSum = (a, b) => {
  const c = 3;
  // явне повернення
  return a + b + c;
};

const getSummm = (a, b, ...arg) => {
  const c = 3;
  console.log(a);
  console.log(b);
  console.log(arg);
  // явне повернення
  return a + b + c;
};
console.log(getSummm(1, 23, 4, 5, 6, 7, 8, 9));
console.log(getSum(10, 10));

const sortedArr = (arr) => {
  return arr.sort((a, b) => a - b);
};

console.log(sortedArr([10, 5, 12, 50, 1]));

console.log(sortedArr([100000, 1000, 14, 20, 1, 5]));
