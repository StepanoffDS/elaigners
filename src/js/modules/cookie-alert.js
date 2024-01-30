import Cookies from 'js-cookie'

function getCookiePermission() {
	const COOKIE_NAME = 'visit'

	function toHTML() {
		return `
    <div class="cookie-permission cookie-permission--js">
			<div class="cookie__container">
				<div class="cookie-permission__inner">
					<div class="cookie-permission__text">
						<h2 class='cookie-permission__title'>Файлы Cookie</h2>
						<p>Мы используем <a href="./privacy-policy.html">файлы cookie</a></p>
					</div>
					<div class="cookie-permission__btn ">
						<button class="button-2 cookiePermissionBtn">Принять</button>
					</div>
				</div>
			</div>
		</div>
    `
	}

	if (!Cookies.get(COOKIE_NAME)) {
		document.querySelector('body').insertAdjacentHTML('beforeend', toHTML())
		const cookieAlert = document.querySelector('.cookie-permission--js')
		const cookieBtn = document.querySelector('.cookiePermissionBtn')

		setTimeout(() => {
			cookieAlert.classList.add('is-show')
		}, 1000)

		cookieBtn.addEventListener('click', () => {
			cookieAlert.classList.remove('is-show')

			Cookies.set(COOKIE_NAME, true, { expires: 365 })
		})
	}
}

export default getCookiePermission
