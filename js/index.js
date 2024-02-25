doCoffee("water");

// var, function declaration
// вcе що має Hoisting вспливає та ці елементи можна викликати в будь-якій точці документу
// ------------Дізнаємось що таке функція.-----------

//  -----------Які є способи створення функцій. ----------

// 1)спосіб створення function declaration()
// Функціональнй вираз
// function = створення функції
// function name(doCoffee) = імʼя функції яку ми будемо розробляту
// () - набір аргументів які потрібні для адекватної роботи функції
// {} - тіло нашої функії яке буде виконуватись
const a = [1, 2, 3, 4];
function name(name = "Anonim") {
  console.log(name);
}

function doCoffee(water, milk, coffee) {
  if (!water && !milk && !coffee) return;

  let mediana = "50%";
  console.log(mediana);
  console.log("вода : " + water, "молока : " + milk, "кава : " + coffee);
  mediana = "79%";
  // console.log(b + 20);
  console.log(mediana);
  if (coffee && milk && water) {
    const b = 1;
    if (b) {
      console.log(b + 20);
    }
    console.log("Роблю каву з молоком");
  } else if (water && coffee) {
    console.log("Роблю каву ");
  } else if (water) {
    console.log("Додайте каву та молоко бо є лише вода");
  } else {
    console.log("тут нічого немає");
  }
}

mediana = "80%";

console.log(mediana);
// Методи, це функції.
// наша функція doCoffee() приймає три параметри
// Дуже важливо передавати всі аргументи по тій черзі,що ви вказали у функції
for (const b of a) {
  console.log(b);
}

doCoffee("water");
name("Artem");

// Функція яка немає ретурну(яка нічого не повертає) повертає завжди undefined
function maltiply(a, b) {
  //  Поверни у зовнішній код A помножене на B
  // arguments існує лише всередині функції утворених через ключове слово function(function declaration)
  console.log(arguments);
  // Array.from() - метод який намагається перетворити усе що ви передасте в масив
  const copyArg = Array.from(arguments);
  console.log(copyArg);
  return a * b;
}

console.log(maltiply(5, 5));

const b = 50;

// -------- Вивчимо що таке функціональна область видимості.
// --------------- Розберемо порядок виконання коду.
//-------------- Вивчимо що таке параметри та аргументи.
// -------------------------Ціль уроку:
//-------- Навчитися створювати та використовувати  функції
