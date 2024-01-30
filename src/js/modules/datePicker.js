import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'

function getDatePick() {
	const date = new AirDatepicker('#appointmentFormDate', {
		inline: true,
		minDate: new Date(),
	})

	// function disabledDates() {
	// 	const currentDate = new Date()
	// 	const curDay = currentDate.getDate()

	// 	const daysInCalendar = document.querySelectorAll('.air-datepicker-cell')
	// 	daysInCalendar.forEach((day) => {
	// 		if (day.dataset.date < curDay) {
	// 			day.classList.add('disabled')
	// 		}
	// 	})
	// }
}

export default getDatePick
