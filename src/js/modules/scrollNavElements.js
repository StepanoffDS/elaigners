function scrollNavElements() {
	function scrollToElementInHTML(element, btn) {
		let navBtn = document.querySelectorAll(`.${btn}`)
		navBtn.forEach((e) => {
			e.addEventListener('click', () => {
				let elementTopCoordinate = document
					.querySelector(`#${element}`)
					.getBoundingClientRect().top
				let windowScroll = window.pageYOffset
				let pos = elementTopCoordinate + windowScroll
				if (window.innerWidth >= 1000) {
					pos -= 100
				} else if (window.innerWidth < 1000 && window.innerWidth > 768) {
					pos -= 60
				} else if (window.innerWidth <= 768 && window.innerWidth > 475) {
					pos -= 50
				} else if (window.innerWidth <= 475) {
					pos -= 30
				}
				window.scrollTo({
					top: pos,
					left: 0,
					behavior: 'smooth',
				})
			})
		})
	}
	scrollToElementInHTML('definition', 'nav-btn__definition')
	scrollToElementInHTML('benefits', 'nav-btn__benefits')
	scrollToElementInHTML('specialists', 'nav-btn__specialists')
	scrollToElementInHTML('portfolio', 'nav-btn__portfolio')
	scrollToElementInHTML('reviews', 'nav-btn__reviews')
	scrollToElementInHTML('qa', 'nav-btn__qa')
	scrollToElementInHTML('discover', 'nav-btn__discover')
}

export default scrollNavElements
