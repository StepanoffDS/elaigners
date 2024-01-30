function getCookieSave() {
	// Функция для получения значения UTM меток из URL
	function getUTMValue(name) {
		let regex = new RegExp('[?&]' + name + '=([^&#]*)')
		let results = regex.exec(location.search)
		return results === null
			? ''
			: decodeURIComponent(results[1].replace(/\+/g, ' '))
	}

	// let url = new URL(window.location.href)
	// let utmParams = url.searchParams.get('utm_source')

	// const utm_Params = localStorage.getItem('utm_params')
	// if (utmParams) {
	// 	// use utmParams to build UTM tags
	// } else {
	// 	// build default UTM tags
	// }

	const queryString = window.location.search //

	// Функция для установки куки со значением и сроком хранения
	function setCookie(name, value, days) {
		let expires = new Date()
		expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
		document.cookie =
			name + '=' + value + ';expires=' + expires.toUTCString() + ';path=/'
	}

	// Получаем текущие значения UTM меток
	let utm_source = getUTMValue('utm_source')
	let utm_medium = getUTMValue('utm_medium')
	let utm_campaign = getUTMValue('utm_campaign')

	// Проверяем, есть ли уже сохраненные метки в куки
	let saved_utm_source = getUTMValue('saved_utm_source')
	let saved_utm_medium = getUTMValue('saved_utm_medium')
	let saved_utm_campaign = getUTMValue('saved_utm_campaign')

	// Обновляем сохраненные метки в куки, если они изменились
	if (utm_source && utm_source !== saved_utm_source) {
		setCookie('saved_utm_source', utm_source, 365) // 1 год
	}
	if (utm_medium && utm_medium !== saved_utm_medium) {
		setCookie('saved_utm_medium', utm_medium, 365) // 1 год
	}
	if (utm_campaign && utm_campaign !== saved_utm_campaign) {
		setCookie('saved_utm_campaign', utm_campaign, 365) // 1 год
	}
}

export default getCookieSave
