// // Створення обіцянки(promise)

// // resolve - стан коли обіцянка зправдилась(успішне виконання обіцянки)
// // reject - стан коли обіцянка не виконалась(не успішне виконання обіцянки)
// let cool = true;
// // promise pending - очікуваня відпрацювання
// const promise = new Promise((resolve, reject) => {
//   // async operation
//   setTimeout(() => {
//     if (cool) {
//       console.log('cool');
//       resolve('Все кул, ти виконав свою обіцянку бери шоколадку');
//     } else {
//       console.log(' не кул');
//       reject('Ти недотримався обіцянки');
//       // reject()
//     }
//   }, 2000);
// });
// //
// promise
//   .then(
//     // опрацювання resolve(успіх)
//     resolve => console.log(resolve)
//   )
//   .catch(reject => {
//     // опрацювання reject( не успіх)
//     console.log(reject);
//   })
//   .finally(() => {
//     console.log('Проміс завершено');
//   });
// // catch - спіймати

// // Ланцюжок промісів
// const mathPromise = new Promise((resolve, rejected) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 5000);
// });

// mathPromise
//   .then(resolve => {
//     console.log(resolve);
//     return resolve * 2;
//   })
//   .then(value => {
//     console.log(value);
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value);
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value);
//     return value * 2;
//   })
//   .catch(rejected => {
//     console.log(rejected);
//   })
//   .finally(() => {
//     console.log('розрахунок завершено');
//   });

// // Промісифікація функції

// // const fetchData = (id, onSuccess, onError) => {
// //   setTimeout(() => {
// //     const ok = true;
// //     if (ok) {
// //       onSuccess('Дані успішно завантажені');
// //     } else {
// //       onError('Не вдалося завантажити дані');
// //     }
// //   }, 5000);
// // };
// // const onFetchOk = data => {
// //   console.log(data);
// // };

// // const onFetchNotOk = error => {
// //   console.log(error);
// // };
// // fetchData(100, onFetchOk, onFetchNotOk);

// const fetchData = id => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const ok = true;

//       if (ok) {
//         resolve('Дані завантажено');
//       } else {
//         reject('Дані невдалось отримати');
//       }
//     }, 2000);
//   });
// };

// fetchData(100)
//   .then(resolve => {
//     console.log(resolve);
//   })
//   .catch(reject => {
//     console.log(reject);
//   })
//   .finally(() => {
//     console.log('завершили виконання коду');
//   });

// let newPromise = new Promise((resolve, reject) => {
//   resolve(1);
//   setTimeout(() => {
//     resolve(2);
//   }, 2000);
// });

// newPromise.then(alert);

// setTimeout(() => {
//   console.log('object');
// }, 5000);

// function delay(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('код виконався через 3 секунди');
//     }, ms);
//   });
// }

// delay(5000).then(alert);

// function promisificationFunc() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const ok = true;
//       if (ok) {
//         res('Проміс виконано');
//       } else {
//         rej('Проміс не виконано');
//       }
//     }, 2000);
//   });
// }

// promisificationFunc().then(console.log);

// const makePromise = (text, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isCool = Math.random() >= 0.8;

//       if (isCool) {
//         resolve(text);
//       } else reject('Unlucko');
//     }, delay);
//   });
// };

// const promiseA = makePromise('PROMISE A', 1000);
// const promiseB = makePromise('PROMISE B', 3000);
// const promiseC = makePromise('PROMISE C', 5000);

// Promise.all([promiseA, promiseB, promiseC]).then(value => console.log(value));

// Promise.race([promiseA, promiseB, promiseC]).then(value => console.log(value));

// Promise.any([promiseA, promiseB, promiseC])
//   .then(value => console.log(value))
//   .catch(err => console.log(err));

// new Promise(resolve => resolve('success')).then(value => console.log(value));

// new Promise((_res, reject) => reject('reject')).catch(err => console.log(err));

// const greetings = name => {
//   if (name === '' || name === undefined) {
//     return Promise.reject('Поле має бути заповнене');
//   }
//   return Promise.resolve(`Привіт, ${name}`);
// };

// greetings('')
//   .then(greeting => console.log(greeting))
//   .catch(err => console.log(err));

// console.log('Старт');
// //setTimeout -  макрозадача -
// setTimeout(() => {
//   console.log('Таймаут 1');
// }, 0);
// // promise - це мікрозадача
// Promise.resolve().then(() => {
//   console.log('Проміс');
// });

// console.log('кінець');

// Спочатку виконується стнхронний код
// 1
// console.log('Старт');
// // 5
// setTimeout(() => {
//   console.log('timeout1');
// });
// // 6
// setTimeout(() => {
//   console.log('timeout2');
// });
// // 3
// Promise.resolve().then(() => console.log('Проміс 1'));
// // 4
// Promise.resolve().then(() => console.log('Проміс 2'));
// // 2
// console.log('кінець');

console.log('Початок');

setTimeout(() => {
  console.log('timeout1');
}, 0);

Promise.resolve().then(() => {
  console.log('Проміс 1');
  setTimeout(() => {
    console.log('timeout on promise');
  }, 0);
  Promise.resolve().then(() => {
    console.log('Вкладений проміс');
  });
});

setTimeout(() => {
  console.log('timeout2');
}, 0);

console.log('Кінець');

//Початок
//Кінець
// Проміс 1
// Вкладений проміс
