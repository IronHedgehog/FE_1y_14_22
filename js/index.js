// Процедурне програмування

const salary = 30000;
const overtime = 10;
const rate = 20;

const getSalary = (salary, overtime, rate) => {
  return salary + overtime * rate;
};

getSalary(salary, overtime, rate);

// ООП
const worker = {
  salary: 30000,
  overtime: 10,
  rate: 100,
  getWage() {
    return this.salary + this.overtime * this.rate;
  },
};

console.log(worker.getWage());

// laptop mac

// Клас це абстракція(креслення)
// Клас це обʼєкт
class Computer {
  // constructor - це звичайна функція
  // класс має лише один конструктор
  // constructor () {}
  constructor(videocarta, procesor) {
    this.videocarta = videocarta;
    this.procesor = procesor;
  }
  // Метод класу
  getVideocartaName = () => {
    return this.videocarta;
  };

  setNewVideokarta = (newVideokarta) => {
    return (this.videocarta = newVideokarta);
  };
}

const PC = new Computer(1, 2);

console.log(PC);

console.log(PC.getVideocartaName());
const laptop = new Computer(10, 11);

console.log(laptop);

console.log(laptop.getVideocartaName());

laptop.setNewVideokarta(10);

console.log(laptop.getVideocartaName());

console.log(PC);

// ПРототипне наслідування

const animal = {
  legs: 4,
};
// create() - ми маємо передати від чого ми хочемо наслідуватись
const dog = Object.create(animal);
dog.name = "Alex";
console.log(dog.legs);

for (const key in dog) {
  // hasOwnProperty - перевіряє на власні властивості(не наслідувані)
  if (Object.hasOwnProperty.call(dog, key)) {
    console.log(dog[key]);
  }
}

class User {
  name;
  // #email - приватна властивість класу
  // Всіприватні властивості в зовнішньому коді недоступні
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }
}

const artem = new User({ name: "Artem", email: "adas@asda.com" });

console.log(artem.name);
// console.log(artem.#email);
