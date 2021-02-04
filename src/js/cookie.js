((cookie) => {

	if(cookie) {

		if(Cookies.get('YourPrivacy') !== 'Accept') {

			cookie.classList.remove('hide');

			const AnalyticsCookies = cookie.querySelector('[name="AnalyticsCookies"]'),
				  AdvertsitingCookies = cookie.querySelector('[name="AdvertsitingCookies"]');

			cookie.addEventListener('submit', event => {

				event.preventDefault();

				Cookies.set('YourPrivacy', 'Accept');
				Cookies.set('AnalyticsCookies', AnalyticsCookies.checked);
				Cookies.set('AdvertsitingCookies', AdvertsitingCookies.checked);

				cookie.classList.add('hide');

			});

		}

	}

})(document.querySelector('.cookie'));