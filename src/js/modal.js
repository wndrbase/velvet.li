((modal)=>{

	"use strict";

	if(!modal) {

		return;

	}

	const items = modal.querySelectorAll('.modal__item'),
		  btns = document.querySelectorAll('[data-modal]'),
		  wrapper = document.querySelector('.wrapper');

	let windowScroll = window.pageYOffset;

	modal.addEventListener('click', event => {

		if(event.target.classList.contains('modal') || event.target.closest('.modal__close')){

			VELVET.hideModal();

		}

	});

	VELVET.hideModal = () => {

		modal.classList.add('visuallyhidden');

		document.body.classList.remove('modal-show');
		wrapper.style.top = 0;
		window.scrollTo(0,windowScroll);

		setTimeout( () => document.documentElement.classList.remove('scroll-behavior-off'));

		PubSub.publish('hideModal', VELVET.activeModal);

		VELVET.activeModal = false;

	};

	VELVET.modalShow = selector => {

		if(!VELVET.activeModal){

			windowScroll = window.pageYOffset;

		}

		VELVET.activeModal = modal.querySelector('.modal__item--' + selector);

		Array.from(items, el => {

			el.classList.toggle('visuallyhidden', el !== VELVET.activeModal);

		});

		document.documentElement.classList.add('scroll-behavior-off');

		setTimeout( () => {

			wrapper.style.top = -windowScroll + 'px';

			modal.classList.remove('visuallyhidden');

			document.body.classList.add('modal-show');
			window.scrollTo(0,0);

			VELVET.activeModal.focus();

			PubSub.publish('modalShow', selector);

		});

	};

	Array.from(btns, el =>
		el.addEventListener('click',()=>
			VELVET.modalShow(el.getAttribute('data-modal'))));

})(document.querySelector('.modal'));