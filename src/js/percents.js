( rows => {

	if(rows.length) {

		Array.from(rows, row => {

			const inner = row.querySelector('.percents__row-inner');

			row.append(inner.cloneNode(true));

		});

		if ('IntersectionObserver' in window) {

			const box = document.querySelector('.percents');

			const options = {
				root: null,
				rootMargin: '0px',
				threshold: [0.01]
			};

			const callback = (entries, observer) =>
				Array.from(entries, entry =>
					box.classList.toggle('in-viewport', entry.isIntersecting));

			const observer = new IntersectionObserver(callback, options);

			observer.observe(box);

		}

	}

})(document.querySelectorAll('.percents__row'));