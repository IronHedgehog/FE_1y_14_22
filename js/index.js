const user = {
  name: "User",
  age: 18,
  mood: "Norm",
  bankAccount: {
    count: 1000,
  },
};
const user1 = {
  name1: "User1",
  age1: 17,
  mood1: "Ok",
};
// деструктуризація
// 1)const - ключове слово для створення змінної
// {} - означає,що ви бажаєте взяти якісь властивості з обʼєкту
//  = user - обʼєкт з якого ви бажаєте взяти значпення
// у середині фігурних дужок виаписуємо ключі які нам необхідні
// суть деструктуризації у тому,щоб можна було взяти лише необхідні значення

// Можемо щоб не сипало undefined задавати для змінних значення за замовчуванням через =
const { age1 } = user1;
const {
  mood = "ВсЕ СУПпЕР",
  name = "Завжди прекрасний",
  age = 18,
  status = "VIP",
} = user;

console.log(name, mood, age, status);
console.log(age1);
const { a, b, c } = user;
console.log(a, b, c);
const { q, w, e } = user;
console.log(q, w, e);

const user3 = { name1: "User3", age1: 17, mood1: "super" };

const { name1, age1: iosfoisDFKJ = 20, mood1 } = user3;

console.log(iosfoisDFKJ);
// badMood - псевдонім змінної mood1
// в данному випадку рест оператор(...) збирає обʼєкт
// окремо ми з вами деструктуризували badmood щоб мати до нього швидкий доступ

// ... - або рест оператор або спреад оператор
// рест збирає данні в масив або обʼєкт
// spread розпиляє по одному значенню
const { mood1: badMood, name1: goodName, ...rest } = user3;
console.log(badMood, goodName);
console.log(rest);

const user10 = {
  name: "User10",
  age: 30,
  mood: "Norm",
  bankAccount: {
    count: 100000,
  },

  cards: ["first", "third"],
};

// console.log(user10.cards);
// console.log(user10.bankAccount.count);

// є можливість глибокої деструктуризації
// для цього ми пишемо : та літерал того,що бажаємо деструктурузувати і в середину літералу можна записати будь яку назву змінної
const {
  bankAccount: { count },
  cards: [card1, card2],
} = user10;

console.log(card1, card2);
console.log(count);

const arr = [100000, 50000, 10000];

// використати цикл для перебору

for (const element of arr) {
  console.log(element);
}
// взяти значення за індексом
console.log(arr[1]);
// деструктуризувати значення
const [f, g, h] = arr;
console.log(f);
console.log(g);
console.log(h);
// окремо створили змінні для перевизначення
let color1, color2, color3;

[color1, color2, color3, alpha = 0.5] = arr;

console.log(color1, color2, color3, alpha);
// для того,щоб пропустити непотрібний елемент,нам треба ставити коми
const [, , blue] = arr;
const [red, ...colors] = arr;

console.log(red, colors);
