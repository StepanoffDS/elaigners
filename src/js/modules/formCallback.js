import {
	savedUtmSource,
	savedUtmMedium,
	savedUtmCampaign,
	savedUtmTerm,
	savedUtmContent,
} from './utm.js'
function getFormCallback() {
	const callbackBtnClose = document.getElementById('callbackBtnClose')
	const callbackSuccessful = document.getElementById('callbackSuccessful')
	const callbackSuccessfulBtnClose = document.getElementById(
		'callbackSuccessfulBtnClose'
	)
	const makeCallback = document.querySelectorAll('.makeCallback')
	const callbackSection = document.getElementById('callback')

	makeCallback.forEach((btn) => {
		btn.onclick = (e) => {
			e.stopPropagation()
		}
	})

	callbackSection.onclick = (e) => {
		e.stopPropagation()
	}

	callbackSuccessful.onclick = (e) => {
		e.stopPropagation()
	}

	function validation(form) {
		// Создание класса ошибки
		function createError(input, text) {
			const parent = input.parentNode
			const errorLabel = document.createElement('label')
			errorLabel.classList.add('error-label')
			errorLabel.textContent = text
			input.classList.add('error')

			parent.append(errorLabel)
		}
		// Удаление класса ошибки
		function removeError(input) {
			const parent = input.parentNode
			if (input.classList.contains('error')) {
				parent.querySelector('.error-label').remove()
				input.classList.remove('error')
			}
		}

		let result = true

		const allInputs = form.querySelectorAll('input')

		for (const input of allInputs) {
			removeError(input)
			// Валидация телефона
			if (input.dataset.correctTel === 'true') {
				if (input.value.length != 18) {
					createError(input, 'Поле заполнено некорректно')
					result = false
					// const pos = window.pageYOffset - callbackSection.getBoundingClientRect().height
					const pos =
						window.pageYOffset + callbackSection.getBoundingClientRect().top
					window.scrollTo({
						top: pos,
						left: 0,
						behavior: 'smooth',
					})
				}
			}
			// Валидация почты
			if (input.dataset.email === 'true') {
				const re = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim
				if (input.value != '') {
					if (!re.test(input.value)) {
						createError(input, 'Поле заполнено некорректно')
						result = false
						// const pos = window.pageYOffset - callbackSection.getBoundingClientRect().height
						// let pos = window.pageYOffset - (appointmentSection.getBoundingClientRect().height - 700)
						const pos =
							window.pageYOffset + callbackSection.getBoundingClientRect().top
						window.scrollTo({
							top: pos,
							left: 0,
							behavior: 'smooth',
						})
					}
				}
			}
			// Валидация обязательных полей
			if (input.dataset.required === 'true') {
				if (input.value == '') {
					removeError(input)
					createError(input, 'Поле обязательно для заполнения')
					result = false
					// const pos = window.pageYOffset - callbackSection.getBoundingClientRect().height
					const pos =
						window.pageYOffset + callbackSection.getBoundingClientRect().top
					console.log(pos)
					window.scrollTo({
						top: pos,
						left: 0,
						behavior: 'smooth',
					})
				}
			}
		}
		return result
	}

	const formCallback = document.getElementById('formCallback')

	formCallback.addEventListener('submit', function (event) {
		event.preventDefault()
		if (validation(this) === true) {
			callbackSection.classList.add('none')
			callbackSuccessful.classList.remove('none')

			function trackSubmit() {
				ym(96169312, 'reachGoal', 'zakaz_zvonka')
				_tmr.push({ type: 'reachGoal', id: 3475391, goal: 'zakaz_zvonka' })
				gtag('event', 'generate_lead', {
					event_category: 'form',
					event_action: 'zakaz_zvonka',
				})
				return true
			}
			trackSubmit()

			let params = new FormData(formCallback)
			params.append('utm_source', savedUtmSource)
			params.append('utm_medium', savedUtmMedium)
			params.append('utm_campaign', savedUtmCampaign)
			params.append('utm_term', savedUtmTerm)
			params.append('utm_content', savedUtmContent)

			fetch('make-callback.php', {
				method: 'POST',
				body: params,
			})
		}
	})

	// Косметика
	makeCallback.forEach((e) => {
		e.addEventListener('click', () => {
			callbackSection.parentElement.classList.remove('none')
			document.body.classList.add('form-bg')
			// callbackSection.parentElement.style.top = `calc(${Math.round(window.pageYOffset)}px + ${document.querySelector('.header').offsetHeight}px + 20px)`
			if (window.innerWidth >= 1000) {
				callbackSection.parentElement.style.top = `calc(${Math.round(
					window.pageYOffset
				)}px + 20px)`
			} else {
				callbackSection.parentElement.style.top = `calc(${Math.round(
					window.pageYOffset
				)}px + ${document.querySelector('.header').offsetHeight}px + 20px)`
			}
		})
	})

	// Закрытие формы
	document.addEventListener('click', closeForm)
	function closeForm() {
		const callbackSection = document.getElementById('callback')
		callbackSection.parentElement.classList.add('none')
		document.body.classList.remove('form-bg')
		callbackSuccessful.classList.add('none')
	}
	callbackBtnClose.addEventListener('click', closeForm)
	callbackSuccessfulBtnClose.addEventListener('click', closeForm)
}

export default getFormCallback
