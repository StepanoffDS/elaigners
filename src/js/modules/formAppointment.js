import {
	savedUtmSource,
	savedUtmMedium,
	savedUtmCampaign,
	savedUtmTerm,
	savedUtmContent,
} from './utm.js'
function getFormAppointment() {
	const appointmentBtnClose = document.getElementById('appointmentBtnClose')
	const appointmentSuccessful = document.getElementById('appointmentSuccessful')
	const appointmentSuccessfulBtnClose = document.getElementById(
		'appointmentSuccessfulBtnClose'
	)
	const makeAppointment = document.querySelectorAll('.makeAppointment')
	const appointmentSection = document.getElementById('appointment')

	makeAppointment.forEach((btn) => {
		btn.onclick = (e) => {
			e.stopPropagation()
		}
	})

	appointmentSection.onclick = (e) => {
		e.stopPropagation()
	}

	appointmentSuccessful.onclick = (e) => {
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
			// let position = Math.round(window.pageYOffset) - (Math.round(window.pageYOffset) / 2.5)
			removeError(input)
			// Валидация телефона
			if (input.dataset.correctTel === 'true') {
				if (input.value.length != 18) {
					createError(input, 'Поле заполнено некорректно')
					result = false
					const pos =
						window.pageYOffset + appointmentSection.getBoundingClientRect().top
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
						const pos =
							window.pageYOffset +
							appointmentSection.getBoundingClientRect().top
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
					const pos =
						window.pageYOffset + appointmentSection.getBoundingClientRect().top
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

	const formAppointment = document.getElementById('formAppointment')
	function submitForm(event) {
		event.preventDefault()
		if (validation(this) === true) {
			appointmentSection.parentElement.classList.add('none')
			appointmentSuccessful.classList.remove('none')

			function trackSubmit() {
				ym(96169312, 'reachGoal', 'zap_na_priem')
				_tmr.push({ type: 'reachGoal', id: 3475391, goal: 'zap_na_priem' })
				gtag('event', 'generate_lead', {
					event_category: 'form',
					event_action: 'zap_na_priem',
				})
				return true
			}
			trackSubmit()

			let params = new FormData(formAppointment)
			params.append('utm_source', savedUtmSource)
			params.append('utm_medium', savedUtmMedium)
			params.append('utm_campaign', savedUtmCampaign)
			params.append('utm_term', savedUtmTerm)
			params.append('utm_content', savedUtmContent)

			fetch('make-appointment.php', {
				method: 'POST',
				body: params,
			})
		}
	}
	formAppointment.addEventListener('submit', submitForm)

	// Появление формы
	makeAppointment.forEach((e) => {
		e.addEventListener('click', () => {
			// console.log(
			// 	'Статистика с formAppointment.js: ',
			// 	savedUtmSource,
			// 	savedUtmMedium,
			// 	savedUtmCampaign,
			// 	savedUtmTerm,
			// 	savedUtmContent
			// )
			let selectDoctor = document.getElementById('appointmentFormDoctorName')
			if (e.dataset.doctor === '001') {
				selectDoctor.value = 'Каракашьян Анна Андреевна, стоматолог-ортодонт'
			} else if (e.dataset.doctor === '002') {
				selectDoctor.value = 'Лемехова Антонина Викторовна, стоматолог-ортодонт'
			}
			appointmentSection.parentElement.classList.remove('none')
			document.body.classList.add('form-bg')
			// appointmentSection.parentElement.style.top = `calc(${Math.round(window.pageYOffset)}px + 20px)`
			if (window.innerWidth >= 1000) {
				appointmentSection.parentElement.style.top = `calc(${Math.round(
					window.pageYOffset
				)}px + 20px)`
			} else {
				appointmentSection.parentElement.style.top = `calc(${Math.round(
					window.pageYOffset
				)}px + ${document.querySelector('.header').offsetHeight}px + 20px)`
			}
		})
	})

	document.addEventListener('click', closeForm)

	function closeForm(e) {
		appointmentSection.parentElement.classList.add('none')
		document.body.classList.remove('form-bg')
		const selectDoctor = document.getElementById('appointmentFormDoctorName')
		selectDoctor.value = '0'
		appointmentSuccessful.classList.add('none')
	}

	appointmentBtnClose.addEventListener('click', closeForm)
	appointmentSuccessfulBtnClose.addEventListener('click', closeForm)
}

export default getFormAppointment
