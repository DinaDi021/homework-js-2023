// 1. Створити пустий масив та :

let arrNum1 = [];

//     a. заповнити його 50 парними числами за допомоги циклу.

for (let i = 2; i <= 100; i += 2) {
    arrNum1.push(i)
}

console.log(arrNum1);

//     b. заповнити його 50 непарними числами за допомоги циклу.

let arrNum2 = [];

let i = 1;
while (i < 100) {
    arrNum2.push(i);
    i += 2;
}

console.log(arrNum2);

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

let arrNumRandom = [];

for (let i = 0; i < 20; i++) {
    arrNumRandom.push(Math.round(Math.random() * 50))
}

console.log(arrNumRandom);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

let arrNumRandom2 = [];

for (let i = 0; i < 20; i++) {
    arrNumRandom2.push(Math.round(Math.random() * 732) + 8)
}

console.log(arrNumRandom2)

// 2. Вивести за допомогою console.log кожен третій елемен

let arrNum = [1, 2, 3, 5, 7, 9, 56, 8, 67, 66, 90, 4, 6];

for (i = 0; i < arrNum.length; i += 3) {
    console.log(arrNum[i]);
}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for (i = 0; i < arrNum.length; i += 3) {
    if (arrNum[i] % 2 === 0) {
        console.log(arrNum[i])
    }
}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

let arrNumNew = [];

for (i = 0; i < arrNum.length; i += 3) {
    if (arrNum[i] % 2 === 0) {
        arrNumNew.push(arrNum[i]);
    }
}

console.log(arrNumNew);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

for (i = 0; i < arrNum.length; i++) {
    if (arrNum[i + 1] % 2 === 0) {
        console.log(arrNum[i]);
    }
}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки.
// Обрахувати середній чек.

let arrShopping = [100, 250, 50, 168, 120, 345, 188];
let sumShop = 0;

for (i = 0; i < arrShopping.length; i++) {
    sumShop += arrShopping[i];
}
let average = sumShop / arrShopping.length;
console.log(average);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let arrRandom = [];

for (let i = 0; i < 10; i++) {
    arrRandom.push(Math.round(Math.random() * 50));
}

console.log(arrRandom);

let arrRandomNew = [];

for (let i = 0; i < arrRandom.length; i++) {
    arrRandomNew.push(arrRandom[i] * 5);
}

console.log(arrRandomNew);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
// і якщо елемент є числом - додати його в інший масив.

let arr = [0, 1, 2, 3, 4, 'hh', 'skskk', 'djdjdj', true, false];
let num = [];

for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        num.push(arr[i])
    }
}
console.log(num);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
//
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//

let usersWithCities = [];

for(const user of usersWithId) {
    let mergedObject = {};
    mergedObject.id = user.id;
    mergedObject.name = user.name;
    mergedObject.age = user.age;
    mergedObject.status = user.status;

    for(const location of citiesWithId){
        if(user.id === location.user_id){
            mergedObject.country = location.country;
            mergedObject.city = location.city;
            break;
        }
    }

    usersWithCities.push(mergedObject);
}

console.log(usersWithCities);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи,
// значення яких є парними.

for (i = 0; i < arrRandom.length; i++) {
    if (arrRandom[i] % 2 === 0) {
        console.log(arrRandom[i])
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let newArr = [];
for (i = 0; i <arrRandom.length; i++) {
    newArr.push(arrRandom[i]); {
    }
}
console.log(newArr);

// - Дано масив:  . За допомогою циклу for зібрати всі букви в слово.

let array = [ 'a', 'b', 'c'];
let word = '';

for (let i = 0; i < array.length; i++){
    word += array[i];

}
console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let word1 = '';

i = 0;
while (i < array.length) {
    word1 += array[i];
    i++;
}

console.log(word1);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let word2 = '';

for (const abc  of array) {
        word2 += abc;
}

console.log(word2);