// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function minNumber(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    return min;

}

console.log(minNumber(25, 43, 15));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function maxNumber(a, b, c) {
    let max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}

console.log(maxNumber(52, 101, 12));

// - створити функцію яка повертає найбільше число з масиву

arrNumber = [10, 20, 110, 500, 30, 40, 55];

function maxNumberArr(num) {
    let max = num[0];
    for (let i = 1; i < num.length; i++) {
        if (num[i] > max) {
            max = num [i];
        }
    }
    return max;
}

console.log(maxNumberArr(arrNumber))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function arithmeticalMean(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i] / num.length;
    }
    return sum;
}

console.log(arithmeticalMean(arrNumber))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function numberFunc(...c) {
    let maxN = c [0];
    let minN = c [0];
    for (let i = 1; i < c.length; i++) {
        if (c[i] > maxN) {
            maxN = c[i];
        }
        if (c[i] < minN) {
            minN = c[i];
        }
    }
    console.log(maxN);
    return minN;
}

numberFunc(10, 15, 30, 45, 55);


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function random(numlenght){
let arr = [];
    for (let i = 0; i < numlenght; i++) {
        const arrElement = arr[i];
        arr[arr.length] = Math.round(Math.random()*100);
    }
    return arr;
}

console.log(random(10));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве
// значення діапазону.

function randomNumder(numlenght, limit){
let arr = [];
    for (let i = 0; i < numlenght; i++) {
        const arrElement = arr[i];
        arr[arr.length] = Math.round(Math.random()*limit);
    }
    return arr;
}

console.log(randomNumder(100, 500));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function arrReverse(num){
    let arrRev;
    for (let i = 0; i < num.length; i++) {
        arrRev = [...num].reverse();
    }
    return arrRev;
}

console.log(arrReverse(arrNumber));

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

function foobar() {
    if (arguments.length === 1) {
        return arguments[0];
    } else if (arguments.length === 2) {
        return arguments[0] + arguments[1];
    }
}

console.log(foobar(20));
console.log(foobar(10, 55));


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

arr1 = [1, 2, 3, 4 , 5];
arr2 = [10, 20, 30, 40, 50, 60];

function sumArr (array1, array2) {
    let maxLenght = array1.length > array2.length ? array1.length : array2.length;
    let result = [];
    for (let i = 0; i < maxLenght; i++) {
        result[i] = (array1[i] !== undefined ? array1[i] : 0)
            +
            (array2[i] !== undefined ? array2[i] : 0);
    }
    return result;
}

console.log(sumArr(arr1, arr2, ));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]


let users = [{name: 'Dima', age: 13}, {model: 'Camry'}]

function getKey(array){
    let keys = [];
    for (const obj of array) {
        for (const key in obj) {
            keys[keys.length] = key;
        }
    }
    return keys;
}

console.log(getKey(users));

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function getValue(array){
    let keys = [];
    for (const obj of array) {
        for (const key in obj) {
            keys[keys.length] = obj[key];
        }
    }
    return keys;
}

console.log(getValue(users));