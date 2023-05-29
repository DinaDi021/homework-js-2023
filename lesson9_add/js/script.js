// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив.
// масив вивести в консоль

function pages(htmlElement) {
    let arrayClass = [];

    function seachClasess(element) {
        let children = element.children;

        for (const child of children) {
            if (child.classList.length > 0) {
                arrayClass.push(...child.classList);
            }

            seachClasess(child)
        }
    }

    seachClasess(htmlElement);
    console.log(arrayClass);
}

pages(document.body);

