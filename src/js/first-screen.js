
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

})(document.querySelector('.first-screen__tabs'));