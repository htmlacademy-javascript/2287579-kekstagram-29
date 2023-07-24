import { isEscapeKey } from './data.js';
import { resetScale } from './scale-control.js';
import { resetEffect } from './effect-control.js';
import { resetValidation } from './form-validation.js';
import { onFileInputChange } from './upload-img.js';

const form = document.querySelector('.img-upload__form');
const imgUploadInput = form.querySelector('.img-upload__input');
const inputHashtag = form.querySelector('input[name="hashtags"]');
const textDescription = form.querySelector('.text__description');
const imgUploadOverlay = form.querySelector('.img-upload__overlay');

const startUpload = () => {
	imgUploadOverlay.classList.remove('hidden');
	document.body.classList.add('modal-open');
	document.addEventListener('keydown', onDocumentKeyDown);
};

const closeModal = () => form.reset();

form.addEventListener('reset', () => {
	resetScale();
	resetEffect();
	resetValidation();
	imgUploadOverlay.classList.add('hidden');
	document.body.classList.remove('modal-open');
	document.removeEventListener('keydown', onDocumentKeyDown);
});

imgUploadInput.addEventListener('change', () => {
	startUpload();
	onFileInputChange();
});

function onDocumentKeyDown(evt) {
	if (isEscapeKey(evt)) {
		evt.preventDefault();
		closeModal();
	}
}

[inputHashtag, textDescription].forEach((item) => {
	item.addEventListener('keydown', (evt) => {
		if (isEscapeKey(evt)) {
			evt.stopPropagation();
		}
	});
});

export { closeModal, startUpload };
