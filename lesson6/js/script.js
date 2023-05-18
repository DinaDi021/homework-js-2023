// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

console.log(`${str1} ${str1.length}`);
console.log(`${str2} ${str2.length}`);
console.log(`${str3} ${str3.length}`);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let up1 = str1.toUpperCase();
console.log(up1);

let up2 = str2.toUpperCase();
console.log(up2);

let up3 = str3.toUpperCase();
console.log(up3);


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let str11 = 'HELLO WORLD';
let str22 = 'LOREM IPSUM';
let str33 = 'JAVASCRIPT IS COOL';

let lower11 = str11.toLowerCase();
console.log(lower11);

let lower22 = str22.toLowerCase();
console.log(lower22);

let lower33 = str33.toLowerCase();
console.log(lower33);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str4 = ' dirty string   ';
console.log(str4.trim());

//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']


let str = 'Ревуть воли як ясла повні';

stringToarray = (str) => {
    return str.split(' ');
}
console.log(stringToarray(str));


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

let map = numbers.map(value => {
    return String(value);
});

console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(array, direction) {
    if (direction === 'ascending') {
        return array.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return array.sort((a, b) => b - a);
    }
}

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'))

// ==========================
// - є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration

console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filter = coursesAndDurationArray.filter(value => {
    return value.monthDuration >= 5
});

console.log(filter);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let map1 = coursesAndDurationArray.map((cours, index) => {
    let c = {...cours}
    c.id = index;
    return c;
})

console.log(map1);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' },
];

// - знайти піковий туз

let filterSpadeAce = cards.filter(card => {
    return card.cardSuit === 'spade' && card.value === 'ace'
});
console.log(filterSpadeAce);

// - всі шістки

let filterValueSix = cards.filter(card => {
    return card.value === '6'
});
console.log(filterValueSix);

// - всі червоні карти

let filterRedCards = cards.filter(card => {
    return card.color === 'red'
})
console.log(filterRedCards);

// - всі буби

let filterDiamond = cards.filter(card => {
    return card.cardSuit === 'diamond'
})
console.log(filterDiamond);

// - всі трефи від 9 та більше

let filterClubsFromNine = cards.filter(card => {
    return card.cardSuit === 'clubs' && (card.value >= '9' || parseInt(card.value) >= 9)
})
console.log(filterClubsFromNine)

//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

console.log(cards.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade') {
        accumulator.cardSuitSpades.push(card)
    } else if (card.cardSuit === 'diamond') {
        accumulator.cardSuitDiamonds.push(card)
    }else if (card.cardSuit === 'heart') {
        accumulator.cardSuitHearts.push(card)
    } else if (card.cardSuit === 'clubs') {
        accumulator.cardSuitClubs.push(card)
    }
    return accumulator;
}, {cardSuitSpades: [], cardSuitDiamonds: [], cardSuitHearts:[], cardSuitClubs:[]}));

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

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

// --написати пошук всіх об'єктів, в який в modules є sass

let filterSass = coursesArray.filter(value => {
    return value.modules.includes('sass');
});
console.log(filterSass);

// --написати пошук всіх об'єктів, в який в modules є docker

let filterDocker = coursesArray.filter(value => {
    return value.modules.includes('docker');
});
console.log(filterDocker);