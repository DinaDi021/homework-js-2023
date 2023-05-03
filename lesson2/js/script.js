//Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr;
arr = [1, 2, 3, 4, 'five', 'six', 'seven', 'eight', true, 10];
console.log(arr);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'A Game of Thrones. A Song of Ice and Fire',
    pageCount: 884,
    genre: 'fantasy'
}

console.log(book1);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.

let book2 = {
    title: 'The Witcher: The Last Wish',
    pageCount: 288,
    genre: 'fantasy',
    authors: [
        {name: 'George Orwell', age: 46}
    ]
}

console.log(book2);

let book3 = {
    title: 'The Lord of the Rings. The Fellowship of the Ring',
    pageCount: 448,
    genre: 'fantasy',
    authors: [
        {name: 'Andrzej Sapkowski', age: 74}
    ]
}
console.log(book3);

let book4 = {
    title: 'Alice\'s Adventures in Wonderland',
    pageCount: 110,
    genre: 'fantasy',
    authors: [
        {name: 'J. R. R. Tolkien', age: 81}
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

if (time < 15) {
    console.log('число попадає в першу частину години');
} else if (time < 30) {
    console.log('число попадає в другу частину години');
} else if (time < 45) {
    console.log('число попадає в третю частину години');
} else {
    console.log('число попадає в четверту частину години');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

let date = +prompt('обери день');

if (date <= 10) {
    console.log('число попадає в першу декаду');
} else if (date <= 20) {
    console.log('число попадає в другу декаду');
} else {
    console.log('число попадає в третю декаду');
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

let x1 = prompt('enter your value');
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
} else {
    console.log()
}

if (coursesAndDurationArray [1] ['monthDuration'] >= 5) {
    console.log('Супер');
} else {
    console.log()
}

if (coursesAndDurationArray [2] ['monthDuration'] >= 5) {
    console.log('Супер');
} else {
    console.log()
}

if (coursesAndDurationArray [3] ['monthDuration'] >= 5) {
    console.log('Супер');
} else {
    console.log()
}

if (coursesAndDurationArray [4] ['monthDuration'] >= 5) {
    console.log('Супер');
} else {
    console.log()
}

if (coursesAndDurationArray [5] ['monthDuration'] >= 5) {
    console.log('Супер');
} else {
    console.log()
}

