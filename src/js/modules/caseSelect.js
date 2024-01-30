function caseSelect() {
	const workCardSelector = document.querySelectorAll('.our-works__selector')
	const workCard1 = document.querySelector('.our-works__card.case-1')
	const workCard2 = document.querySelector('.our-works__card.case-2')

	workCardSelector.forEach((selector) => {
		selector.addEventListener('click', () => {
			workCardSelector.forEach((selector) => {
				selector.classList.remove('our-works__selector--selected')
			})
			selector.classList.add('our-works__selector--selected')

			if (selector.classList.contains('ourWorkSelector2--js')) {
				workCard1.classList.add('none')
				workCard2.classList.remove('none')
			}

			if (selector.classList.contains('ourWorkSelector1--js')) {
				workCard2.classList.add('none')
				workCard1.classList.remove('none')
			}
		})
	})
}

export default caseSelect
