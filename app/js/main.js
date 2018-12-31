// Прелоадер страниц
$(window).on('load', function () {
    let preloader = $('#preloader');
    $(preloader).delay(1000).fadeOut('slow');
});

// Модальное окно входа в личный кабинет
$('#login-to-your-account').click(function() {
    $('#modal-login-to-your-account').arcticmodal();
});

// Модальное окно вызова мастера
$('#call-the-wizard').click(function() {
    $('#modal-call-the-wizard').arcticmodal();
});

// Модальное окно регистрации
$('#registration').click(function() {
    $('#modal-registration').arcticmodal();
});

// // Модальное окно удаления сообщения
// $('.message-delete').click(function() {
//     $('#modal-message-delete').arcticmodal();
// });

// Блок фиксации на странице "О нас" data-sticky-container=".intro-scene"
// $('.js-fixing-unit').sticky({
//     offset: 120
// });

// Слайдер для страницы "услуги"
$('.slider-services').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: ('<img src="../images/icons/arrow-point-to-right.svg" alt="prev" width="28px" height="48px" class="slick-prev">'),
    nextArrow: ('<img src="../images/icons/arrow-point-to-right.svg" alt="next" width="28px" height="48px" class="slick-next">'),
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            arrows: false
        }
    }]
});

// Слайдер наши клиенты на странице "О нас"
$('.our-clients-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: ('<img src="../images/icons/arrow-point-to-right.svg" alt="prev" width="28px" height="48px" class="slick-prev">'),
    nextArrow: ('<img src="../images/icons/arrow-point-to-right.svg" alt="next" width="28px" height="48px" class="slick-next">')
});

// Слайдер акций и бонусов в "личном профиле" пользователя
$('.user-profiles-stock-widget-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    prevArrow: ('<img src="../images/stock-widget-slick-prev.png" alt="prev" class="slick-prev">'),
    nextArrow: ('<img src="../images/stock-widget-slick-next.png" alt="next" class="slick-next">'),
    responsive: [{
        breakpoint: 1500,
        settings: {
            slidesToShow: 2
        }
    }]
});

// Слайдер акций и бонусов, на странице "Услуги"
$('.stock-widget-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    prevArrow: ('<img src="../images/stock-widget-slick-prev.png" alt="prev" class="slick-prev">'),
    nextArrow: ('<img src="../images/stock-widget-slick-next.png" alt="next" class="slick-next">'),
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 991,
        settings: {
            slidesToShow: 1
        }
    }]
});

// Вкладки для контактов на странице "О нас", "Контакты"
$(".tab").tabs();

// Вкладки для контактов на странице "Personal-profile"
$('.personal-information-tab-link').tabs();

// noinspection JSUnresolvedFunction
$(".dropdown").dropdown({
    label: "Выберите из списка"
});

// Скрол бар сообщения, каталог услуг
$('.scrollbar').scrollbar();

// Табы сообщений
$('.message-tab').tabs();

// Добавление класса адаптации заголовка
$('.header-title-text').width(function (i, val) {
    if (val >= 945) {
        let elem = $('.header-title-text');

        elem.addClass('header-title-text-long').removeClass('header-title-text');
    }
});

// Меню на мобильной версии
// noinspection JSValidateTypes
$('.navigation').navigation({
    type: "overlay",
    gravity: "left",
    labels: false
});

// Добавление класса адаптации высоты контейнера сообщений
function messageHeight() {
    let userPageHeight = $('.user-page').height(),
        navigationBarHeight = $('.personal-profile-navigation-bar').innerHeight(),
        messageHeaderHeight = $('.message-header').innerHeight();

    let assignmentElement = document.getElementsByClassName('message-container');

    $(assignmentElement).css({'height': userPageHeight - navigationBarHeight - messageHeaderHeight - 40});
}
messageHeight();