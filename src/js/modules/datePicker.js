import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'

function getDatePick() {
	const date = new AirDatepicker('#appointmentFormDate', {
		inline: true,
		minDate: new Date(),
	})
}

export default getDatePick
