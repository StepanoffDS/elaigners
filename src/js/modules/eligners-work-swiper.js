// import Swiper bundle with all modules installed
import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

// import styles bundle
import 'swiper/css'
import 'swiper/css/pagination'

function elignersWorkSwiper() {
	const swiper = new Swiper('.eligners-work__swiper', {
		modules: [Pagination],
		pagination: {
			el: '.eligners-work__pagination',
		},
		spaceBetween: 10,
		slidesPerView: 'auto',
	})
}

export default elignersWorkSwiper
