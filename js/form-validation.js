import { isUniqueArr } from './data.js';

const SubmitButtonText = {
	IDLE: 'Опубликовать',
	SUBMITTING: 'Отправляю...',
};

const form = document.querySelector('.img-upload__form');
const inputHashtag = form.querySelector('input[name="hashtags"]');
const submitButton = form.querySelector('.img-upload__submit');

let hashtagArray = [];

const pristine = new Pristine(form, {
	classTo: 'img-upload__field-wrapper',
	errorTextParent: 'img-upload__field-wrapper',
	errorTextClass: 'img-upload__field-wrapper--error',
});

inputHashtag.addEventListener('blur', () => {
	hashtagArray = inputHashtag.value.trim().toLowerCase().split(' ').filter(Boolean);
	pristine.validate();
});

const isValidHashtag = () => {
	const hashtagPattern = /^#(?=.*[^0-9])[a-zа-яё0-9]{1,19}$/i;
	return hashtagArray.every((item) => hashtagPattern.test(item));
};

const isValidAmount = () => hashtagArray.length < 5;

const isUniqueHashtag = () => isUniqueArr(hashtagArray);

pristine.addValidator(inputHashtag, isValidHashtag, 'невалидный хэш-тег');
pristine.addValidator(inputHashtag, isValidAmount, 'не больше 5 хэш-тегов');
pristine.addValidator(inputHashtag, isUniqueHashtag, 'хэш-теги не должны повторяться');

form.addEventListener('submit', (evt) => {
	evt.preventDefault();
	pristine.validate();
});

export const resetValidation = () => pristine.reset();

const toggleSubmitButton = (isDisabled) => {
	submitButton.disabled = isDisabled;
	submitButton.textContent = isDisabled
		? SubmitButtonText.SUBMITTING
		: SubmitButtonText.IDLE;
};

const setOnFormSubmit = (callback) => {
	form.addEventListener('submit', async (evt) => {
		evt.preventDefault();
		const isValid = pristine.validate();

		if (isValid) {
			toggleSubmitButton(true);
			await callback(new FormData(form));
			toggleSubmitButton();
		}
	});
};

export { setOnFormSubmit };
