document.querySelectorAll(".hero-dropdown__simplebar").forEach(dropdown => {

})


const btns = document.querySelectorAll(".hero-dropdown-span");
const dropdowns = document.querySelectorAll(".hero-dropdown");
const activeClassdropdowns = "hero-dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
	item.addEventListener("click", function () {
		let DropThis = this.parentElement.querySelector(".hero-dropdown");
		dropdowns.forEach(el => {
			if (el != DropThis) {
				el.classList.remove(activeClassdropdowns)
			}
		});
		btns.forEach(el => {
			if (el != this) {
				el.classList.remove(activeClassbtns)
			}
		});
		DropThis.classList.toggle(activeClassdropdowns);
		this.classList.toggle(activeClassbtns);
	})
})