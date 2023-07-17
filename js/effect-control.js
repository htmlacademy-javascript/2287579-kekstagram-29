const form = document.querySelector('.img-upload__form');
const wrapperSlider = document.querySelector('.effect-level__slider');
const effectValueInput = document.querySelector('.effect-level__value');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const imagePreview = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');

const filterValue = document.createElement('input');
filterValue.classList.add('filter-value');
filterValue.setAttribute('type', 'hidden');
filterValue.setAttribute('name', 'filter-value');
filterValue.setAttribute('value', '');
form.append(filterValue);

noUiSlider.create(wrapperSlider, {
	range: {
		min: 0,
		max: 0,
	},
	start: 0,
	step: 0,
	connect: 'lower'
});

const hideFilters = () => {
	sliderContainer.style.display = 'none';
};

const resetFilters = (min = 0, max = 1, step = 0.1) => {
	wrapperSlider.noUiSlider.updateOptions({
		range: {
			min,
			max,
		},
		start: 0,
		step,
	});
};

let choicedFilter = 'none';

hideFilters();

const changeEffect = () => {
	sliderContainer.style.display = '';
	switch (choicedFilter) {
		case 'chrome':
			resetFilters();
			break;
		case 'sepia':
			resetFilters();
			break;
		case 'marvin':
			resetFilters(0, 100, 1);
			break;
		case 'phobos':
			resetFilters(0, 3, 0.1);
			break;
		case 'heat':
			resetFilters(1, 3, 0.1);
			break;
		default:
			resetFilters();
			hideFilters();
	}
};

effectsList.addEventListener('change', (evt) => {
	choicedFilter = evt.target.value;
	changeEffect();
});

form.addEventListener('reset', () => {
	choicedFilter = 'none';
	changeEffect();
});


wrapperSlider.noUiSlider.on('update', () => {
	effectValueInput.value = wrapperSlider.noUiSlider.get();
	switch (choicedFilter) {
		case 'chrome':
			imagePreview.style.filter = `grayscale(${effectValueInput.value})`;
			break;
		case 'sepia':
			imagePreview.style.filter = `sepia(${effectValueInput.value})`;
			break;
		case 'marvin':
			imagePreview.style.filter = `invert(${effectValueInput.value}100%)`;
			break;
		case 'phobos':
			imagePreview.style.filter = `blur(${effectValueInput.value}px)`;
			break;
		case 'heat':
			imagePreview.style.filter = `brightness(${effectValueInput.value})`;
			break;
		default:
			imagePreview.style.filter = '';
	}
	filterValue.value = imagePreview.style.filter;
});
