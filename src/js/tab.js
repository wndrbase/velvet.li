
// footer__tab

((tab)=>{

	"use strict";

	if(!tab) {

		return;

	}

	const btns = tab.querySelectorAll('.footer__tab-btn'),
		  items = tab.querySelectorAll('.footer__tab-item');

	Array.prototype.forEach.call(btns, (btn) => {

		btn.addEventListener('click', () => {

			Array.prototype.forEach.call(btns, (_btn, index) => {

				if(_btn.classList.contains('is-open')) {

					_btn.classList.remove('is-open');
					items[index].classList.remove('is-open');

				}
				else {

					_btn.classList.toggle('is-open', _btn === btn);
					items[index].classList.toggle('is-open', _btn === btn);

				}

			});

		});

	});

})(document.querySelector('.footer__tab'));