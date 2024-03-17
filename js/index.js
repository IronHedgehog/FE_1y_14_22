// щоб створити обʼєкт ми маємо записати {}

//width, height - ключ за яким зберігається значення в обʼєкті - ключ це завжди строка
// "200cm","120cm" - значення які ми встановлюємо.
const table = {
  width: "200cm", //ширина
  height: "120cm", // висота
  length: "80cm", // довжина

  plusWidth(width) {
    return parseFloat(this.width) + parseFloat(width);
  },

  // getCM3 - метод який повертає нам метри кубічні столу
  getCM3() {
    // this - посилання на обʼєкт в якому ми його використовуємо (тобто якщо ми використовуємо this  у обʼєкті table то this === table)
    console.log(this);
    console.log(
      parseFloat(this.width) * parseFloat(this.height) * parseFloat(this.length)
    );
  },
};
console.log(200 * 120 * 80);
// console.log(table.getCM3());

// для того щоб отримати існуючу властивість треба звернутись через крапку

console.log(table.height);
table.height = "200cm";
console.log(table.height);

table.plusWidth("20cm");
table.getCM3();
console.log(table);

//.mode - можимо створити поле в обʼєкті
// якщо поля немає і ви не даєте значення при зверненні то отримаєте undefined
// console.log(table.mode);
// mode: "Gamer"
table.mode = "Gamer";
// table.a = "Gamer";
// table.d = "Gamer";
// table.c = "Gamer";
// другий спосіб отримати значення
console.log(table["width"]);
// delete дозволяє видаляти поля обʼєкта
// delete table.getCM3;

console.log(table);

const name = "Artem";
const email = "arrr@gm.com";

// const user = {
//   name: name,
//   email: email,
// };
// короткі властивості
const user = {
  name,
  email,
};

console.log(user);

const test1 = "test";

const test = {
  [test1]: test1,
};

console.log(test);
