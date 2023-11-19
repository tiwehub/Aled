document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("progress-bar");

    window.addEventListener("scroll", function () {
        const windowHeight = window.innerHeight;
        const fullHeight = document.body.clientHeight;
        const scrollY = window.scrollY;

        const scrolled = (scrollY / (fullHeight - windowHeight)) * 100;
        progressBar.style.width = scrolled + "%";
    });
});
  // Функция для проверки, виден ли элемент на экране с учетом буфера
  function isElementInViewport(elem, buffer = 100) {
    var rect = elem.getBoundingClientRect();
    return (
        rect.top >= -buffer &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + buffer &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для определения, является ли устройство мобильным
function isMobileDevice() {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Функция для анимации элементов
function animateElements() {
    var animatedElements = document.querySelectorAll('.animated-element');
    var buffer = isMobileDevice() ? 200 : 100; // Установите меньший буфер для мобильных устройств

    animatedElements.forEach(function (element) {
        if (isElementInViewport(element, buffer)) {
            var delay = element.getAttribute('data-animation-delay');
            var duration = element.getAttribute('data-animation-duration');

            element.style.setProperty('--animation-delay', delay + 'ms');
            element.style.setProperty('--animation-duration', duration + 's');

            element.classList.add('animate');
        } else {
            element.classList.remove('animate');
        }
    });
}

// https://t.me/bestsedative, endgamerule@gmail.com; https://t.me/Zxcghouldeadinslde, almasmurat439@gmail.com
function handleScroll() {
    requestAnimationFrame(animateElements);
}

// Обработчик события прокрутки страницы
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', animateElements); // Вызовем функцию для начальной проверки видимости элементов

// Вызовем функцию для начальной проверки видимости элементов
animateElements();
