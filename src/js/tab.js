
// footer__tab

((tab)=>{

	"use strict";

	if(!tab) {

		return;

	}

	const btns = tab.querySelectorAll('.footer__tab-btn'),
		  items = tab.querySelectorAll('.footer__tab-item');

	Array.from(btns, btn => {

		btn.addEventListener('click', () => {

			Array.from(btns, (_btn, index) => {

				if(_btn.classList.contains('is-open')) {

					_btn.classList.remove('is-open');
					items[index].classList.remove('is-open');

				}
				else {

					_btn.classList.toggle('is-open', _btn === btn);
					items[index].classList.toggle('is-open', _btn === btn);

					setTimeout( () => window.scrollTo({top: window.pageYOffset + window.innerHeight, behavior: 'smooth'}), 100);

				}

			});

		});

	});

})(document.querySelector('.footer__tab'));