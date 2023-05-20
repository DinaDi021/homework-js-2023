// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

cutString = (str, n) => {
    let cutStr = [];
    for (let i = 0; i < str.length; i += n) {
        cutStr.push(str.substring(i, i + n))
    }
    return cutStr
}
document.writeln(cutString('наслаждение', 3));
document.write(`<br><br>`);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.

let str = 'Каждый охотник желает знать';

// document.writeln(delete_characters(str, 7)); // Каждый

delete_characters = (str, length) => {
    return str.slice(0, length)
}

document.writeln(delete_characters(str, 7));
document.write(`<br><br>`);

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.

let str1 = "HTML JavaScript PHP";

// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

insert_dash = (str) => {
    return str.toUpperCase().replaceAll(' ', '-')
}

document.writeln(insert_dash(str1));
document.write(`<br><br>`);

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let str2 = 'каждый охотник желает знать'

func = (str) => {
    return str[0].toUpperCase() + str.slice(1)
}

document.writeln(func(str2));
document.write(`<br><br>`);

// - Дано список імен.

let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

funkName = (name) => {
    name = name.replaceAll('..' , ' ')
                .replaceAll('---' , ' ')
                .replaceAll('__' , ' ')
    return name;
}

document.writeln(funkName(n1));
document.writeln(funkName(n2));
document.writeln(funkName(n3));
document.write(`<br><br>`);

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

randomNumber = (numLenght) => {
    let randomNum = [];
    for (let i = 0; i < numLenght; i++) {
        const item = randomNum [i];
        randomNum.push(Math.round(Math.random()*100));
    }
    return randomNum
}
document.writeln(randomNumber(20));
document.write(`<br><br>`)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати
// його за допомоги sort

let sortNumber = randomNumber(10).sort((a, b) => a - b);
document.writeln(sortNumber);
document.write(`<br><br>`);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати
// його за допомоги filter, залишивши тільки парні числа (без 0!)

let filterNumber = randomNumber(10).filter(value => {
    return value % 2 === 0
})
document.writeln(filterNumber);
document.write(`<br><br>`);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str) => {
    let words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join(' ');
}

document.writeln(capitalize(str2));
document.write(`<br><br>`);

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях

let email = 'someemail@gmail.com'
let email1 =  'someeMAIL@gmail.com'
let email2 =  'someeMAIL@i.ua'
let email3 =  'some.email@gmail.com'

// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні".
// Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

emailValid = (email) => {
    if (!email.includes('@')) {
        document.writeln(`email повинен містить знак '@'`)
    } else if (email.indexOf('@') < 1) {
        document.writeln(`email повинен містити хоча б 1 знак перед '@'`)
    } else if (email.indexOf('.', email.indexOf('@')) <= email.indexOf('@') + 2) {
        document.writeln(`email повинен містити хоча б 2 знаки після '@'`)
    } else {
        return email
    }
}
// let email4 = 'di.serdyckgmail.com'
// let email5 = '@gmail.com'
// let email6 = '1@.com'

document.writeln(emailValid(email));
document.write(`<br>`);
document.writeln(emailValid(email1));
document.write(`<br>`);
document.writeln(emailValid(email2));
document.write(`<br>`);
document.writeln(emailValid(email3));
// document.write(`<br>`);
// document.writeln(emailValid(email4));
// document.write(`<br>`);
// document.writeln(emailValid(email5));
// document.write(`<br>`);
// document.writeln(emailValid(email6))
document.write(`<br><br>`);

// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length));

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
    let symb = "о", str5 = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

count = (str, stringsearch) => {
let strOriginal = str.length;
let strNew = str.replaceAll('о', '').length;
return strOriginal - strNew;
}

document.writeln(count(str5, symb));
// document.writeln(count(str, symb));
// document.writeln(count(str1, symb));
document.write(`<br><br>`);

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
    let str6 = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

cutString = (str, n) => {
    let words = str.split(' ');
    let cutStr = words.slice(0, n);
    return cutStr.join(' ');
}
document.writeln(cutString(str6, 5))

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let arrBook = [
    {title: 'A Game of Thrones. A Song of Ice and Fire', pageCount: 884, authors: ['George R. R. Martin'], genre: ['Fantasy']},
    {title: 'The Witcher: The Last Wish', pageCount: 288, authors: ['Andrzej Sapkowski'], genre: ['Fantasy']},
    {title: 'The Lord of the Rings. The Fellowship of the Ring', pageCount: 448, authors: ['J. R. R. Tolkien'], genre: ['Fantasy']},
    {title: 'Alice\'s Adventures in Wonderland', pageCount: 110, authors: ['Lewis Carroll'], genre: ['Fantasy']},
    {title: 'The Hobbit, or There and Back Again', pageCount: 400, authors: ['J. R. R. Tolkien'], genre: ['Fantasy']},
    {title: 'Pride and Prejudice', pageCount: 500, authors: ['Jane Austen'], genre: ['Romance']},
    {title: 'His Dark Materials', pageCount: 600, authors: ['Philip Pullman'], genre: ['Fantasy']},
    {title: 'Harry Potter and the Philosopher\'s Stone', pageCount: 750, authors: ['J. K. Rowling'], genre: ['Fantasy']},
    {title: 'They Used to Play on Grass', pageCount: 290, authors: ['Terry Venables', 'Gordon Williams'], genre: ['Sport', 'adult fiction']},
    {title: 'The Diary of a Nobody', pageCount: 305, authors: ['George Grossmith', 'Weedon Grossmith'], genre: ['Comic']}
]

// -знайти наібльшу книжку.

let sortBookPageCountMax = arrBook.sort((a, b) => b.pageCount - a.pageCount);
console.log(sortBookPageCountMax[0]);

// - знайти книжку/ки з найбільшою кількістю жанрів

let sortBookGenre = arrBook.sort((a, b) => b.genre.length - a.genre.length);
let maxGenre = sortBookGenre[0].genre.length;
let bookMaxGenre = sortBookGenre.filter(value => value.genre.length === maxGenre);
console.log(bookMaxGenre);

// - знайти книжку/ки з найдовшою назвою

let sortBookTitle = arrBook.sort((a, b) => b.title.length - a.title.length);
console.log(sortBookTitle[0]);

// - знайти книжку/ки які писали 2 автори

let filterTwoAuthors = arrBook.filter(value => value.authors.length === 2 );
console.log(filterTwoAuthors);

// - знайти книжку/ки які писав 1 автор

let filterOneAuthors = arrBook.filter(value => value.authors.length === 1);
console.log(filterOneAuthors);

// - вісортувати книжки по кількості сторінок по зростанню

let sortBookPageCount = arrBook.sort((a, b) => a.pageCount - b.pageCount);
console.log(sortBookPageCount);