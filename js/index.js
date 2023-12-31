//обʼєкт = це складний тип данних(єдиний)
// обʼєкт створюється за допомогою {}фігурних дужок
// Чому складний тип данних томущо там багато може бути інших типів данних.
//Складні типи даних зберігаються за посиланням
const user = {
  nickName: "Grinch",
  height: 180,
  weight: 80,
  subscribe: true,
  stillNewYear() {
    console.log("New Year is end");
  },
};

const header = {
  // atributes:
  // textContent:
  // styles:
};
let abc = 4;

abc = 5;

const body = document.body;
// querySelector =   то є метод який дозволяє нам знайти будь який html тег за будь якою ознакою

//querySelector завжди ми всередину маємо передавати строку з ознакою за якою ми шукаємо [] = селектор атрибуту  . = селектор класу # = селектер id
//  Я хочу знайти елемент з ознакою класс button
// якщо не знаходить елемент повертає null
const button = document.querySelector(".button");
console.log(button);
button.textContent = "Надіслати грощі.Ви банкрот";

const img = document.querySelector(".img-fluid");

console.log(img);
img.src =
  "https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg";
img.alt = "picture";

console.log(img);
