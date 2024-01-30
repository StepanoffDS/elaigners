function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelectorAll('.mobile-nav-btn')
	const nav = document.querySelector('.mobile-nav')
	const menuIcon = document.querySelector('.nav-icon')
	const wrapper = document.querySelector('.wrapper')

	navBtn.forEach((btn) => {
		btn.onclick = function (e) {
			e.stopPropagation()
			nav.classList.toggle('mobile-nav--open')
			wrapper.classList.toggle('no-scroll')
			wrapper.classList.toggle('bg-black')
		}
	})

	nav.onclick = function (e) {
		e.stopPropagation()
	}

	document.addEventListener('click', closeMenu)

	function closeMenu(e) {
		e.stopPropagation()
		nav.classList.remove('mobile-nav--open')
		wrapper.classList.remove('no-scroll')
		wrapper.classList.remove('bg-black')
	}
}

export default mobileNav
