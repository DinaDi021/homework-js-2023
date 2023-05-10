// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//

let arr1 = [55, 45, 48, 100, -2];
console.log(arr1);

let arr2 = ['korsbeauty', 'ewa', 'capcut', '26', 'youtube'];
console.log(arr2);

let arr3 = ['netflix', 'hdrezka', 25, 101, true];
console.log(arr3);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr = [];

arr[0] = 'new';
console.log(arr);

arr[1] = '25';
console.log(arr);

arr[2] = 'year';
console.log(arr);

arr[3] = 25;
console.log(arr);

arr[4] = 'bhhjh';
console.log(arr);

// - є масив [2,17,13,6,22,31,45,66,100,-18] :

let arrNum = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while

let i = 0;
while (i < arrNum.length) {

    console.log(arrNum[i]);
    i++;
}

// 2. перебрати його циклом for

for (let j = 0; j < arrNum.length; j++) {
    const arrNumElement = arrNum[j];

    console.log(arrNum[j]);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

i = 0;
while (i < arrNum.length) {

    console.log(arrNum[i]);
    i += 2;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let j = 0; j < arrNum.length; j += 2) {
    const arrNumElement = arrNum[j];

    console.log(arrNum[j]);
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

i = 0;
while (i < arrNum.length) {

    if (arrNum[i] % 2 === 0) {
        console.log(arrNum[i]);
    }
    i++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let j = 0; j < arrNum.length; j++) {
    const arrNumElement = arrNum[j];

    if (arrNum[i] % 2 === 0) {
        console.log(arrNum[j]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

for (let j = 0; j < arrNum.length; j++) {
    const arrNumElement = arrNum[j];

    if (arrNum [j] % 3 === 0) {
        arrNum [j] = 'okten';
    }
    console.log(arrNum[j]);
}

// 8. вивести масив в зворотньому порядку.

for (let i = arrNum.length - 1; i >= 0; i--) {
    console.log(arrNum[i]);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

//9.1

let i1 = arrNum.length - 1;
while (i1 >= 0) {

    console.log(arrNum[i1]);
    i1--;
}

//9.2

for (let j = arrNum.length - 1; j >= 0; j--) {
    const arrNumElement = arrNum[j];

    console.log(arrNum[j]);
}

//9.3

i1 = arrNum.length - 1;
while (i1 >= 0) {

    console.log(arrNum[i1]);
    i1 -= 2;
}

//9.4

for (let j = arrNum.length - 1; j >= 0; j -= 2) {
    const arrNumElement = arrNum[j];

    console.log(arrNum[j]);
}

//9.5

i1 = arrNum.length - 1;
while (i1 >= 0) {

    if (arrNum[i1] % 2 === 0) {
        console.log(arrNum[i1]);
    }
    i1--;
}

//9.6

for (let j = arrNum.length - 1; j >= 0; j--) {
    const arrNumElement = arrNum[j];

    if (arrNumElement[j] % 2 === 0) {
        console.log(arrNum[j]);
    }
}

for (let j = arrNum.length - 1; j >= 0; j--) {
    const arrNumElement = arrNum[j];

    if (arrNum [j] % 3 === 0) {
        arrNum [j] = 'okten';
    }
    console.log(arrNum[j]);
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let number = [-5, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const numberKey in number) {
    console.log(number);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let number1 = ['0', 'hh', 'skskk', 'djdjdj', '5', 'jssj', 'sjsjsj', 'fpfp', '1', '2'];

for (const string of number1) {
    console.log(number1);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let number3 = [0, 1, 2, 3, 4, 'hh', 'skskk', 'djdjdj', true, false];

for (const number3Element of number3) {
    console.log(number3);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

for (let j = 0; j < number3.length; j++) {
    const number3Element = number3[j];

    if (typeof number3[j] === 'boolean') {
        console.log(number3[j])
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

for (let j = 0; j < number3.length; j++) {
    const number3Element = number3[j];

    if (typeof number3[j] === 'number') {
        console.log(number3[j])
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

for (let j = 0; j < number3.length; j++) {
    const number3Element = number3[j];

    if (typeof number3[j] === 'string') {
        console.log(number3[j])
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

let arrNew = [];

arrNew[0] = 'new';

arrNew[1] = '25';

arrNew[2] = 'year';

arrNew[3] = 25;

arrNew[4] = true;

arrNew[5] = 'new';

arrNew[6] = false;

arrNew[7] = 'year';

arrNew[8] = 25;

arrNew[9] = 'bhhjh';

for (const arrNewElement of arrNew) {
    console.log(arrNew);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 1; i <= 10; i++) {
    console.log(i);
    document.write(i + '<br>');
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 1; i <= 100; i++) {
    console.log(i);
    document.write(i + '<br>');
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор