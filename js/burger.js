let burger = document.querySelector('.burger');
let menu = document.querySelector('.burger__menu');
let menuLinks = menu.querySelectorAll('.burger__link')

burger.addEventListener('click',

	function () {
		burger.classList.toggle('burger--active');

		menu.classList.toggle('burger__menu--active');

		document.body.classList.toggle('stop-scroll');
	})

menuLinks.forEach(function (el) {
	el.addEventListener('click', function () {

		burger.classList.remove('burger--active');
		menu.classList.remove('burger__menu--active');
		document.body.classList.remove('stop-scroll');

	})
})