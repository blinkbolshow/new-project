const swipertwo = new Swiper('.swiper-container-two', {
	slidesPerView: 3,
	spaceBetween: 50,
	loop: true,
	// пагинация
	pagination: {

		el: '.swiper-pagination-two',
		type: 'fraction'
	},
	// навигация
	navigation: {
		nextEl: '.swiper-button-next-two',
		prevEl: '.swiper-button-prev-two',
	},
});
