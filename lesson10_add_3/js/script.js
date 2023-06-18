// - Сворити масив не цензцрних слів.

let arrObsceneWords = ['Вилупок', 'Курва', 'Наволоч', 'Покидьок', 'Блядь', 'Пизда', 'Їбати', 'Хуй', ]

//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let form1 = document.word;
let btnForm = document.getElementById('btnWord');

btnForm.addEventListener( "click", function (e){
    e.preventDefault()
    let formWord = form1.wordInput.value.trim();

    if (arrObsceneWords.includes(formWord)) {
        alert('Error, please enter correct word')
    } else {
        let message = document.createElement('h3');
        message.innerText = 'Successfully sent';
        document.body.appendChild(message);
        btnForm.disabled = true;
        form1.wordInput.value = '';

    }
} )

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let form2 = document.sentence;
let btnSentence = document.getElementById('btnSentence');
btnSentence.addEventListener( 'click', function (e){
    e.preventDefault()
    let formWord = form2.sentenceInput.value.trim();

    let obsceneWord = false;
    arrObsceneWords.forEach(function (value) {
        if (formWord.includes(value)) {
            obsceneWord = true;
        }
    })

    if (obsceneWord) {
        alert('Error, please enter correct word')
    } else {
        let message = document.createElement('h3');
        message.innerText = 'Successfully sent';
        document.body.appendChild(message);
        btnSentence.disabled = true;
        form2.sentenceInput.value = '';
    }
} )

// - Создайте меню, которое раскрывается/сворачивается при клике

let btnMenu = document.getElementById('btnMenu');
let classNavigation = document.getElementsByClassName('navigation')[0];

btnMenu.addEventListener('click', function (e) {
    e.preventDefault();

    if (classNavigation.style.display === 'none') {
        classNavigation.style.display = 'block';
    } else {
        classNavigation.style.display = 'none';
    }
})

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let divContent = document.createElement('div');
divContent.classList.add('comment');

let arrComment = [
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
]

for (const item of arrComment) {
    let ul = document.createElement('ul');
    let liTitle = document.createElement('li');
    liTitle.innerText = item.title;
    let liBody = document.createElement('li')
    liBody.innerText = item.body;
    liBody.style.display = 'block';
    let liBtn = document.createElement('button');
    liBtn.innerText = `Comment`;

    liBtn.addEventListener('click', function (e){
        e.preventDefault();

        if (liBody.style.display === 'block') {
            liBody.style.display = 'none';

        } else {
            liBody.style.display = 'block'
        }
    })

    ul.append(liTitle, liBody, liBtn);
    divContent.appendChild(ul);
}

document.body.appendChild(divContent);


// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let btnHide = document.getElementById('btnHide');

btnHide.addEventListener( 'click', function (e){
    e.preventDefault();
    btnHide.style.visibility = 'hidden';
})

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.body.addEventListener('click', function (e) {
//     e.preventDefault();
//
//     let target = e.target;
//
//     let tagN = target.tagName;
//     let classN = target.className;
//     let idN = target.id;
//     let size = target.offsetHeight + ' * ' + target.offsetWidth;
//
//     console.log(tagN)
//     console.log(classN)
//     console.log(idN)
//     console.log(size)
// })

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.body.addEventListener('click', function (e) {
//     e.preventDefault();
//
//     let target = e.target;
//
//     let tagN = target.tagName;
//     if (tagN === '') {
//         tagN = '-'
//     }
//     let classN = target.className;
//     if (classN === '') {
//         classN = '-'
//     }
//     let idN = target.id;
//     if (idN === '') {
//         idN = '-'
//     }
//     let size = target.offsetHeight + ' * ' + target.offsetWidth;
//         let popupContent = `Назва тегу: ${tagN}\nСписок класів: ${classN}\nСписок ід: ${idN}\nРозміри: ${size}`;
//
//     let popupWindow = window.open('', '', 'width=200,height=200');
//     popupWindow.document.write(popupContent);
//     })

// -- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let btnFIlter = document.getElementById('filter');

let filterStatus = usersWithAddress.filter(value => {
    return value.status === false;
})

let filterAge = usersWithAddress.filter(value => {
    return value.age >= 29;
})

let filterCity = usersWithAddress.filter(value => {
    return value.address.city === 'Kyiv';
})

btnFIlter.addEventListener('click', function () {
    let div = document.createElement('div');
    let ul = document.createElement('ul');

    let filterUsers = usersWithAddress.filter(user => {
        let statusFilter = document.getElementById('status').checked;
        let ageFilter = document.getElementById('age').checked;
        let cityFilter = document.getElementById('city').checked;

        return (!statusFilter || user.status === false) &&
            (!ageFilter || user.age >= 29) &&
            (!cityFilter || user.address.city === 'Kyiv');
    });

    filterUsers.forEach(user => {
        let li = document.createElement('li');
        li.innerText = `ID: ${user.id}, Name: ${user.name}, Age: ${user.age}, Status: ${user.status}, Address: ${user.address.city}, ${user.address.street}, ${user.address.number}`;
        ul.appendChild(li);
    });

    let previousResult = document.querySelector('#result');
    if (previousResult) {
        previousResult.remove();
    }

    div.setAttribute('id', 'result');
    div.appendChild(ul);
    document.body.appendChild(div);
})

// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне



// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан