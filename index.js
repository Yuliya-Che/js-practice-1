// PRACTICE 1
// == task-1 == //
// Объявите две переменные: admin и name.
// Запишите строку "Джон" в переменную name.
// Скопируйте значение из переменной name в admin.
// Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).

// let admin, name;
// name = "Джон";
// admin = name;
// alert(admin);

// == task-2 == //
// Завдання: Написати програму яка буде перевіряти чи рік народження користувача був високосним
// Наприклад: 2000, 2004, 2016 - високосні 1998, 2002, 1900 2100 - не високосні

// const leapYear = "Високосний рік";
// const notLeapYear = "Невисокосний рік";
// const invalid = "Невірно введені дані";
// let userYear = prompt();

// console.log(userYear);

// if (userYear === null) {
//   alert("Відміна користувачем");
// } else if (userYear == 0 || isNaN(userYear)) {
//   alert(invalid);
// } else if (userYear % 4 === 0) {
//   alert(leapYear);
// } else {
//   alert(notLeapYear);
// }

// == task-3 == //
// Написати програму де компютер загадає число від 1 до 10 і запропонує користувачу вгадати його
// Користувач вводить свій варіант і отримує результат(Виграв чи ні) Вивести результат в форматі
// "Вітаю ви вгадали число (тут варіант компютера)" або "Ви програли, компютер загадав (тут варіант компютера)"

// let userInput = prompt("Вгадай число від 1 до 10");
// // + заменяет Number; если поставить перед prompt +, то исключается возможность проверки на null
// // (последнее значение преобразовывается в число 0, если перед prompt поставить +);
// let computerInput = Math.floor(Math.random() * (11 - 1) + 1);

// // Проверка на кнопку Отмена
// if (userInput === null) {
//   alert("Відмінено користувачем");
// } else {

//   if (isNaN(userInput) || userInput < 1 || userInput > 10) {
//   alert("Введено не валідне значення");
//  else if (userInput === computerInput) {
//     alert(`Співпало: ${userInput} - ${computerInput}`);
//   } else {
//     alert(`Не співпало: ${userInput} - ${computerInput}`);
//   }
//   }

// let userInput = prompt("Введи число , друг!");
// let computerInput = Math.floor(Math.random() * (11 - 1) + 1);

// // проверка на кнопку Отмена
// if (userInput === null) {
//   alert("отмена");
// } else {
//   // валидация значений, если не Отмена
//   //   console.log(typeof userInput, userInput);
//   // проверка на НЕ ЧИСЛО и на НЕ В ДИАПАЗОНЕ ЧИСЕЛ
//   if (isNaN(userInput)  userInput < 1  userInput > 10) {
//     alert("Введи то, что тебя попросили!!!");
//   } else if (+userInput === computerInput) {
//     alert(`Совпало: ${ userInput } - ${ computerInput }`);
//   } else {
//     alert(`Не совпало ${ userInput } - ${ computerInput }`);
//   }
// }

// == task-4 == //
// Написати програму яка буде знаходити суму, різницю, добуток, частрку двох чисел
// Користувач вводить 2 числа потім вводить знак операції і отримує результат в форматі
// "Сума чисел a i b = результат"(такий шаблон для кожної відповіді)

// Module 2
// // == task-1 == //
// Написати ф-ю capitalize яка буде приймати строку і буде вертати нову строку де кожне слово буде починатися з великої літери.

// const capitalize = function (string) {

//   console.log(string);
//   const arrayCap = string.split(" ");
//   console.log(arrayCap);
//   const newArray = [];
//   for (let elem of arrayCap) {
//     console.log(elem);
//     console word = elem[0].toUpperCase() + `${elem.slice(1)}`;
//     console.log(word);
//     newArray.push(word);
//   }
//   console.log(newArray);
//   string = newArray.join(" ")
// }

// // == task-2 == //
// Написати ф-ю countVowels яка буде приймати строку і буде вертати кількість
// голосних літер.aeiouAEIOU - рядок з голосними в англ алфавіті

// countVowels('the quick brown fox') // 5

// function countVowels(string) {
//   // console.log(string);
//   const vowels = "aeiouAEIOU";
//   let total = 0;
//   for (let item of string) {
//     if (vowels.includes(item)) {
//       total += 1;
//     }
//   }
//   console.log(total);
// }

// countVowels("the quick brown fox"); // 5
// countVowels();

// PRACTICE 2
// // == task-1 == //
// Написати ф-ю яка приймає в себе 2 параметра (обєкт замовлення і обєкт з цінами товару) Ця ф-я має повернути ціну замовлення
// const toGetPrice = function () { }
// function toGetPrice() { }
// const productsPrice = { apple: 20, orange: 5, cheese: 12, pork: 45, bread: 23 };
// const orderA = { apple: 5, cheese: 1, bread: 3 };
// const orderB = { orange: 10, pork: 2, bread: 1 };

// const toGetPrice = (a, b) => {
//   const keysA = Object.keys(a);
//   const keysB = Object.keys(b);
//   let total = 0;
//   for (let key of keysB) {
//     if (keysA.includes(key)) {
//       total += a[key] * b[key];
//     }
//   }
//   return total;
// };

// console.log(toGetPrice(productsPrice, orderA));
// console.log(toGetPrice(productsPrice, orderB));

// // == task-2 == //
// Написати ф-ю isObjectEmpty яка перевіряє чи обєкт пустий чи ні. Якщо обєкт пустий то повернути true інакше false

// const isObjectEmpty = function (obj) {
//   const keys = Object.keys(obj);
//   // console.log(keys);
//   // console.log(keys.length);
//   if (keys.length === 0) return true;
//   return false;
// };
// console.log(isObjectEmpty({})); // true
// console.log(isObjectEmpty({ name: "user", age: 21 }));
// false

// // == task-3 == //
// Створити обєкт піци з полями і методами

// В обєкті має бути такі поля і методи:

// поле для збереження розміру піци +
// поле для збереження списку добавок +
// поле для збереження списку соусів
// метод для додавання добавки (Можна додати добавку якщо вона відсутня інакше показувати помилку)
// метод для додавання соусу (Можна додати соус якщо він відсутній інакше показувати, також помилка показувється якщо пробуємо видалити добавку, а там ще жодної немає)
// метод для видалення добавки (Можна видалити добавку якщо вона присутня в піці інакше показувати помилку, також помилка показувється якщо пробуємо видалити соус, а там ще жодного немає)
// метод для видалення соусу (Можна видалити соус якщо він присутній в піці інакше показувати помилку)
// метод для розрахунку загальної ціни піци (розмір + добавки + соуси) (ціна округлена до двох знаків після коми)
// метод для розрахунку загальної кількості калорій піци (розмір + добавки + соуси)
// метод який показує загальну інформацію про замовлення (ціну, калорії, список добавок і соусів) (Якщо піца валідна інакше показувати помилку)
// метод вибору розміру піци (Розмір піци можна змінити в будь-який момент)
// метод що показує час приготуванни в хвилинах в залежності від складності піци
// Метод валідації піци який поверне true якщо піца відповідає вимогам , а саме (вибраний розмір піци, є мінімум одна добавка, і мінімум один соус) інакше false (І виводить строку чого не вистачає (коржа, добавки, чи соусу)) (використовувати this)
const SIZES = {
  BIG: { price: 25, cal: 100, time: 15 },
  SMALL: { price: 15, cal: 50, time: 7 },
  MEDIUM: { price: 15, cal: 50, time: 7 },
};
const STUFFING = {
  CHEESE: { name: "CHEESE", price: 6.5, cal: 45, time: 2 },
  BEACON: { name: "BEACON", price: 10, cal: 70, time: 6 },
  TOMATO: { name: "TOMATO", price: 12.1, cal: 4, time: 5 },
  CHICKEN: { name: "CHICKEN", price: 9.3, cal: 30, time: 5.1 },
};
const SAUCES = {
  MUSTARD: { name: "MUSTARD", price: 3, cal: 5, time: 1 },
  KETCHUP: { name: "KETCHUP", price: 4.2, cal: 20, time: 1.5 },
  BOLOGNESE: { name: "BOLOGNESE", price: 7.5, cal: 50, time: 3 },
};
// Створити всі методи і перевірити чи вони працюють

const pizza = {
  size: [],
  stuff: [],
  sauces: [],
  isValid: false,

  setStuff(value) {
    if (this.stuff.includes(value))
      return console.log("Такая добавка уже есть");
    this.stuff.push(value);
    // console.log(this.stuff);
  },
  setSauces(value) {
    if (this.sauces.includes(value))
      return console.log(`Такой ${value.name} уже добавлен`);
    this.sauces.push(value);
    console.log(this.sauces);
  },

  delStuff(value) {
    if (!this.stuff.includes(value)) return console.log("Такой добавки нет");
    for (let i = 0; i < this.stuff.length; i += 1) {
      if (this.stuff[i] === value) {
        this.stuff.splice(i, 1);
        return console.log(this.stuff);
      }
    }
  },
  delSauces(value) {
    if (!this.sauces.includes(value)) return console.log("Такого соуса нет");
    for (let i = 0; i < this.sauces.length; i += 1) {
      if (this.sauces[i] === value) {
        this.sauces.splice(i, 1);
        return console.log(this.sauces);
      }
    }
  },

  getCost(num) {
    let totalPrice = 0;
    for (let i = 0; i <= num; i += 1) {
      if (
        this.size[i] === undefined ||
        this.stuff[i] === undefined ||
        this.sauces[i] === undefined
      )
        continue;
      // console.log(this.size[i].price);
      // console.log(this.stuff[i].price);
      // console.log(this.sauces[i].price);
      total += this.size[i].price + this.stuff[i].price + this.sauces[i].price;
    }
    return console.log(total);
  },
  getCalories() {},

  toShowOrder() {},
  toSetSize() {},
  toGetTotalTime() {},

  toValidateOrder() {},
};
console.log(pizza);
pizza.setStuff(STUFFING.CHEESE);
pizza.setStuff(STUFFING.BEACON);
pizza.setStuff(STUFFING.CHEESE);
pizza.setSauces(SAUCES.KETCHUP);
pizza.setSauces(SAUCES.MUSTARD);
pizza.setStuff(STUFFING.CHEESE);
pizza.delStuff(STUFFING.TOMATO);
// pizza.getCost(4);

const burger = {
  size: [],
  stuff: [],
  sauces: [],
  isValid: false,
};

// pizza.toSetSize.call(burger, SIZES.SMALL);
// pizza.setStuff.apply(burger, [STUFFING.BEACON]);

function myFunc(callback) {
  callback();
  // console.log(callback());
}
myFunc(pizza.toSetSize.bind(burger));
