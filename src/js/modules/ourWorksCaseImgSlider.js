function ourWorksCaseImgSlider() {
	// Case 1
	function portfolioCase1() {
		const slider = document.querySelector('#portfolioCase1')
		const sliderImgWrapper = document.querySelector(
			'#portfolioCase1 .img-wrapper'
		)
		const sliderHandle = document.querySelector('#portfolioCase1 .handle')

		slider.addEventListener('mousemove', sliderMouseMove)
		slider.addEventListener('touchmove', sliderMouseMove)

		function sliderMouseMove(event) {
			if (isSliderLocked) return

			let sliderLeftX = slider.getBoundingClientRect().x
			let sliderWidth = slider.clientWidth
			let sliderHandleWidth = sliderHandle.clientWidth

			let mouseX = (event.clientX || event.touches[0].clientX) - sliderLeftX

			if (mouseX < 0) mouseX = 0
			else if (mouseX > sliderWidth) mouseX = sliderWidth

			sliderImgWrapper.style.width = `${(
				(1 - mouseX / sliderWidth) *
				100
			).toFixed(4)}%`
			sliderHandle.style.left = `calc(${((mouseX / sliderWidth) * 100).toFixed(
				4
			)}% - ${sliderHandleWidth / 2}px)`
		}

		let isSliderLocked = false

		slider.addEventListener('mousedown', sliderMouseDown)
		slider.addEventListener('touchstart', sliderMouseDown)
		slider.addEventListener('mouseup', sliderMouseUp)
		slider.addEventListener('touchend', sliderMouseUp)
		slider.addEventListener('mouseleave', sliderMouseLeave)

		function sliderMouseDown(event) {
			if (isSliderLocked) isSliderLocked = false
			sliderMouseMove(event)
		}

		function sliderMouseUp() {
			if (!isSliderLocked) isSliderLocked = true
		}

		function sliderMouseLeave() {
			if (isSliderLocked) isSliderLocked = false
		}
	}
	// Case 2
	function portfolioCase2() {
		const slider = document.querySelector('#portfolioCase2')
		const sliderImgWrapper = document.querySelector(
			'#portfolioCase2 .img-wrapper'
		)
		const sliderHandle = document.querySelector('#portfolioCase2 .handle')

		slider.addEventListener('mousemove', sliderMouseMove)
		slider.addEventListener('touchmove', sliderMouseMove)

		function sliderMouseMove(event) {
			if (isSliderLocked) return

			let sliderLeftX = slider.getBoundingClientRect().x
			let sliderWidth = slider.clientWidth
			let sliderHandleWidth = sliderHandle.clientWidth

			let mouseX = (event.clientX || event.touches[0].clientX) - sliderLeftX

			if (mouseX < 0) mouseX = 0
			else if (mouseX > sliderWidth) mouseX = sliderWidth

			sliderImgWrapper.style.width = `${(
				(1 - mouseX / sliderWidth) *
				100
			).toFixed(4)}%`
			sliderHandle.style.left = `calc(${((mouseX / sliderWidth) * 100).toFixed(
				4
			)}% - ${sliderHandleWidth / 2}px)`
		}

		let isSliderLocked = false

		slider.addEventListener('mousedown', sliderMouseDown)
		slider.addEventListener('touchstart', sliderMouseDown)
		slider.addEventListener('mouseup', sliderMouseUp)
		slider.addEventListener('touchend', sliderMouseUp)
		slider.addEventListener('mouseleave', sliderMouseLeave)

		function sliderMouseDown(event) {
			if (isSliderLocked) isSliderLocked = false
			sliderMouseMove(event)
		}

		function sliderMouseUp() {
			if (!isSliderLocked) isSliderLocked = true
		}

		function sliderMouseLeave() {
			if (isSliderLocked) isSliderLocked = false
		}
	}
	portfolioCase1()
	portfolioCase2()
}

export default ourWorksCaseImgSlider
