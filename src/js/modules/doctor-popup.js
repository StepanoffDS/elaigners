function getDoctorPopup() {
	//more about doctor
	const btnMore = document.querySelectorAll('.our-doctors__card-more')
	const doctorsPopup = document.querySelector('.doctors-popup')
	const doctorName = document.querySelector('.doctors-popup__name')
	const doctorImg = document.querySelector('.doctors-popup__img')
	const doctorDesc = document.querySelector('.doctors-popup__desc')
	// Появление формы
	btnMore.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			e.stopPropagation()
			document.body.classList.add('form-bg')
			if (btn.dataset.doctorId === '1') {
				doctorName.innerHTML = 'Каракашьян Анна Андреевна'
				doctorImg.innerHTML = `
				<img src="./img/our-doctors/doctor-01@1x.png" alt="Каракашьян Анна Андреевна">
				`
				doctorDesc.innerHTML = `Специализация - ортодонтическое лечение. Лечение на брекет-системе взрослых и детей. Лечение на элайнерах (сертифицированный специалист с 2014 года). Лечение детей на детских элайнерах. Ортодонтическое лечение с применением микроимплантов.`
			}
			if (btn.dataset.doctorId === '2') {
				doctorName.innerHTML = 'Лемехова Антонина Викторовна'
				doctorImg.innerHTML = `
				<img src="./img/our-doctors/doctor-02@1x.png" alt="Лемехова Антонина Викторовна">
				`
				doctorDesc.innerHTML = `Антонина Викторовна владеет современными диагностическими и практическими навыками, необходимыми при ортодонтическом лечении. Специализируется на лечении взрослых и детей с применением съемных и несъемных ортодонтических аппаратов, исправлении прикуса с использованием брекет-систем и элайнеров.`
			}

			doctorsPopup.classList.remove('none')

			if (window.innerWidth >= 1000) {
				doctorsPopup.style.top = `calc(${Math.round(
					window.pageYOffset
				)}px + 20px)`
			} else {
				doctorsPopup.style.top = `calc(${Math.round(window.pageYOffset)}px + ${
					document.querySelector('.header').offsetHeight
				}px + 20px)`
			}
		})
	})

	document.querySelector('.doctors-popup__inner').onclick = function (e) {
		e.stopPropagation()
	}

	// Закрытие формы
	const closeBtn = document.querySelector('.doctors-popup__close')
	closeBtn.addEventListener('click', closeForm)
	document.addEventListener('click', closeForm)

	function closeForm(e) {
		e.stopPropagation()
		doctorsPopup.classList.add('none')
		document.body.classList.remove('form-bg')
		document.body.classList.remove('no-scroll')
	}
}

export default getDoctorPopup
