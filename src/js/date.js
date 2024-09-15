const start = new Date();

// що в обʼєкт DAte ми можемо передати мілісекунди і нам розрахується дата
// в обʼєкт date можна передати 7 параметрів
// const date = new Date(year, month, date, hours, minutes, seconds, ms);
const date = new Date(2010, 8, 0, 15, 22, 0, 0);

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
};

console.log(Date.now());
console.log(date.toLocaleString('Uk-uk', options));

const n2012 = new Date(Date.now());

// parse- повертає значення в мілісекундах
console.log(Date.parse('2'));
// console.log(Date.parse('2024-01-24T13:50'));
console.log(n2012);

console.log(Date.now());

const newDate = new Date(Date.now());
// Повертає поточну дату
console.log(newDate.toDateString());
// повертає поточний час
console.log(newDate.toTimeString());
// Повертає день місяця
console.log(newDate.getDate());
// повертає від 0 до 11
console.log(newDate.getMonth());
// Повертає від 0 до 6
console.log(newDate.getDay());

console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getMilliseconds());

let result = 'Date: ';

result += newDate.getDate() + '/';
result += newDate.getMonth() + '/';
result += newDate.getFullYear() + ' Time: ';
// result += newDate.getDay() + 1;
// result += newDate.getDay();
result += newDate.getHours() + '-';
result += newDate.getMinutes() + '-';
result += newDate.getSeconds();
console.log(result);

// Set

const timeDate = new Date(2024, 8, 15, 5, 40, 0, 0);

console.log(timeDate.getTime());
console.log(timeDate.toString());

const secondDate = new Date();

secondDate.setFullYear(2012, 6, 3);
secondDate.setHours(18, 0, 20, 100);

console.log(secondDate.toLocaleString());

// ПЕРЕТВОРЕННЯ ДАТИ ДО ЧИСЛА

for (let i = 0; i < 1000000; i++) {
  let asd = i * i * i;
}

let end = new Date();

// alert(`Цикл зайняв ${end - start}мс`);
// const date = new Date(year, month, date, hours, minutes, seconds, ms);
const nextLesson = new Date(2024, 8, 22, 14, 0, 0, 0);
const rightNow = new Date(Date.now());

// alert(`Час до наступного заняття ${nextLesson - rightNow} мс`);

const timerTime = nextLesson - rightNow;

console.log(timerTime);

const abc = new Date(Date.now());

// console.log(abc.toUTCString());
console.log(
  abc.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
  })
);
