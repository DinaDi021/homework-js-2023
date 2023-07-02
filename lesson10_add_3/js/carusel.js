// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

let btnPrev = document.getElementById('btnPrev');
let btnNext = document.getElementById('btnNext');
let dots = document.querySelectorAll('.dot');

btnNext.addEventListener('click', function () {
    let images = document.querySelectorAll('.slide img');
    let currentImage = document.querySelector('.slide img.z-index');
    let currentDot = document.querySelector('.dot.activeDot');

    let currentIndex = Array.from(images).indexOf(currentImage);
    let nextIndex = (currentIndex + 1) % images.length;

    currentImage.classList.remove('z-index');
    images[nextIndex].classList.add('z-index');

    currentDot.classList.remove('activeDot');
    dots[nextIndex].classList.add('activeDot');
});

btnPrev.addEventListener('click', function () {
    let images = document.querySelectorAll('.slide img');
    let currentImage = document.querySelector('.slide img.z-index');
    let currentDot = document.querySelector('.dot.activeDot');

    let currentIndex = Array.from(images).indexOf(currentImage);
    let prevIndex = (currentIndex - 1 + images.length) % images.length;

    currentImage.classList.remove('z-index');
    images[prevIndex].classList.add('z-index');

    currentDot.classList.remove('activeDot');
    dots[prevIndex].classList.add('activeDot');
});

// Обработчики событий для каждой точки
dots.forEach(function (dot, index) {
    dot.addEventListener('click', function () {
        let images = document.querySelectorAll('.slide img');
        let currentImage = document.querySelector('.slide img.z-index');
        let currentDot = document.querySelector('.dot.activeDot');

        currentImage.classList.remove('z-index');
        images[index].classList.add('z-index');

        currentDot.classList.remove('activeDot');
        this.classList.add('activeDot');
    });
});
