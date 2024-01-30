// import Swiper bundle with all modules installed
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

// import styles bundle
import 'swiper/css'

function stepsSwiper() {
	const swiper = new Swiper('.steps__swiper', {
		modules: [Navigation],
		navigation: {
			nextEl: '.steps__nav-btn--next',
			prevEl: '.steps__nav-btn--prev',
		},
		spaceBetween: 10,
		slidesPerView: 'auto',

		breakpoints: {
			1150: {
				spaceBetween: 14,
			},
			790: {
				spaceBetween: 20,
			},
		},
	})
}

export default stepsSwiper
