( () => {

	// загружаем форму
	const script = document.createElement('script');

	let scriptLoad = false;

	script.async = true;
	script.src = '//js.hsforms.net/forms/v2.js';

	script.onload = () => {

		hbspt.forms.create({
			region: "na1",
			portalId: "19575538",
			formId: "77ef9e38-357c-4b1b-9da8-8f8b7b961fca"
		});

		scriptLoad = true;

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

			if(scriptLoad) {

				Array.from(document.querySelectorAll('.hbspt-form-wrap'), el => {

					console.log(el.querySelector('.hbspt-form form'))

					if(!el.querySelector('.hbspt-form form')){

						el.remove();

					}

				});

			}

		}

	});

})();