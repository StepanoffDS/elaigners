// import Swiper bundle with all modules installed
import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

// import styles bundle
import 'swiper/css'
import 'swiper/css/pagination'

function commentsSwiper() {
	const swiper = new Swiper('.comments__swiper', {
		modules: [Pagination],
		pagination: {
			el: '.comments__pagination',
		},
		spaceBetween: 10,
		slidesPerView: 'auto',
	})
}

export default commentsSwiper
