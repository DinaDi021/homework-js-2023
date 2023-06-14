// - Є масив :

let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];

// Створити під кожен елемент окремий блок. В цьому блоці, під кожну властивість, та властивості внутрішніх об'єктів створити свої окремі блок.

for (const element of usersList) {
    let generalDiv = document.createElement('div');
    generalDiv.classList.add('user');

    let id = document.createElement('h2');
    id.innerText = `${element.id}`;
    let name = document.createElement('h2');
    name.innerText = `${element.name}`;
    let userName = document.createElement('h2');
    userName.innerText = `${element.username}`;
    let email = document.createElement('h2');
    email.innerText = `${element.email}`;

    let addressDiv = document.createElement('div');
    addressDiv.classList.add('address');

    let street = document.createElement('h4');
    street.innerText = `${element.address.street}`;
    let suite = document.createElement('h4');
    suite.innerText = `${element.address.suite}`;
    let city = document.createElement('h4');
    city.innerText = `${element.address.city}`;
    let zipcode = document.createElement('h4');
    zipcode.innerText = `${element.address.zipcode}`;

    let geoDiv = document.createElement('div');
    geoDiv.classList.add('geo');
    let lat = document.createElement('p');
    lat.innerText = `${element.address.geo.lat}`;
    let lng = document.createElement('p');
    lng.innerText = `${element.address.geo.lng}`;

    let phone = document.createElement('h2');
    phone.innerText = `${element.phone}`;
    let website = document.createElement('h2');
    website.innerText = `${element.website}`;

    let companyDiv = document.createElement('div');
    companyDiv.classList.add('company');
    let nameCompany = document.createElement('h4');
    nameCompany.innerText = `${element.company.name}`;
    let catchPhrase = document.createElement('h4');
    catchPhrase.innerText = `${element.company.catchPhrase}`;
    let bs = document.createElement('h4');
    bs.innerText = `${element.company.bs}`;

    geoDiv.append(lat, lng)
    addressDiv.append(street, suite, city, zipcode, geoDiv);
    companyDiv.append(nameCompany, catchPhrase, bs)
    generalDiv.append(id, name, userName, email, addressDiv, phone, website, companyDiv);
    document.body.appendChild(generalDiv);
}

// --------
//     за допомоги рекурсії перебрати структуру сторінки. зробити об'єкт, всі заголовки покласти в (масив) характеристику headings,
//     всі параграфи покласти в характеристику (масив) paragraphs

function pages(htmlElement) {
    let headings = [];
    let paragraphs = [];

    function seach (element) {
        let children = element.children;

        for (const child of children) {
            if (child.tagName === 'H1' || child.tagName === 'H2' || child.tagName === 'H3' || child.tagName === 'H4' ||
                child.tagName === 'H5' || child.tagName === 'H6') {
                headings.push(child.innerText);
            } else if (child.tagName === 'P') {
                paragraphs.push(child.innerText);
            }

            seach(child);
        }
    }

    seach(htmlElement);

    return {
        headings: headings,
        paragraphs: paragraphs
    };
}

console.log(pages(document.body));

// ------
//
//     зробити div contenteditable ввести будь яке ціле слово. та при натисканні табуляції перетворити його на подвійний тег
// asd ->tab-> <asd></asd>

let contenteditableDiv = document.createElement('div');
contenteditableDiv.contentEditable = true;
contenteditableDiv.innerText = 'напиши щось';

contenteditableDiv.onkeydown = function(e) {
    if (e.key === 'Tab') {
        e.preventDefault();

        let word = contenteditableDiv.innerText.trim();
        if (word !== '') {
            contenteditableDiv.innerHTML = `<${word}></${word}>`;
        }
    }
};

document.body.appendChild(contenteditableDiv);
