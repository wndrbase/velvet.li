((modal)=>{

	"use strict";

	if(!modal) {

		return;

	}

/*	const items = modal.querySelectorAll('.modal__item'),
		  btns = document.querySelectorAll('[data-modal]'),
		  wrapper = document.querySelector('.wrapper');

	let windowScroll = window.pageYOffset;

	modal.addEventListener('click', (e) => {

		if(e.target.classList.contains('modal') || e.target.closest('.modal__close')){

			PP.hideModal();

		}

	});

	PP.hideModal = () => {

		modal.classList.add('visuallyhidden');

		document.body.classList.remove('modal-show');
		wrapper.style.top = 0;
		window.scrollTo(0,windowScroll);

		setTimeout( () => document.documentElement.classList.remove('scroll-behavior-off'));

		PubSub.publish('hideModal', PP.activeModal);

		PP.activeModal = false;

	};

	PP.modalShow = (selector)=>{

		if(!PP.activeModal){

			windowScroll = window.pageYOffset;

		}

		PP.activeModal = modal.querySelector('.modal__item--' + selector);

		Array.prototype.forEach.call(items, (el) => {

			el.classList.toggle('visuallyhidden', el !== PP.activeModal);

		});

		document.documentElement.classList.add('scroll-behavior-off');

		setTimeout( () => {

			wrapper.style.top = -windowScroll + 'px';

			modal.classList.remove('visuallyhidden');

			document.body.classList.add('modal-show');
			window.scrollTo(0,0);

			PP.activeModal.focus();

			PubSub.publish('modalShow', selector);

		});

	};

	Array.prototype.forEach.call(btns,(el)=>
		el.addEventListener('click',()=>
			PP.modalShow(el.getAttribute('data-modal'))));
*/
})(document.querySelector('.modal'));