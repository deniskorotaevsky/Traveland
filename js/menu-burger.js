const header__burger = document.querySelector('.js-header__burger');
const header_menu = document.querySelector('.js-header__menu');
const back = document.querySelector('body');
const header__list = document.querySelector('.js-header_nav__link');

header__burger.onclick = function () {
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}

header__list.onclick = function () {
    header__list.classList.remove('active');
    back.classList.toggle('lock');
}