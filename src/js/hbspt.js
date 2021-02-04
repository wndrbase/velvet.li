((forms)=>{

	if(!forms.length) {

		return;

	}

	const hbsptFormsCreate = form => {

		hbspt.forms.create({
			portalId: "8473950",
			formId: form.getAttribute('data-hbspt-form'),
			target: '#' + form.getAttribute('id')
		});

	}

	const script = document.createElement('script');

	script.async = true;
	script.src = '//js.hsforms.net/forms/v2.js';

	script.onload = () => {

		Array.from(forms, form => hbsptFormsCreate(form));

	};

	document.head.appendChild(script);

})(document.querySelectorAll('[data-hbspt-form]'));