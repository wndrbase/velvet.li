((forms) => {

	"use strict";

	if(!forms.length) {

		return;

	}

	VELVET.readySubscribe = data => {

		console.log(data);

		const form = document.querySelector('.form-subscribe.is-send');

		form.classList.remove('is-send');

		form.querySelector('.form-subscribe__result').textContent = data.msg;

		form.classList.add('is-done');

		form.querySelector('.form-subscribe__submit').disabled = false;

		if(data.result === "success"){

		}

		if(data.result === "error"){

			setTimeout( () => form.classList.remove('is-done'), 5000);

		}

	};

	Array.from(forms, form => {

		form.addEventListener('submit', event => {

			event.preventDefault();

			let url = form.getAttribute('action');

			url = url.replace("/post?u=", "/post-json?u=");
			url = url + '&c=VELVET.readySubscribe';

			form.classList.add('is-send');
			form.querySelector('.form-subscribe__submit').disabled = true;

			const script = document.createElement('script');

			script.type = 'text/javascript';
			script.async = true;
			script.src = url

			document.head.appendChild(script);

		});

	});

})(document.querySelectorAll('.form-subscribe'));