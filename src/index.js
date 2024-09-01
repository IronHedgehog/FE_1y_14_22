// const timeOut = setTimeout(() => {
//   console.log('Пройшло 5 секунд');
// }, 5000);
// timeOut - ідентифікатор данного таймауту, він знадобиться для того щоб видалити таймаут
// console.log(timeOut);
// clearTimeout - дозволяє видалити таймаут
// clearTimeout(timeOut);
// 2000 - число в мілісекундах на яке буде відкладено виконання колбекфункції
// () => {
//   console.log('timeOut');
// } - колбек функція
// const timeOut = setTimeout(() => {
//   console.log('timeOut');
// }, 10000);

console.log('first');

console.log('second');
console.log('third');
let counter = 0;

// const interval = setInterval(() => {
//   console.log((counter += 1));
// }, 1);
// const intervall = setInterval(() => {
//   console.log((counter += 1));
// }, 4);

let hours = 0;
let minutes = 0;
let seconds = 0;

const clockInterval = setInterval(() => {
  seconds += 1;
  if (seconds === 60) {
    minutes += 1;
    console.log(minutes);
  }
  if (minutes === 60) {
    hours += 1;
    console.log(hours);
  }
  console.log(seconds);
}, 1000);

console.log(hours, minutes, seconds);
