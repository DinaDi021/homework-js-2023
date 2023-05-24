// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user1 = new User(10, 'Daenerys', 'Targaryen', 'dany.targaryen@gmail.com', '+380634441122');
let user2 = new User(21, 'Baelon', 'Targaryen', 'baelon.targaryen@gmail.com', '+380635341122');
let user3 = new User(3, 'Viserys', 'Targaryen', 'vis.targaryen@gmail.com', '+380657841122');
let user4 = new User(46, 'Jaehaerys', 'Targaryen', 'j.targaryen@gmail.com', '+380678403122');
let user5 = new User(51, 'Rhaenys', 'Targaryen', 'rh.targaryen@gmail.com', '+380634541122');
let user6 = new User(62, 'Rhaenyra', 'Targaryen', 'rhaenyra.targaryen@gmail.com', '+380634441662');
let user7 = new User(73, 'Daemon', 'Targaryen', 'd.targaryen@gmail.com', '+380634448762');
let user8 = new User(88, 'Aemon', 'Targaryen', 'aemon.targaryen@gmail.com', '+380634456122');
let user9 = new User(9, 'Aegon', 'Targaryen', 'aegon.targaryen@gmail.com', '+380634448902');
let user10 = new User(101, 'Daeron', 'Targaryen', 'daeron.targaryen@gmail.com', '+380684466122');

let newUsers = [];
newUsers.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);

console.log(newUsers);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterUsersId = newUsers.filter(value => {
    return value.id % 2 === 0
})

console.log(filterUsersId);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortUsersId = newUsers.sort((a, b) => a.id - b.id);

console.log(sortUsersId);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

}

// створити пустий масив, наповнити його 10 об'єктами Client

let client1 = new Client(1, 'Diana', 'Ilina', 'diana.ilina@gmail.com', '+380634441122', ['margarita', 'cuba libre', 'rom'])
let client2 = new Client(2, 'Katya', 'Petronyuk', 'katya2233@gmail.com', '+380689641122', ['wine', 'champage'])
let client3 = new Client(3, 'Natasha', 'Serdyuck', 'ser.nata@gmail.com', '+380634561122', ['tequila', 'margarita'])
let client4 = new Client(4, 'Lena', 'Sharapova', 'lena22@gmail.com', '+380634876122', ['whiskey', 'cuba libre', 'beer'])
let client5 = new Client(5, 'Masha', 'Korolkova', 'kova.masha23@gmail.com', '+380567441122', ['martini', 'vodka'])
let client6 = new Client(6, 'Dasha', 'Petrova', 'dasha2134@gmail.com', '+380634467122', ['pina colada', 'whiskey', 'beer'])
let client7 = new Client(7, 'Olya', 'Andreeva', 'andreeva.ol@gmail.com', '+380634876122', ['gin and tonic', 'margarita', 'cuba libre',])
let client8 = new Client(8, 'Nastya', 'Bogdanova', 'nast.bog@gmail.com', '+380634498422', ['bloody mary', 'absinthe'])
let client9 = new Client(9, 'Anya', 'Demchenko', 'demch2897@gmail.com', '+380634400122', ['beer', 'vodka'])
let client10 = new Client(10, 'Alina', 'Savenkova', 'alinaalina@gmail.com', '+380634091122', ['mojito', 'margarita', 'cuba libre', 'whiskey'])

let arrClient = [];
arrClient.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);

console.log(arrClient);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortOrder = arrClient.sort((a, b) => a.order.length - b.order.length);
console.log(sortOrder)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        return `Їдемо зі швидкістю ${this.maxSpeed} на годину`
    }
    this.info = function () {
        return`
    Model - ${this.model}
    Manufacturer - ${this.manufacturer}
    Year - ${this.year}
    Max speed - ${this.maxSpeed}
    Engine capacity - ${this.engineCapacity}`
    }

    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

Car.prototype.increaseMaxSpeed = function (newSpeed) {
    this.maxSpeed = newSpeed;
    return `Їдемо зі швидкістю ${this.maxSpeed} на годину`
}

Car.prototype.changeYear = function (newValue) {
    this.year = newValue;
    return `Year - ${this.year}`
}

let car = new Car('BMW X6', 'Bayerische Motoren Werke AG', 2018, 230, 4.4);
let driver = {name: 'Vlad', age: 30, drivingExperience: 5};

console.log(car.drive());
console.log(car.info());
console.log(car.increaseMaxSpeed(250));
console.log(car.changeYear(2019));
car.addDriver(driver);
console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car1 {

    constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        return `Їдемо зі швидкістю ${this.maxSpeed} на годину`
    }

    info() {
        return`
    Model - ${this.model}
    Manufacturer - ${this.manufacturer}
    Year - ${this.year}
    Max speed - ${this.maxSpeed}
    Engine capacity - ${this.engineCapacity}`
    }

    addDriver(driver) {
        this.driver = driver;
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
        return `Їдемо зі швидкістю ${this.maxSpeed} на годину`
    }

    changeYear(newValue) {
        this.year = newValue;
        return `Year - ${this.year}`
    }
}

let car1 = new Car1('BMW X6', 'Bayerische Motoren Werke AG', 2018, 230, 4.4);
let driver1 = {name: 'Vlad', age: 30, drivingExperience: 5};

console.log(car1.drive());
console.log(car1.info());
console.log(car1.increaseMaxSpeed(250));
console.log(car1.changeYear(2019));
car1.addDriver(driver1);
console.log(car1);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }

}

let cinderellas = [
    new Cinderella('Olivia', 23, 35),
    new Cinderella('Emma', 20, 34),
    new Cinderella('Charlotte', 22, 37),
    new Cinderella('Amelia', 23, 35),
    new Cinderella('Ava', 22, 37),
    new Cinderella('Sophia', 25, 36),
    new Cinderella('Isabella', 24, 39),
    new Cinderella('Mia', 27, 35),
    new Cinderella('Lina', 26, 36),
    new Cinderella('Scarlett', 25, 38)
]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {

    constructor(name, age, footSizeShoes) {
        this.name = name;
        this.age = age;
        this.footSizeShoes = footSizeShoes;
    }

}

let prince = new Prince('Oliver', 28, 34);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (let i = 0; i < cinderellas.length; i++) {
    if (cinderellas[i].footSize === prince.footSizeShoes) {
        console.log(cinderellas[i]);
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let findCinderella = cinderellas.find(value => value.footSize === prince.footSizeShoes);
console.log(findCinderella);