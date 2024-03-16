import mobileNav from './modules/mobile-nav.js'
import getDatePick from './modules/datePicker.js'
import getTimePicker from './modules/timePicker.js'
import phoneMask from './modules/phoneMask.js'
import getFormAppointment from './modules/formAppointment.js'
import getFormCallback from './modules/formCallback.js'
import getFormQuestion from './modules/formQuestion.js'
import stepsSwiper from './modules/steps-swiper.js'
import elignersWorkSwiper from './modules/eligners-work-swiper.js'
import getDoctorPopup from './modules/doctor-popup.js'
import ourWorksCaseImgSlider from './modules/ourWorksCaseImgSlider'
import caseSelect from './modules/caseSelect'
import teethPopup from './modules/teethPopup'
import teethSlider from './modules/teethSlider'
import commentsSwiper from './modules/comments-swiper.js'
import qa from './modules/qa.js'
import getPageUp from './modules/page-up'
import getCookiePermission from './modules/cookie-alert.js'
import getCloseMenuClickLinkMobile from './modules/closeMenuClickLinkMobile.js'
import utm from './modules/utm.js'
import scrollNavElements from './modules/scrollNavElements'

window.addEventListener('DOMContentLoaded', (event) => {
	try {
		utm()
	} catch (e) {
		console.error(e)
	}

	try {
		mobileNav()
	} catch (e) {
		console.error(e)
	}
	// try {
	// 	// scrollNavElements()
	// } catch (e) {
	// 	console.error(e)
	// }

	try {
		getDatePick()
	} catch (e) {
		console.error(e)
	}

	try {
		getTimePicker()
	} catch (e) {
		console.error(e)
	}

	try {
		phoneMask()
	} catch (e) {
		console.error(e)
	}

	try {
		getFormAppointment()
	} catch (e) {
		console.error(e)
	}

	try {
		getFormCallback()
	} catch (e) {
		console.error(e)
	}

	try {
		getFormQuestion()
	} catch (e) {
		console.error(e)
	}

	try {
		stepsSwiper()
	} catch (e) {
		console.error(e)
	}

	try {
		elignersWorkSwiper()
	} catch (e) {
		console.error(e)
	}

	try {
		getDoctorPopup()
	} catch (e) {
		console.error(e)
	}

	try {
		ourWorksCaseImgSlider()
	} catch (e) {
		console.error(e)
	}

	try {
		caseSelect()
	} catch (e) {
		console.error(e)
	}

	try {
		teethPopup()
	} catch (e) {
		console.error(e)
	}

	try {
		teethSlider()
	} catch (e) {
		console.error(e)
	}

	try {
		commentsSwiper()
	} catch (e) {
		console.error(e)
	}

	try {
		qa()
	} catch (e) {
		console.error(e)
	}

	try {
		getPageUp()
	} catch (e) {
		console.error(e)
	}

	try {
		getCookiePermission()
	} catch (e) {
		console.error(e)
	}

	try {
		getCloseMenuClickLinkMobile()
	} catch (e) {
		console.error(e)
	}
})
