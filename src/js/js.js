/*! UTF-8

© kovrigin
Все права разрешены
красивый дизайн должен иметь красивый код®

https://github.com/htmlpluscss/

*/

(() => {

	"use strict";

	window.VELVET = window.VELVET || {};
	VELVET.resizeTimeout = null;
	VELVET.windowWidthOLd = window.innerWidth;

	window.addEventListener("resize", () => {

		window.requestAnimationFrame( () => {

			if (!VELVET.resizeTimeout) {

				VELVET.resizeTimeout = setTimeout( () => {

					VELVET.resizeTimeout = null;

					if(VELVET.windowWidthOLd !== window.innerWidth) {

						VELVET.windowWidthOLd = window.innerWidth;

						PubSub.publish('windowWidthResize');

					}

				}, 100);

			}

		});

	});

	window.addEventListener("scroll", () => window.requestAnimationFrame( () => PubSub.publish('windowScroll')));
	window.addEventListener("DOMContentLoaded", () => PubSub.publish('DOMContentLoaded'));
	window.addEventListener("load", () => PubSub.publish('pageLoad'));

	if(document.querySelector('.scroll-up')) {

		document.querySelector('.scroll-up').addEventListener('click', () =>
			window.scrollTo({top: 0, behavior: 'smooth'}));

	}

	// Determine if an element is in the visible viewport
	VELVET.isInViewport = el => el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom <= window.innerHeight;

})();