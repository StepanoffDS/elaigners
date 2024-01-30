function getTimePicker() {
	const valueTime = document.querySelectorAll('.form-appointment__input-time')
	const appointmentFormTime = document.getElementById('appointmentFormTime')
	valueTime.forEach((e) => {
		e.addEventListener('click', () => {
			appointmentFormTime.value = e.value
		})
	})
}

export default getTimePicker
