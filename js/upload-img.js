import { startUpload } from './form-upload.js';

const form = document.querySelector('.img-upload__form');
const fileField = form.querySelector('.img-upload__input');
const photoPreview = form.querySelector('.img-upload__preview img');
const effectsPrewiev = form.querySelectorAll('.effects__preview');

const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const isValidType = (file) => {
	const fileName = file.name.toLowerCase();
	return FILE_TYPES.some((it) => fileName.endsWith(it));
};

const onFileInputChange = () => {
	const file = fileField.files[0];

	if (file && isValidType(file)) {
		photoPreview.src = URL.createObjectURL(file);
		effectsPrewiev.forEach((preview) => {
			preview.style.backgroundImage = `url('${photoPreview.src}')`;
		});
	}
	startUpload();
};

export { onFileInputChange };
