// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let calcTriangle = (a, b) => a * b;
console.log(calcTriangle(16, 25));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let calcCircle = (r) => Math.PI * r * r;
console.log(calcCircle(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let calcCylinder = (r, h) => 2 * (Math.PI * r * r) + (2 * Math.PI * r * h);
console.log(calcCylinder(10, 20))

// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
let newArr = (array) => {
    for (const item of array) {
        console.log(item);
    }
}

newArr(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let addParagraph = (text, tag) => {
    document.write(`<${tag}>${text}<${tag}>`);
}

addParagraph('blablablabla', 'p');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let list = (text) => {
    document.write(`
        <ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>
    `);
}

list('blablablabla');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let itemList = (text, count) => {
    document.write('<ul>');
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

itemList('blablablabla', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let printerArr = (array) => {
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

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

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

let addFilter = (array) => {
    let filterUsers = [];
    for (const user of array) {
        if (user.id || user.name || user.age) {
            filterUsers.push(user);
            document.write(`<div>id:${user.id},  name:${user.name}, age:${user.age}</div>`);
        }
    }
    return filterUsers;
}

addFilter(users);

// - створити функцію яка повертає найменьше число з масиву

let numArr = [1, 2, 3, 4, 5];

let getMinNumber = (array) => {
    let minNum = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < minNum) {
            minNum = array[i];
        }
    }
    return minNum;
}

console.log(getMinNumber(numArr));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sumArr = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(sumArr(numArr))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr, index1, index2) => {
    let a = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = a;
    return arr;
}

console.log(swap([11,22,33,44],0,1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let sum = 0;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            sum = sumUAH / currencyValues[i].value;
        }
    }
    return sum;
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));