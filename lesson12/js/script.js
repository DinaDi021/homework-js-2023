// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит
// (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

let users = fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    let div = document.createElement('div');
    let ul = document.createElement('ul');


    for (const user of users) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = `users.html?id=${user.id}`;
        a.innerText = `id - ${user.id}, name - ${user.name}`;
        li.appendChild(a);
        ul.appendChild(li);
    }

    document.body.appendChild(div);
    div.appendChild(ul);
})