let lyp = document.querySelector('.header__btn-tap');
let pole = document.querySelector('.header__search');
let exit = document.querySelector('.header__btn-active-exit');

lyp.addEventListener('click', function () {
	pole.classList.toggle('header__search--active');
});

exit.addEventListener('click', function () {
	pole.classList.toggle('header__search--active');
});