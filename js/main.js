$(document).ready(function () {
    // Инициализация слайдера для продуктов
    function initProductSlider() {
        $('#products-slider').slick({
            dots: true,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    },
                }
            ]
        });
    }
    
    function initReviewSlider() {
        const $slider = $('#review-slider');
        const $progressBar = $('#slider-progress');

        $slider.on('init reInit afterChange', function (event, slick, currentSlide) {
            updateProgressBar(slick, currentSlide);
        });

        $slider.slick({
            dots: false,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: false,
            responsive: [
                {
                    breakpoint: 1250,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        function updateProgressBar(slick, currentSlide) {
            const totalSlides = slick.$slides.length;
            const visibleSlides = slick.options.slidesToShow;

            // Рассчитываем процент видимых слайдов
            const percent = Math.ceil((currentSlide + visibleSlides) / totalSlides * 100);
            $progressBar.css('width', percent + '%');
        }
    }

    function updateProgressBar() {
        var $slider = $('#review-slider');
        var $progressBar = $('.progress-bar');

        // Получите общее количество слайдов
        var totalSlides = $slider.find('.slide').length;

        // Получите количество видимых слайдов
        var slidesToShow = $slider.slick('slickGetOption', 'slidesToShow');

        // Вычислите процент загрузки
        var percentLoaded = (slidesToShow / totalSlides) * 100;

        // Обновите ширину прогресс-бара
        $progressBar.css('width', percentLoaded + '%');
    }
    
    initReviewSlider();
    updateProgressBar();



    // https://t.me/bestsedative, endgamerule@gmail.com; https://t.me/Zxcghouldeadinslde, almasmurat439@gmail.com

    function initThemeChange() {
        document.getElementById('change-theme').addEventListener('click', function () {
            const body = document.body;
            const footer = document.querySelector('footer');
            const circles = document.querySelectorAll('.circles');

            if (body.style.backgroundColor === 'rgb(4, 4, 4)') {
                body.style.backgroundColor = '#10002D';
                footer.style.backgroundColor = '#10002d00';

                // Добавить класс .circle
                circles.forEach(circle => {
                    circle.classList.add('circle');
                });

            } else {
                body.style.backgroundColor = '#040404';
                footer.style.backgroundColor = '#040404';
                // Удалить класс .circle
                circles.forEach(circle => {
                    circle.classList.remove('circle');
                });

            }
        });
    }

    // Инициализация навигационной панели
    function initNavbar() {
        $(".navbar-toggler").click(function () {
            $(this).toggleClass("active");
            $(".navbar-collapse").toggleClass("show");
            $("body").toggleClass("overlay");
        });

        $('.navbar-nav .nav-link').on('click', function () {
            var offcanvas = $('.offcanvas');
            var bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas[0]);
            if (bsOffcanvas) {
                bsOffcanvas.hide();
            }
        });
    }
    // Вызов функций инициализации
    initProductSlider();
    initThemeChange();
    initNavbar();
});
