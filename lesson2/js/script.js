//Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr;
arr = [1, 2, 3, 4, 'five', 'six', 'seven', 'eight', true, 10];

console.log(arr [0]);
console.log(arr [1]);
console.log(arr [2]);
console.log(arr [3]);
console.log(arr [4]);
console.log(arr [5]);
console.log(arr [6]);
console.log(arr [7]);
console.log(arr [8]);
console.log(arr [9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'A Game of Thrones. A Song of Ice and Fire',
    pageCount: 884,
    genre: 'fantasy'
}

console.log(book1);

let book12 = {
    title: 'A Game of Thrones. A Song of Ice and Fire',
    pageCount: 884,
    genre: 'fantasy'
}

console.log(book12);

let book13 = {
    title: 'A Game of Thrones. A Song of Ice and Fire',
    pageCount: 884,
    genre: 'fantasy'
}

console.log(book13);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.

let book2 = {
    title: 'The Witcher: The Last Wish',
    pageCount: 288,
    genre: 'fantasy',
    authors: [
        {name: 'Andrzej Sapkowski', age: 46},
        {name: 'name', age: 55}
    ]
}

console.log(book2);

let book3 = {
    title: 'The Lord of the Rings. The Fellowship of the Ring',
    pageCount: 448,
    genre: 'fantasy',
    authors: [
        {name: 'J. R. R. Tolkien', age: 74}
    ]
}
console.log(book3);

let book4 = {
    title: 'Alice\'s Adventures in Wonderland',
    pageCount: 110,
    genre: 'fantasy',
    authors: [
        {name: 'Lewis Carroll', age: 81}
    ]
}

console.log(book4)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let arr2 = [
    {name: 'Diana', username: 'lady_di', password: '124fkfkfk'},
    {name: 'Vlad', username: 'van_hask', password: 'sdfs5df45f'},
    {name: 'Mark', username: 'mark.work1', password: 'df5e4f8ef4'},
    {name: 'Кatya', username: 'k_kolts_', password: 'we89dfde897'},
    {name: 'Alyona', username: 'dr.alena', password: 'w5e45w5'},
    {name: 'Pavel', username: 'pavel_omelchuk', password: 'rfrf5r4f45'},
    {name: 'Alex', username: 'limon_alex', password: 'f1r5f1r51'},
    {name: 'Ivan', username: 'ivan_travolta', password: 'we584w4e5w'},
    {name: 'Dima', username: 'dima_rymka', password: 'w4ew848we'},
    {name: 'Veronika', username: 'nika_31', password: 'we15w5re'},
]

console.log(arr2 [0] ['password']);
console.log(arr2 [1] ['password']);
console.log(arr2 [2] ['password']);
console.log(arr2 [3] ['password']);
console.log(arr2 [4] ['password']);
console.log(arr2 [5] ['password']);
console.log(arr2 [6] ['password']);
console.log(arr2 [7] ['password']);
console.log(arr2 [8] ['password']);
console.log(arr2 [9] ['password']);


// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 2;

if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

let a = +prompt('введіть значення');

if (a === 1 || a === 0 || a === -3) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('введіть час');

if (time > 0 && time < 15) {
    console.log('число попадає в першу частину години');
} else if (time > 15 && time < 30) {
    console.log('число попадає в другу частину години');
} else if (time > 30 && time < 45) {
    console.log('число попадає в третю частину години');
} else if (time > 45 && time < 60) {
    console.log('число попадає в четверту частину години');
} else {
    console.log('?????');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

let date = +prompt('обери день');

if (date > 0 && date <= 10) {
    console.log('число попадає в першу декаду');
} else if (date > 10 && date <= 20) {
    console.log('число попадає в другу декаду');
} else if (date > 20 && date <= 31) {
    console.log('число попадає в третю декаду');
} else {
    console.log('???????')
}


// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

let day = prompt('enter ordinal number of the day of the week');
switch (day) {
    case "1":
        console.log('Monday');
        break;
    case "2":
        console.log('Tuesday');
        break;
    case "3":
        console.log('Wednesday');
        break;
    case "4":
        console.log('Thursday');
        break;
    case "5":
        console.log('Friday');
        break;
    case "6":
        console.log('Saturday');
        break;
    case "7":
        console.log('Sunday');
        break;
    default:
        console.log('????');
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.


let number1 = +prompt('Enter first number');
let number2 = +prompt('Enter second number');

if (number1 > number2) {
    console.log('максимальне число: ' + number1);
} else if (number1 < number2) {
    console.log('максимальне число: ' + number2);
} else {
    console.log('Числа рівні');
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
// (хибноподібні, тобто приводиться до false)

let x1;
x1 = x1 || 'default';
console.log(x1);

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша
// за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray [0] ['monthDuration'] >= 5) {
    console.log('Супер');
}

if (coursesAndDurationArray [1] ['monthDuration'] >= 5) {
    console.log('Супер');
}

if (coursesAndDurationArray [2] ['monthDuration'] >= 5) {
    console.log('Супер');
}

if (coursesAndDurationArray [3] ['monthDuration'] >= 5) {
    console.log('Супер');
}

if (coursesAndDurationArray [4] ['monthDuration'] >= 5) {
    console.log('Супер');
}

if (coursesAndDurationArray [5] ['monthDuration'] >= 5) {
    console.log('Супер');
}

// Додаткові завдання

//- Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
//  кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив,
//  в якому  3 і більше елементи.
//  Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];

if (friends.length >= 3) {
    console.log('це великий масив, в якому  3 і більше елементи');
} else {
    console.log('це маленький масив, в якому менше 3-х елементів');
}


//   - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//  Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

let b = +prompt('enter number');
let c = +prompt('enter number');
let d = +prompt('enter number');

let middleNumber;

if ((c < b && b < d) || (d < b && b < c)) {
    middleNumber = b;
} else if ((b < c && c < d) || (d < c && c < b)) {
    middleNumber = c;
} else if ((b < d && d < c) || (c < d && d < b)) {
    middleNumber = d;
} else {
    console.log('error');
}
console.log(middleNumber);

if ((c < b && b < d) || (d < b && b < c)) {
    console.log('перше число знаходиться між двома іншими');
} else {
    console.log('перше число не знаходиться між двома іншими');
}


//   - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//    result = 'Мало';
// } else {
//    result = 'Багато';
// }

let result = (a + b < 4) ? 'Мало' : 'Багато';

console.log(result);


//  - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

let num = +prompt('enter number');

num = num === 0 ? 'zero' :
    num > 0 ? 'positive':
    num < 0 ? 'negative' :
        'error';
console.log(num);


// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

let test;

test = true;
if (test) {
    console.log('Вірно');
} else {
    console.log('Неправильно');
}

test = false;
if (!test) {
    console.log('Вірно');
} else {
    console.log('Неправильно');
}

test = true;
test ? console.log('Вірно') : console.log('Неправильно');
test = false;
test ? console.log('Вірно') : console.log('Неправильно');

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
//

let js = prompt('Яка «офіційна» назва JavaScript?');

if (js === 'ECMAScript') {
    console.log('Правильно!');
} else {
    console.log('Не знаєте? ECMAScript!')
}

//  - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
// Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let apartment = +prompt('введіть номер квартири');

if (apartment > 0 && apartment <= 20) {
    console.log('квартира знаходиться в 1 під\'їзді');
} else if (apartment > 20 && apartment <= 48) {
    console.log('квартира знаходиться в 2 під\'їзді');
} else if (apartment > 48 && apartment <= 90) {
    console.log('квартира знаходиться в 3 під\'їзді');
} else {
    console.log('???????')
}

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО,
// якщо змінна не рівна 10 - тоді НЕВІРНО

let x5 = +prompt('введіть число');

if(x5 === 10) {
    console.log('ВІРНО')
} else {
    console.log('НЕВІРНО')
}

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
// Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

let temp =  +prompt('чи ми йдемо сьогодні в OKTEN на навчання? Яка зараз температура?');

if (temp >= 10 && temp <= 22) {
    console.log('ми йдемо ВЧИТИСЯ');
} else {
    console.log('сидимо вдома і вчимося ОНЛАЙН')
}

//  - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

let game = prompt('enter number for the game');
switch (game) {
    case "1":
        console.log('Авто');
        break;
    case "2":
        console.log('Квартира');
        break;
    case "3":
        console.log('Мотоцикл');
        break;
    case "4":
        console.log('Телефон');
        break;
    case "5":
        console.log('Xbox');
        break;
    default:
        console.log('число не вірне');
}

