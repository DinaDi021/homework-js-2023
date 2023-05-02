// hw_1.1
// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let greetings = 'hello';
console.log(greetings);

let title = 'owu';
console.log(title);

let linkOne = 'com';
console.log(linkOne);

let linkTwo = 'ua';
console.log(linkTwo);

let numberA = 1;
console.log(numberA);

let numberB = 10;
console.log(numberB);

let numberC = -999;
console.log(numberC);

let d = 123;
console.log(d);

let e = 3.14;
console.log(e);

let f = 2.7;
console.log(f);

let g = 16;
console.log(g);

let check = true;
console.log(check);

let check2 = false;
console.log(check2);

// hw_1.2
// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Diana';
let middleName = 'Rostislavovna';
let lastName = 'Ilina';

let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

// hw_1.3
//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a = 100;
console.log(typeof a, a);

let b = '100';
console.log(typeof b, b);

let c = true;
console.log(typeof c, c);


//hw_1.4
// За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt('Enter your name')
let surname = prompt('Enter your surname')
let age = parseInt(prompt('Enter your age'))

console.log(name + ' ' + surname + ' ' + age);
console.log(typeof age);