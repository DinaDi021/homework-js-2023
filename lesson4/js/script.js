// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function calcTriangle(a, b) {
    return a * b;
}

let resTriangle = calcTriangle(16, 25);
console.log(resTriangle);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function calcCircle(r) {
    return Math.PI * r * r;
}

let resCircle = calcCircle(5);
console.log(resCircle);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function calcCylinder(r, h) {
    const baseArea = Math.PI * r * r;
    const sideSurfaceArea = 2 * Math.PI * r * h;
    const area = 2 * baseArea + sideSurfaceArea;
    return area;
}

let resCylinder = calcCylinder(10, 20);
console.log(resCylinder);

// - створити функцію яка приймає масив та виводить кожен його елемент

function newArr(array) {
    for (const item of array) {
        console.log(item);
    }
}

let arr = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

newArr(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function addParagraph(text, tag) {
    document.write(`<${tag}>${text}<${tag}>`);
}

addParagraph('blablablabla', 'p');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function list(text, tag) {
    document.write('<ul>');
    document.write(`<${tag}>${text}</${tag}>`);
    document.write('</ul>');
}

list('blablablabla', 'li');
list('blablablabla', 'li');
list('blablablabla', 'li');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function itemList(text, tag) {
    document.write('<ul>');
    for (let i = 0; i < 3; i++) {
        document.write(`<${tag}>${text}</${tag}>`);
    }
    document.write('</ul>');
}

itemList('blablablabla', 'li');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function printerArr(array) {
    for (const item of array) {
        console.log(item);
        document.write(`<div>
            <ul>
                <li>${item}</li>
            </ul>
        </div>`)
    }
}

let arr2 = [1, 2, 3, true, 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
printerArr(arr2);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {name: 'vasya', age: 31, status: false, id: 1},
    {name: 'petya', age: 30, status: true, id: 2},
    {name: 'kolya', age: 29, status: true, id: 3},
    {name: 'olya', age: 28, status: false, id: 4},
    {name: 'max', age: 30, status: true, id: 5},
    {name: 'anya', age: 31, status: false, id: 6},
    {name: 'oleg', age: 28, status: false, id: 7},
    {name: 'andrey', age: 29, status: true, id: 8},
    {name: 'masha', age: 30, status: true, id: 9},
    {name: 'olya', age: 31, status: false, id: 10},
];

function addArrFilter(array) {
    let filteredUsers = [];
    for (const user of array) {
        if (user.id || user.name || user.age) {
            filteredUsers.push(user);
            document.write(`<div>id:${user.id},  name:${user.name}, age:${user.age}</div>`);
        }
    }
    return filteredUsers;
}

addArrFilter(users);


// - створити функцію яка повертає найменьше число з масиву

function minNumber(num) {
    let min = num[0];
    for (let i = 1; i < num.length; i++) {
        if (num[i] < min) {
            min = num[i];
        }
    }

    return min;
}

let arr3 = [1, 2, 3, 4, 5];
console.log(minNumber(arr3));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum (arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

console.log(sum(arr3));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
    let a = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = a;
    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let sum = 0;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            sum = sumUAH / currencyValues[i].value;
        }
    }
    return sum;
}

console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));