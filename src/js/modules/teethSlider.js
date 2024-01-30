function teethSlider() {
	// Case 1
	function teethCase1Slide1() {
		const slider = document.querySelector('#teethCase1Slide1')
		const sliderImgWrapper = document.querySelector(
			'#teethCase1Slide1 .img-wrapper'
		)
		const sliderHandle = document.querySelector('#teethCase1Slide1 .handle')

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
	function teethCase1Slide2() {
		const slider = document.querySelector('#teethCase1Slide2')
		const sliderImgWrapper = document.querySelector(
			'#teethCase1Slide2 .img-wrapper'
		)
		const sliderHandle = document.querySelector('#teethCase1Slide2 .handle')

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
	function teethCase1Slide3() {
		const slider = document.querySelector('#teethCase1Slide3')
		const sliderImgWrapper = document.querySelector(
			'#teethCase1Slide3 .img-wrapper'
		)
		const sliderHandle = document.querySelector('#teethCase1Slide3 .handle')

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
	function teethCase1Slide4() {
		const slider = document.querySelector('#teethCase1Slide4')
		const sliderImgWrapper = document.querySelector(
			'#teethCase1Slide4 .img-wrapper'
		)
		const sliderHandle = document.querySelector('#teethCase1Slide4 .handle')

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
	function teethCase1Slide5() {
		const slider = document.querySelector('#teethCase1Slide5')
		const sliderImgWrapper = document.querySelector(
			'#teethCase1Slide5 .img-wrapper'
		)
		const sliderHandle = document.querySelector('#teethCase1Slide5 .handle')

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
	function teethCase1Slide6() {
		const slider = document.querySelector('#teethCase1Slide6')
		const sliderImgWrapper = document.querySelector(
			'#teethCase1Slide6 .img-wrapper'
		)
		const sliderHandle = document.querySelector('#teethCase1Slide6 .handle')

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
	function teethCase2Slide1() {
		const slider = document.querySelector('#teethCase2Slide1')
		const sliderImgWrapper = document.querySelector(
			'#teethCase2Slide1 .img-wrapper'
		)
		const sliderHandle = document.querySelector('#teethCase2Slide1 .handle')

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
	function teethCase2Slide2() {
		const slider = document.querySelector('#teethCase2Slide2')
		const sliderImgWrapper = document.querySelector(
			'#teethCase2Slide2 .img-wrapper'
		)
		const sliderHandle = document.querySelector('#teethCase2Slide2 .handle')

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
	// function teethCase2Slide3() {
	// 	const slider = document.querySelector('#teethCase2Slide3')
	// 	const sliderImgWrapper = document.querySelector(
	// 		'#teethCase2Slide3 .img-wrapper'
	// 	)
	// 	const sliderHandle = document.querySelector('#teethCase2Slide3 .handle')

	// 	slider.addEventListener('mousemove', sliderMouseMove)
	// 	slider.addEventListener('touchmove', sliderMouseMove)

	// 	function sliderMouseMove(event) {
	// 		if (isSliderLocked) return

	// 		let sliderLeftX = slider.getBoundingClientRect().x
	// 		let sliderWidth = slider.clientWidth
	// 		let sliderHandleWidth = sliderHandle.clientWidth

	// 		let mouseX = (event.clientX || event.touches[0].clientX) - sliderLeftX

	// 		if (mouseX < 0) mouseX = 0
	// 		else if (mouseX > sliderWidth) mouseX = sliderWidth

	// 		sliderImgWrapper.style.width = `${(
	// 			(1 - mouseX / sliderWidth) *
	// 			100
	// 		).toFixed(4)}%`
	// 		sliderHandle.style.left = `calc(${((mouseX / sliderWidth) * 100).toFixed(
	// 			4
	// 		)}% - ${sliderHandleWidth / 2}px)`
	// 	}

	// 	let isSliderLocked = false

	// 	slider.addEventListener('mousedown', sliderMouseDown)
	// 	slider.addEventListener('touchstart', sliderMouseDown)
	// 	slider.addEventListener('mouseup', sliderMouseUp)
	// 	slider.addEventListener('touchend', sliderMouseUp)
	// 	slider.addEventListener('mouseleave', sliderMouseLeave)

	// 	function sliderMouseDown(event) {
	// 		if (isSliderLocked) isSliderLocked = false
	// 		sliderMouseMove(event)
	// 	}

	// 	function sliderMouseUp() {
	// 		if (!isSliderLocked) isSliderLocked = true
	// 	}

	// 	function sliderMouseLeave() {
	// 		if (isSliderLocked) isSliderLocked = false
	// 	}
	// }
	function teethCase2Slide4() {
		const slider = document.querySelector('#teethCase2Slide4')
		const sliderImgWrapper = document.querySelector(
			'#teethCase2Slide4 .img-wrapper'
		)
		const sliderHandle = document.querySelector('#teethCase2Slide4 .handle')

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
	function teethCase2Slide5() {
		const slider = document.querySelector('#teethCase2Slide5')
		const sliderImgWrapper = document.querySelector(
			'#teethCase2Slide5 .img-wrapper'
		)
		const sliderHandle = document.querySelector('#teethCase2Slide5 .handle')

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
	function teethCase2Slide6() {
		const slider = document.querySelector('#teethCase2Slide6')
		const sliderImgWrapper = document.querySelector(
			'#teethCase2Slide6 .img-wrapper'
		)
		const sliderHandle = document.querySelector('#teethCase2Slide6 .handle')

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

	teethCase1Slide1()
	teethCase1Slide2()
	teethCase1Slide3()
	teethCase1Slide4()
	teethCase1Slide5()
	teethCase1Slide6()
	teethCase2Slide1()
	teethCase2Slide2()
	// teethCase2Slide3()
	teethCase2Slide4()
	teethCase2Slide5()
	teethCase2Slide6()
}

export default teethSlider
