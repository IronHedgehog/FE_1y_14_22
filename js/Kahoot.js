const string = "Hello!";

const helloLength = string.length;
const lastIndex = helloLength - 1;

const index = string.indexOf("!");

console.log(helloLength);
console.log(index);

const stringg = "asdasd";

console.log(string + " " + stringg);
// інтерполяція

console.log(`aksdmplmdfmpmewfpmaopeff \n  las;d  ${stringg}`);
console.log(`Привіт! ${string}`);

const str = "Hello, world!";

// Змінна = то є коробка в якій ми можемо зберігати будь яку інформацію

// UpperCase = верхній регістр = великі букви
// to = до
// toUpperCase = до великих букв
console.log("Hello, world!".toLocaleUpperCase());

const message = "test message";

// indexOf = Завжди повертає індекс(Число)
// Якщо строки яку ви шукаєте не існує то він має змогу повернути лише -1
// якщо знаходить він повертає індекс

console.log(message.indexOf("YES")); // -1

// includes метод який повертає true якщо елемент який ви шукаєте є або false якщо елементу який ви шукаєте немає
//чи включає в себе? так/ні
console.log(message.includes("t"));

const sendValue = "     і ш     ";
//trim()метод який дозволяє обрізати пробіли в кінці рядка та на початку якщо рядок це суцільні пробіли то ці пробіли будуть видалені
console.log(sendValue.trim());

// length = довжина
//  останній index =  довжина -1
// index починає розраховуватись з 0 а довжина з 1

// / * + - %
// відсоток це остача від ділення

const num1 = 10;
const num2 = 3;

const num3 = num1 % num2;

console.log(num3);

// Властивості та методи
// Властивість - характеристика пишуться без дужок;
// Методи - дія  Всі методи пишуться з дужками в кінці
//
