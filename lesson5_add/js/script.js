// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let minNumber = (a, b, c) => {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    return min;
}
console.log(minNumber(1, 2, 3));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let maxNumber = (a, b, c) => {
    let max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}

console.log(maxNumber(1, 2, 3))


// - створити функцію яка повертає найбільше число з масиву

arrNumber = [10, 20, 110, 500, 30, 40, 55];

let maxNumofArr = (array) => {
    let maxNum = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxNum) {
            maxNum = array[i];
        }
    }
    return maxNum;
}

console.log(maxNumofArr(arrNumber));

// - створити функцію яка повертає найменьше число з масиву

let minNumOfArr = (array) => {
    let minNum = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < minNum) {
            minNum = array[i];
        }
    }
    return minNum;
}

console.log(minNumOfArr(arrNumber));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sumArr = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(sumArr(arrNumber));

// - Дано натуральное число n. Выведите все числа от 1 до n.

let listNumber = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
};
listNumber(5);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

let listNumber2 = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i)
        }
    }
    if (a > b) {
        for (let i = a; i >= b; i--) {
            console.log(i)
        }
    }
}

listNumber2(12, 10);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//

foo = (array, i) => {
    let x = array [i];
    array[i] = array[i + 1];
    array [i +1] = x;
    return array;
}

console.log(foo([9,8,0,4], 0));
console.log(foo([9,8,0,4], 1));
console.log(foo([9,8,0,4], 2));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

moveZero = (array) => {
    let zeroEnd = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            zeroEnd.push(array[i]);
        }
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            zeroEnd.push(array[i]);
        }
    }

    return zeroEnd;
}

console.log(moveZero([1,0,6,0,3]));
console.log(moveZero([0,1,2,3,4]));
console.log(moveZero([0,0,1,0]));