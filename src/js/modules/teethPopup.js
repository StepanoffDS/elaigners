function teethPopup() {
	//more about doctor
	const btnMore1 = document.querySelector('.our-works__card-more--1')
	const btnMore2 = document.querySelector('.our-works__card-more--2')
	const teethPopup1 = document.querySelector('.teeth-popup--1')
	const teethPopup2 = document.querySelector('.teeth-popup--2')
	// Появление формы

	function showForm(btn, popup) {
		btn.addEventListener('click', (e) => {
			e.stopPropagation()
			document.body.classList.add('form-bg')
			popup.classList.remove('none')
			if (window.innerWidth >= 1000) {
				popup.style.top = `calc(${Math.round(window.pageYOffset)}px + 20px)`
			} else {
				popup.style.top = `calc(${Math.round(window.pageYOffset)}px + ${
					document.querySelector('.header').offsetHeight
				}px + 20px)`
			}
		})
	}

	showForm(btnMore1, teethPopup1)
	showForm(btnMore2, teethPopup2)

	document.querySelectorAll('.teeth-popup__inner').forEach((popup) => {
		popup.onclick = function (e) {
			e.stopPropagation()
		}
	})

	const closeBtn1 = document.querySelector('.teeth-popup__close--1')
	const closeBtn2 = document.querySelector('.teeth-popup__close--2')
	function closeForm(closeBtn, popup) {
		closeBtn.addEventListener('click', closeForm)
		document.addEventListener('click', closeForm)
		function closeForm(e) {
			e.stopPropagation()
			popup.classList.add('none')
			document.body.classList.remove('form-bg')
			document.body.classList.remove('no-scroll')
		}
	}
	closeForm(closeBtn1, teethPopup1)
	closeForm(closeBtn2, teethPopup2)
}

export default teethPopup
