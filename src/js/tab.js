
// footer__tab

((tab)=>{

	if(!tab) {

		return;

	}

	const btns = tab.querySelectorAll('.footer__tab-btn'),
		  items = tab.querySelectorAll('.footer__tab-item');

	Array.from(btns, btn => {

		btn.addEventListener('click', () => {

			Array.from(btns, (_btn, index) => {

				_btn.classList.toggle('is-open', _btn === btn);
				items[index].classList.toggle('is-open', _btn === btn);

			});

		});

	});

})(document.querySelector('.footer__tab'));