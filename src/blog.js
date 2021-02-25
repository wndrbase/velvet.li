( () => {

	// загружаем форму
	const script = document.createElement('script');

	script.async = true;
	script.src = '//js.hsforms.net/forms/v2.js';

	script.onload = () => {

		hbspt.forms.create({
			portalId: "8473950",
			formId: "1647f3c2-972e-4620-b84a-9d200c1c8bb9"
		});

	};

	document.head.appendChild(script);

	document.addEventListener('click', event => {

		const target = event.target;

		if(target.closest('.hbspt-form-wrap__close') || target.classList.contains('hbspt-form-wrap')){

			document.body.classList.remove('show-popup-hubspot-form');

		}

		if(target.closest('[data-popup="hubspot"]')){

			document.body.classList.add('show-popup-hubspot-form');
			event.preventDefault();

		}

	});

})();