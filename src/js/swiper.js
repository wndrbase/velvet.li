((swiperContainer)=>{

	"use strict";

	if(!swiperContainer.length) {

		return;

	}

	let swiperInit = window.Swiper;

	Array.from(swiperContainer, swipe => {

		let mySwipe = null,
			toggleSwipe = null;

		const swipeNav = document.createElement('div'),
			  processStep = swipe.classList.contains('swiper-container--process');

		swipeNav.className = 'swiper-pagination';

		swipe.appendChild(swipeNav);

		// eager
		Array.from(swipe.querySelectorAll('[loading="lazy"]'), img => img.setAttribute('loading','eager'));

		if (processStep) {

			const current = swipe.querySelector('.process__swiper-current'),
				  total = swipe.querySelectorAll('.swiper-slide').length;

			toggleSwipe = () => {

				toggleSwipe = false;

				new Swiper(swipe, {
					loop: true,
					autoHeight: true,
					preloadImages: false,
					pagination: {
						el: swipeNav,
						clickable: true,
						bulletElement: 'button',
						bulletClass: 'button',
						bulletActiveClass: 'is-active'
					},
					on: {
						slideChange: () => current.textContent = (swipe.swiper.realIndex % total + 1)
					}
				});

			}

		}

		PubSub.subscribe('swiperJsLoad', toggleSwipe);

		if(!swiperInit) {

			swiperInit = true;

			const script = document.createElement('script');

			script.type = 'text/javascript';
			script.async = true;
			script.src = '/js/swiper.min.js';

			script.onload = () => PubSub.publish('swiperJsLoad');

			setTimeout( () => document.head.appendChild(script), window.pageYOffset === 0 ? 7000 : 100);

		}

	});

})(document.querySelectorAll('.swiper-container'));