// Вивчимо методи масивів

// Навчимося робити з рядка масив та навпаки(split,join)

const stringi = "Привіт, світ!";

// .split(",") - метод спліт збирає зі строки масив
// В дужечках треба написати розділювач(слова будуть поділені за розділювачем)

const splitArr = stringi.split("");
console.log(stringi.split(""));

//  .join("") - метод джоін збирає з масиву строку
// В дужечках треба написати ознаку за якою треба зібрати строку
// console.log(stringi.join(" "));

const joinString = splitArr.join("");
console.log(splitArr.join(""));

const str11 = ["Hello World", "hello world"];
str11[0] = str11[0].split("");
console.log(str11);
// Перевірки на існування елементу в масиві (indexOf , includes)
// indexOf() - це метод який повертає індекс елемента якщо він існує та -1 якщо елемента який ви шукаєте не існує
const users = ["Artem", "Ajax", "Yura"];
console.log(users.indexOf("Yura"));
console.log(users.indexOf("Petro"));
//includes - повертає true якщо елемент який ви шукаєте є в масиві та повертає false якщо такого елементу не має
console.log(users.includes("Artem"));
console.log(users.includes("Artem2"));

const colors = ["red", "blue", "green"];

if (colors.includes("")) {
  console.log("Ви ввели пусту строку");
}

// Дізнаємося як можна додати елементи в масив та вирізати або видалити один або декілька елементів.(shift,unshift,pop,push,slice,splice)

const nums = [1, 23, 45];

// .push додає будь-яку кількість елементів в кінець вашого масиву

nums.push(20, 21, 22, 40, 50, 60, 70);
//.pop Видаляє елемент з кінця масиву (повертає видалені елементи)
nums.pop();

//.unshift додає елементи в початок масиву
nums.unshift(1000, 80, 90, 100, 111111);
// видаляє з початку масиву один елемент та повертає його
nums.shift();

console.log(nums);

const firstIndex = nums.indexOf(80);
const lastIndex = nums.indexOf(111111);

// метод слайс дозволяє отримувати елементи масиву та створювати з них новий масив. За замовчуванням робить повну копію масиву на кому був викликаний
console.log(nums);

//
console.log(nums.slice());

// в дужки ми передаємо індекс з якого почати копіювати елементи першим параметром та через кому передаємо індекс на якому треба завершити копіювання(не включно)
// Останній індекс не включно
console.log(nums.slice(firstIndex, lastIndex));
// Повертає новий масив який складається з 5 елементів масиву на якому визвали метод slice
console.log(nums.slice(-5));

// splice()

const numsArr = [3, 10, 20, 790, 555];

console.log(numsArr);
const findElement = numsArr.indexOf(790);
const tenElement = numsArr.indexOf(10);
// splice - метод який дозволяє замінювати елементи, вирізати елементи, додавати елементи
// Приймає два параметри 1) Це індекс з якого треба почати працювати 2) кількість елементів яку треба видалити
// splice повертає те що він вирізав
numsArr.splice(findElement, 2);

//Безліч параметрів після другого додадуться замість видалених елементів
numsArr.splice(0, 0, 1, 2);
numsArr.splice(tenElement, 2, 4, 5, 6, 7, 8, 9);

const languages = ["html", "CSS", "JS"];
languages.splice(0, 0, "C++");

console.log(languages);

console.log(numsArr);

// Навчимося об’єднувати декілька масивів в один (concat)

const num1 = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8, 9, 10];
const num3 = [11, 12, 13, 14, 15];

const num12 = num1.concat(num1);

// const num123 = [...num1, ...num2, ...num3];
// console.log(num12);
// console.log(num123);

// const svoiVlasniStudents = [1, 2, 3, 4, 5, 6, 7];
// const students = [1, 2, 3, 4, 5];

// console.log(svoiVlasniStudents + students);

// const zamina = svoiVlasniStudents.concat(students);

// console.log(zamina);

// function stvoritiZyctrich(zamina) {
//   console.log("зустріч сьогодні о 2");
// }

// stvoritiZyctrich(zamina);
// function onLesson() {}
