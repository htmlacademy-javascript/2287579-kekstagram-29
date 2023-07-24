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

const updateSliderOptions = (min = 0, max = 1, step = 0.1) => {
	wrapperSlider.noUiSlider.updateOptions({
		range: {
			min,
			max,
		},
		start: 100,
		step,
	});
};

let selectedEffect = 'none';

sliderContainer.hidden = true;

const changeEffect = () => {
	sliderContainer.hidden = selectedEffect === 'none';
	switch (selectedEffect) {
		case 'chrome':
			updateSliderOptions();
			break;
		case 'sepia':
			updateSliderOptions();
			break;
		case 'marvin':
			updateSliderOptions(0, 100, 1);
			break;
		case 'phobos':
			updateSliderOptions(0, 3, 0.1);
			break;
		case 'heat':
			updateSliderOptions(1, 3, 0.1);
			break;
		default:
			updateSliderOptions();
	}
};

effectsList.addEventListener('change', (evt) => {
	selectedEffect = evt.target.value;
	changeEffect();
});

form.addEventListener('reset', () => {
	selectedEffect = 'none';
	changeEffect();
});


wrapperSlider.noUiSlider.on('update', () => {
	effectValueInput.value = wrapperSlider.noUiSlider.get();
	switch (selectedEffect) {
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

export const resetEffect = () => {
	selectedEffect = 'none';
	changeEffect();
};
