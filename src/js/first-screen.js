
// footer__tab

((tab)=>{

	"use strict";

	if(!tab) {

		return;

	}

	const btns = tab.querySelectorAll('.btn'),
		  items = document.querySelectorAll('.first-screen__img-tab ');

	Array.from(btns, btn => {

		btn.addEventListener('click', () => {

			Array.from(btns, (_btn, index) => {

				_btn.classList.toggle('is-active', _btn === btn);
				items[index].classList.toggle('is-active', _btn === btn);

			});

		});

	});

	// parallax

	if ('IntersectionObserver' in window) {

		let isInViewport = false;

		const box = document.querySelector('.first-screen'),
			  img = document.querySelector('.first-screen__img');

		const options = {
			root: null,
			rootMargin: '0px',
			threshold: [0.01]
		};

		const callback = (entries, observer) => {

			Array.prototype.forEach.call(entries, (entry) => {

				isInViewport = entry.isIntersecting;

				console.log(entry,isInViewport);

			});

		};

		const observer = new IntersectionObserver(callback, options);

		observer.observe(box);

		PubSub.subscribe('windowScroll', () => {

			if (isInViewport) {

				let Pos = window.innerHeight - box.clientHeight - (box.getBoundingClientRect().top * 2); // относительно центра экрана
				let Y = Pos / (window.innerHeight + box.clientHeight) * 100; // смещение в процентах
				Y *= 0.2; // коэффициент смещения

				img.style.transform = 'translate3d(0,'+ Y +'px,0)';

			}

		});

	}

})(document.querySelector('.first-screen__tabs'));