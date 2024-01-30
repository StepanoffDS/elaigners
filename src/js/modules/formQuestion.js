import {
	savedUtmSource,
	savedUtmMedium,
	savedUtmCampaign,
	savedUtmTerm,
	savedUtmContent,
} from './utm.js'
function getFormQuestion() {
	const questionBtnClose = document.getElementById('questionBtnClose')
	const questionSuccessful = document.getElementById('questionSuccessful')
	const questionSuccessfulBtnClose = document.getElementById(
		'questionSuccessfulBtnClose'
	)
	const makeQuestion = document.querySelectorAll('.makeQuestion')
	const questionSection = document.getElementById('question')

	makeQuestion.forEach((btn) => {
		btn.onclick = (e) => {
			e.stopPropagation()
		}
	})

	questionSection.onclick = (e) => {
		e.stopPropagation()
	}

	questionSuccessful.onclick = (e) => {
		e.stopPropagation()
	}

	// Валидация
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
					// const pos = window.pageYOffset - questionSection.getBoundingClientRect().height
					const pos =
						window.pageYOffset + questionSection.getBoundingClientRect().top
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
						// const pos = window.pageYOffset - questionSection.getBoundingClientRect().height
						// let pos = window.pageYOffset - (appointmentSection.getBoundingClientRect().height - 700)
						const pos =
							window.pageYOffset + questionSection.getBoundingClientRect().top
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
					// const pos = window.pageYOffset - questionSection.getBoundingClientRect().height
					const pos =
						window.pageYOffset + questionSection.getBoundingClientRect().top
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

	const formQuestion = document.getElementById('questionForm')

	// Отправка формы
	formQuestion.addEventListener('submit', function (event) {
		event.preventDefault()
		if (validation(this) === true) {
			questionSection.classList.add('none')
			questionSuccessful.classList.remove('none')

			function trackSubmit() {
				ym(96169312, 'reachGoal', 'zadat_vopros')
				_tmr.push({ type: 'reachGoal', id: 3475391, goal: 'zadat_vopros' })
				gtag('event', 'generate_lead', {
					event_category: 'form',
					event_action: 'zadat_vopros',
				})
				return true
			}
			trackSubmit()

			let params = new FormData(formQuestion)
			params.append('utm_source', savedUtmSource)
			params.append('utm_medium', savedUtmMedium)
			params.append('utm_campaign', savedUtmCampaign)
			params.append('utm_term', savedUtmTerm)
			params.append('utm_content', savedUtmContent)

			fetch('make-question.php', {
				method: 'POST',
				body: params,
			})
		}
	})

	// Косметика
	makeQuestion.forEach((e) => {
		e.addEventListener('click', () => {
			questionSection.parentElement.classList.remove('none')
			document.body.classList.add('form-bg')
			// questionSection.parentElement.style.top = `calc(${Math.round(window.pageYOffset)}px + ${document.querySelector('.header').offsetHeight}px + 20px)`
			if (window.innerWidth >= 1000) {
				questionSection.parentElement.style.top = `calc(${Math.round(
					window.pageYOffset
				)}px + 20px)`
			} else {
				questionSection.parentElement.style.top = `calc(${Math.round(
					window.pageYOffset
				)}px + ${document.querySelector('.header').offsetHeight}px + 20px)`
			}
		})
	})

	// Закрытие формы
	document.addEventListener('click', closeForm)
	function closeForm() {
		const questionSection = document.getElementById('question')
		questionSection.parentElement.classList.add('none')
		document.body.classList.remove('form-bg')
		questionSuccessful.classList.add('none')
	}
	questionBtnClose.addEventListener('click', closeForm)
	questionSuccessfulBtnClose.addEventListener('click', closeForm)
}

export default getFormQuestion
