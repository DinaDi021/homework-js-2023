// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

function User(id, name, username, email, aStreet, aSuite, aCity, aZipcode, lat, lng, phone, website, cName, catchPhrase, bs) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = {street: aStreet, suite: aSuite, city: aCity, zipcode: aZipcode, geo: {lat: lat, lng: lng}};
    this.phone = phone;
    this.website = website;
    this.company = {name: cName, catchPhrase: catchPhrase, bs: bs};
}

let user = new User(
    1, 'Leanne Graham', 'Bret', 'Sincere@april.biz',
    'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874',
    '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona',
    'Multi-layered client-server neural-net', 'harness real-time e-markets')

console.log(user);

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

function Tag(titleOfTag, action, ...attrs) {
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attrs = attrs;
}

let tagA = new Tag('a', 'Предназначен для создания ссылок',
    attrs = [
        {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш'},
        {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области'},
        {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл'}
    ]
)
console.log(tagA);

let tagDiv = new Tag('div', ' Предназначен для выделения фрагмента документа с целью изменения вида содержимого',
    attrs = [
        {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега div'},
        {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому'}
    ]
)
console.log(tagDiv);

let tagH1 = new Tag('h1', ' Представляет собой наиболее важный заголовок первого уровня',
    attrs = [
        {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка'}
    ])
console.log(tagH1);

let tagSpan = new Tag('span', 'Предназначен для определения строчных элементов документа',
    attrs = [
        {titleOfAttr: 'dir', actionOfAttr: 'Задает направление и отображение текста — слева направо или справа налево'},
        {titleOfAttr: 'id', actionOfAttr: 'Указывает имя стилевого идентификатора'},
        {
            titleOfAttr: 'class',
            actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением'
        }
    ])
console.log(tagSpan);

let tagInput = new Tag('input', 'Позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем',
    attrs = [
        {titleOfAttr: 'checked', actionOfAttr: 'Предварительно активированный переключатель или флажок'},
        {titleOfAttr: 'placeholder', actionOfAttr: 'Выводит подсказывающий текст'}
    ])
console.log(tagInput);

let tagForm = new Tag('form', 'станавливает форму на веб-странице',
    attrs = [
        {
            titleOfAttr: 'target',
            actionOfAttr: 'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат'
        },
        {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы'}
    ])
console.log(tagForm);

let tagOption = new Tag('option', 'Oпределяет отдельные пункты списка',
    attrs = [
        {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка'},
        {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка'},
        {
            titleOfAttr: 'value',
            actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов'
        }
    ])
console.log(tagOption);

let tagSelect = new Tag('select', 'Позволяет создать элемент интерфейса в виде раскрывающегося списка',
    attrs = [
        {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы'},
        {titleOfAttr: 'multiple', actionOfAttr: 'Позволяет одновременно выбирать сразу несколько элементов списка'},
        {titleOfAttr: 'required', actionOfAttr: 'Список обязателен для выбора перед отправкой формы'},
    ])
console.log(tagSelect);

// Завдання 1 https://github.com/GrayHead/js_demos/blob/master/js/archive/additioanl_tasks/additional7/сlosures.pdf
function UserCard(number) {
    let card = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [{operationType: 'card created', credits: 100, operationTime: new Date()}],
        key: (number),

        getCardOptions: function () {
            return {
                balance: this.balance,
                transactionLimit: this.transactionLimit,
                historyLogs: this.historyLogs,
                key: this.key
            }
        },
        putCredits: function (money) {
            this.balance += money;
            this.historyLogs.push({operationType: 'put credits', credits: this.balance, operationTime: new Date()})
        },
        takeCredits: function (money) {
            if (this.balance > money) {
                this.balance -= money;
                this.historyLogs.push({operationType: 'take credits', credits: this.balance, operationTime: new Date()})
            } else {
                throw new Error('Insufficient funds');
            }
        },
        setTransactionLimit: function (limit) {
            this.transactionLimit = limit;
            this.historyLogs.push({
                operationType: 'transaction limit change',
                credits: this.balance,
                operationTime: new Date()
            })
        },
        transferCredits: function (money, card) {
            if (money > this.transactionLimit) {
                throw new Error("The transaction size exceeds the card limit");
            } else if (money * 1.005 > this.balance) {
                throw new Error('Insufficient funds on this card');
            } else {
                this.takeCredits(money * 1.005);
                card.putCredits(money);
            }
        },
    }
    return card
}

let card1 = new UserCard(1);
let card2 = new UserCard(2);
let card3 = new UserCard(3);

console.log(card3.getCardOptions());
console.log(card2.getCardOptions());
console.log(card1.getCardOptions());

card3.putCredits(150);
console.log(card3);

card3.takeCredits(100);
console.log(card3);

card3.setTransactionLimit(5000);
console.log(card3);

card3.transferCredits(50, card1);
console.log(card3);
console.log(card1);

//
// card2.takeCredits(200);
// console.log(card2)

// Завдання 2 https://github.com/GrayHead/js_demos/blob/master/js/archive/additioanl_tasks/additional7/сlosures.pdf

class UserAccount {

    constructor(name, cards) {
        this.name = name;
        this.cards = [];
    }

         addCard(k) {
            if (this.cards.length >= 3) {
                throw new Error('value of available cards exceeded');
            } else {
                this.cards.push(new UserCard(k))
            }
        }
        getCardByKey(number) {
            if (number > 0 && number <= 3){
                //let keyCard = 0;
                for (let card of this.cards){
                    if(card.key === number){
                        return card;
                    }
                }
                /*for (let i = 0; i < this.cards.length; i++) {
                    if (this.cards.key[i] === number) {
                        keyCard = this.cards.key[i];
                    }
                    return keyCard
                }*/
            }
        }
}

let user1 = new UserAccount('Bob');
user1.addCard(1)
user1.addCard(2)
// user1.addCard(3)
// user1.addCard(4)
console.log(user1);
let cardBob1 = user1.getCardByKey(1);
let cardBob2 = user1.getCardByKey(2);
cardBob1.putCredits(500);
cardBob1.setTransactionLimit(800);
cardBob2.takeCredits(50);
console.log(cardBob1.getCardOptions());
console.log(cardBob2.getCardOptions());
