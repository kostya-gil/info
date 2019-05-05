;(() => {
//Можно было все раскидать по модулям, но т.к. мало кода, не вижу особого смысла.

	const slider = document.querySelector('.slider__item');
	noUiSlider.create(slider, {
		start: 445,
		connect: 'lower',
		connect: true,
		range: {
			'min': 0,
			'max': 900
		}
	});

	//fix для ссылок внутри чекбоса, т.к. сделал клик на весь элемент а не только на "чек".
	[].slice.call(document.querySelectorAll('.link')).forEach(function(item, index, array) {
	item.addEventListener('click', function(e) {
		window.open(this.getAttribute('href'));
	});
});

[].slice.call(document.querySelectorAll('.skills-data-item, .plan-radio-btn')).forEach(function(item, index, array) {
	item.addEventListener('click', function(e) {
		e.preventDefault();

		let valueAttr = item.querySelector('input').getAttribute('checked');
		let check = item.querySelector('span');
		let input = item.querySelector('input');

		if (item.classList.contains('skills-data-item')) {
			valueAttr ? (check.classList.remove('checked'), input.removeAttribute('checked')) : (check.classList.add('checked'), input.setAttribute('checked', 'true'));
		} else {
			[].slice.call(array).forEach(function(radioBtn) {
				if (radioBtn.classList.contains('plan-radio-btn')) {
					radioBtn.querySelector('span').classList.remove('checked');
					radioBtn.querySelector('input').setAttribute('checked', 'false');
				}
			});
			check.classList.add('checked');
			input.setAttribute('checked', 'true');
		}
	});
});

})();
