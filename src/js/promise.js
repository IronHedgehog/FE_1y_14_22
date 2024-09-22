// Створення обіцянки(promise)

// resolve - стан коли обіцянка зправдилась(успішне виконання обіцянки)
// reject - стан коли обіцянка не виконалась(не успішне виконання обіцянки)
let cool = true;
// promise pending - очікуваня відпрацювання
const promise = new Promise((resolve, reject) => {
  // async operation
  setTimeout(() => {
    if (cool) {
      console.log('cool');
      resolve('Все кул, ти виконав свою обіцянку бери шоколадку');
    } else {
      console.log(' не кул');
      reject('Ти недотримався обіцянки');
      // reject()
    }
  }, 2000);
});
//
promise
  .then(
    // опрацювання resolve(успіх)
    resolve => console.log(resolve)
  )
  .catch(reject => {
    // опрацювання reject( не успіх)
    console.log(reject);
  })
  .finally(() => {
    console.log('Проміс завершено');
  });
// catch - спіймати

// Ланцюжок промісів
const mathPromise = new Promise((resolve, rejected) => {
  setTimeout(() => {
    resolve(10);
  }, 5000);
});

mathPromise
  .then(resolve => {
    console.log(resolve);
    return resolve * 2;
  })
  .then(value => {
    console.log(value);
    return value * 2;
  })
  .then(value => {
    console.log(value);
    return value * 2;
  })
  .then(value => {
    console.log(value);
    return value * 2;
  })
  .catch(rejected => {
    console.log(rejected);
  })
  .finally(() => {
    console.log('розрахунок завершено');
  });

// Промісифікація функції

// const fetchData = (id, onSuccess, onError) => {
//   setTimeout(() => {
//     const ok = true;
//     if (ok) {
//       onSuccess('Дані успішно завантажені');
//     } else {
//       onError('Не вдалося завантажити дані');
//     }
//   }, 5000);
// };
// const onFetchOk = data => {
//   console.log(data);
// };

// const onFetchNotOk = error => {
//   console.log(error);
// };
// fetchData(100, onFetchOk, onFetchNotOk);

const fetchData = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ok = true;

      if (ok) {
        resolve('Дані завантажено');
      } else {
        reject('Дані невдалось отримати');
      }
    }, 2000);
  });
};

fetchData(100)
  .then(resolve => {
    console.log(resolve);
  })
  .catch(reject => {
    console.log(reject);
  })
  .finally(() => {
    console.log('завершили виконання коду');
  });

let newPromise = new Promise((resolve, reject) => {
  resolve(1);
  setTimeout(() => {
    resolve(2);
  }, 2000);
});

newPromise.then(alert);

setTimeout(() => {
  console.log('object');
}, 5000);

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('код виконався через 3 секунди');
    }, ms);
  });
}

delay(5000).then(alert);

function promisificationFunc() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const ok = true;
      if (ok) {
        res('Проміс виконано');
      } else {
        rej('Проміс не виконано');
      }
    }, 2000);
  });
}

promisificationFunc().then(console.log);
