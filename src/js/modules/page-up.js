function getPageUp() {
	const pageUp = {
		el: document.querySelector('.page-up'),
		show() {
			// удалим у кнопки класс btn-up_hide
			this.el.classList.remove('page-up__hide')
		},
		hide() {
			// добавим к кнопке класс btn-up_hide
			this.el.classList.add('page-up__hide')
		},
		addEventListener() {
			// при прокрутке содержимого страницы
			window.addEventListener('scroll', () => {
				// определяем величину прокрутки
				const scrollY = window.scrollY || document.documentElement.scrollTop
				// если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
				scrollY > 500 ? this.show() : this.hide()
			})
			// при нажатии на кнопку .btn-up
			document.querySelector('.page-up').onclick = () => {
				// переместим в начало страницы
				window.scrollTo({
					top: 0,
					left: 0,
					behavior: 'smooth',
				})
			}
		},
	}

	pageUp.addEventListener()
}

export default getPageUp
