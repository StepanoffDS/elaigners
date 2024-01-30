function getCloseMenuClickLinkMobile() {
	const mobileNavListItem = document.querySelectorAll('.nav-item')
	mobileNavListItem.forEach((icon) => {
		icon.addEventListener('click', () => {
			document.querySelector('.wrapper').classList.remove('bg-black')
			document.querySelector('.wrapper').classList.remove('no-scroll')
			document.querySelector('.mobile-nav').classList.remove('mobile-nav--open')
			document.querySelector('.nav-icon').classList.remove('nav-icon--active')
		})
	})
}

export default getCloseMenuClickLinkMobile
