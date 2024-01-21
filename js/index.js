// 6  значень які за замовчуванням дорівнюють false
// 0 null NaN false "" undefined
// АБСОЛЮТНО ВСІ ІНШІ ЗНАЧЕННЯ = TRUE
// повертає значення яке набуває false або останню правду
// console.log(false && "к" && "false" && "Привіт");
// true && "к"  - к
// "к" && "false" - false
// "false" && "Привіт" - "Привіт"
// console.log(false || "к" || "false" || "Привіт");
// ІНСТРУМЕНТИ РОЗГАЛУДЖЕННЯ КОДУ
// Розгалудження коду =  Виконання коду за умовою
// Перший інструмент - if - якщо?
// якщо в круглі дужки іфу передати вираз який буде завжди false то код всередині фігурних дужок іфу ніколи не виконається

let subscribe = "plus";

const plus = 300;

const plusPlus = 600;

const plusPlusExtra = 900;

const user = 1000;

// В круглих дужках будь який вираз який приводить до false то код в фігурних дужках ніколи не виконається

//if (лінивий) -  як тільки він бачить співпадіння першого кейсу він його виконує та виходить

if (user >= plus) {
  console.log("Ви можете придбати підписку plus");
} else if (user >= plusPlus) {
  console.log("Ви можете придбати підписку plus plus");
} else {
  console.log("Ви можете придбати підписку plusPlusExtra");
}

if (user >= plus) {
  console.log("Ви можете придбати підписку plus");
}

if (user >= plusPlus) {
  console.log("Ви можете придбати підписку plus plus");
}

if (user >= plusPlusExtra) {
  console.log("Ви можете придбати підписку plus plus Extra");
}
