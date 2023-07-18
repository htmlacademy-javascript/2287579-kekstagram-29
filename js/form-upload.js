import { isEscapeKey } from './data.js';
import { resetScale } from './scale-control.js';

const form = document.querySelector('.img-upload__form');
const imgUploadInput = form.querySelector('.img-upload__input');
// const inputScale = form.querySelector('input[name="scale"]');
// const inputEffectLevel = form.querySelector('input[name="effect-level"]');
const inputHashtag = form.querySelector('input[name="hashtags"]');
const textDescription = form.querySelector('.text__description');
const imgUploadOverlay = form.querySelector('.img-upload__overlay');
const buttonImgUploadCancel = form.querySelector('.img-upload__cancel');

const startUpload = () => {
	imgUploadOverlay.classList.remove('hidden');
	document.body.classList.add('modal-open');
	document.addEventListener('keydown', onDocumentKeyDown);
};

const cancelUpload = () => {
	// imgUploadOverlay.classList.add('hidden');
	// document.body.classList.remove('modal-open');
	// imgUploadInput.value = '';
	// inputScale.value = '';
	// inputEffectLevel.value = '';
	// inputHashtag.value = '';
	// textDescription.value = '';
	// form.reset();
	// document.removeEventListener('keydown', onDocumentKeyDown);

	form.reset();
	resetScale();
	// resetEffect();
	// pristine.reset();
	imgUploadOverlay.classList.add('hidden');
	document.body.classList.remove('modal-open');
	document.removeEventListener('keydown', onDocumentKeyDown);
};

imgUploadInput.addEventListener('change', () => {
	startUpload();
});

buttonImgUploadCancel.addEventListener('click', () => {
	cancelUpload();
});

function onDocumentKeyDown(evt) {
	if (isEscapeKey(evt)) {
		evt.preventDefault();
		cancelUpload();
	}
}

[inputHashtag, textDescription].forEach((item) => {
	item.addEventListener('keydown', (evt) => {
		if (isEscapeKey(evt)) {
			evt.stopPropagation();
		}
	});
});
