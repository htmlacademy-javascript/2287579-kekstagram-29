import { renderThumbnails } from './thumbnail.js';
import { getPictures } from './data.js';
import './form-upload.js';
import { getData, sendData } from './api.js';
import { debounce, showAlert } from './util.js';
import { closeModal } from './form-upload.js';
import { showErrorMessage, showSuccessMessage } from './message.js';
import { setOnFormSubmit } from './form-validation.js';
import { init as initFilter, getFilteredPictures } from './filter.js';

const pictures = getPictures();
renderThumbnails(pictures);

setOnFormSubmit(async (data) => {
	try {
		await sendData(data);
		closeModal();
		showSuccessMessage();
	} catch {
		showErrorMessage();
	}
});

try {
	const data = await getData();
	const debouncedRenderGallery = debounce(renderThumbnails);
	initFilter(data, debouncedRenderGallery);
	renderThumbnails(getFilteredPictures); //не уверен
} catch (err) {
	showAlert(err.message);
}
