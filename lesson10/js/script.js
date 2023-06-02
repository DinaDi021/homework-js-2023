// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та
// вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let form1 = document.form1
form1.onsubmit = function (e) {
    e.preventDefault()
    let obj = {
        firstname: this.firstname.value,
        surname: this.surname.value,
        age: this.age.value
    }
    let infoDiv = document.createElement('div');
    infoDiv.innerText = JSON.stringify(obj);
    document.body.appendChild(infoDiv);
}

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

document.addEventListener('DOMContentLoaded', function () {
    let numberEl = document.getElementById('number');

    if (localStorage.getItem('number')) {
        let number = parseInt(localStorage.getItem('number'));
        let numberPlusOne = number + 1;
        numberEl.innerText = numberPlusOne.toString();
        localStorage.setItem('number', numberPlusOne.toString());
    } else {
        numberEl.innerText = '1';
        localStorage.setItem('number', '1');
    }
});

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час
// відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування
// сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
document.addEventListener('DOMContentLoaded', function (e) {
    let arrSessions = JSON.parse(localStorage.getItem('sessions')) || [];
    arrSessions.push(new Date().toLocaleString());
    localStorage.setItem('sessions', JSON.stringify(arrSessions));
});

// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

function buildArr() {
    let arrNum1 = [];
    for (let i = 1; i <= 100; i++) {
        arrNum1.push(i);
    }
    return arrNum1;
}

let arrNum = buildArr();
let numberDiv = document.createElement('div');

function showElements(currentStartIndex) {
    numberDiv.innerText = '';
    for (let i = currentStartIndex; i < currentStartIndex + 10; i++) {
        let element = arrNum[i];
        let arrElement = document.createElement('div');
        arrElement.innerText = element;
        numberDiv.appendChild(arrElement);
    }
}

let btnDiv = document.createElement('div');

let btnPrev = document.createElement('button');
btnPrev.innerText = 'prev';
btnPrev.disabled = true;

let btnNext = document.createElement('button');
btnNext.innerText = 'next';

btnDiv.append(btnPrev, btnNext);
document.body.appendChild(btnDiv);

let currentStartIndex = parseInt(localStorage.getItem('currentStartIndex'));
document.addEventListener('DOMContentLoaded', function (e) {
    showElements(currentStartIndex);
});

btnNext.addEventListener('click', function () {
    if (currentStartIndex + 10 < arrNum.length) {
        currentStartIndex += 10;
        showElements(currentStartIndex);
        btnPrev.disabled = false;
    } else if (currentStartIndex + 10 === arrNum.length) {
        btnNext.disabled = true;
    }
    localStorage.setItem('currentStartIndex', currentStartIndex.toString());
});

btnPrev.addEventListener('click', function () {
    if (currentStartIndex >= 10) {
        currentStartIndex -= 10;
        showElements(currentStartIndex);
        btnNext.disabled = false;
    }
    if (currentStartIndex === 0) {
        btnPrev.disabled = true;
    }
    localStorage.setItem('currentStartIndex', currentStartIndex.toString());
});

document.body.appendChild(numberDiv);

//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав
// елемент з id="text".

let elementId = document.getElementById('text');

let btnText = document.getElementById('btn_text');
btnText.addEventListener('click', function () {
    elementId.style.display = 'none';
});

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту
//     та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let btnAge = document.getElementById('buttonAge');
btnAge.addEventListener('click', function (){
    let input = document.querySelector('div > input');
    let userAge = parseInt(input.value);

    if (userAge >= 18) {
        let age18 = document.createElement('h2');
        document.body.appendChild(age18);
        age18.innerText = `Вам є 18 років`;
    } else if (userAge < 18) {
        let ageNot18 = document.createElement('h2');
        document.body.appendChild(ageNot18);
        ageNot18.innerText = `Ви не досягли 18 років`;
    }
})

//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)



//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається