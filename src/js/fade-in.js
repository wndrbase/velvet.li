(() => {

	if ('IntersectionObserver' in window) {

		const options = {
			root: null,
			rootMargin: '0px',
			threshold: [0.01]
		};

		const callback = (entries, observer) => {

			Array.from(entries, entry => {

				if (entry.intersectionRatio > 0) {

					entry.target.classList.add('is-show');
					observer.unobserve(entry.target);

				}

			});

		};

		const observer = new IntersectionObserver(callback, options);

		Array.from(document.querySelectorAll('.fade-in'), el => observer.observe(el));

	}
	else {

		Array.from(document.querySelectorAll('.fade-in'), el => el.classList.add('is-show'));

	}

})();