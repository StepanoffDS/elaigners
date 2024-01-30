let savedUtmSource,
	savedUtmMedium,
	savedUtmCampaign,
	savedUtmTerm,
	savedUtmContent
function utm() {
	let utmSource, utmMedium, utmCampaign, utmTerm, utmContent
	// Проверяем, есть ли UTM-метки в URL
	var urlParams = new URLSearchParams(window.location.search)
	if (urlParams.has('utm_source')) {
		// Получаем значения UTM-меток
		utmSource = urlParams.get('utm_source')
		utmMedium = urlParams.get('utm_medium')
		utmCampaign = urlParams.get('utm_campaign')
		utmTerm = urlParams.get('utm_term')
		utmContent = urlParams.get('utm_content')

		// Устанавливаем дату окончания хранения на год
		var expirationDate = new Date()
		expirationDate.setFullYear(expirationDate.getFullYear() + 1)

		// Сохраняем UTM-метки в localStorage с датой окончания хранения
		localStorage.setItem('saved_utm_source', utmSource)
		localStorage.setItem('saved_utm_medium', utmMedium)
		localStorage.setItem('saved_utm_campaign', utmCampaign)
		localStorage.setItem('saved_utm_term', utmTerm)
		localStorage.setItem('saved_utm_content', utmContent)
		localStorage.setItem('utm_expiration_date', expirationDate.toISOString())
	}

	savedUtmSource = localStorage.getItem('saved_utm_source')
	savedUtmMedium = localStorage.getItem('saved_utm_medium')
	savedUtmCampaign = localStorage.getItem('saved_utm_campaign')
	savedUtmTerm = localStorage.getItem('saved_utm_term')
	savedUtmContent = localStorage.getItem('saved_utm_content')
}
export default utm
export {
	savedUtmSource,
	savedUtmMedium,
	savedUtmCampaign,
	savedUtmTerm,
	savedUtmContent,
}
