// badMood - псевдонім змінної mood1
// в данному випадку рест оператор(...) збирає обʼєкт
// окремо ми з вами деструктуризували badmood щоб мати до нього швидкий доступ

// ... - або рест оператор або спреад оператор
// рест збирає данні в масив або обʼєкт
// spread розпиляє по одному значенню
// const { mood1: badMood, name1: goodName, ...rest } = user3;
// console.log(badMood, goodName);
// console.log(rest);

const table = {
  material: "wood",
  width: 100,
  height: 200,
  versions: {
    pro: true,
    gamers: false,
    work: true,
  },
};
// Стандартне звернення до властивості обʼєкта
console.log(table.material);
// Деструктуризація
// деструктуризація обʼєктів
// усередені фігурних дужок ми можемо взяти необхідні властивості
// Якщо змінна вже існує,то нам треба її переназвати для цього використати :
const {
  material: material1,
  width: width1,
  height: height1,
  versions: { pro: first, gamers, work },
} = table;
console.log(first);
const table2 = {
  material: "iron",
  width: 100,
  height: 200,
};
const { material: material2 } = table2;
console.log(material2);
