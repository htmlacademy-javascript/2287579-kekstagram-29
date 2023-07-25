import { renderThumbnails } from './thumbnail.js';
import './form-upload.js';
import { getData, sendData } from './api.js';
import { debounce, showAlert } from './util.js';
import { closeModal } from './form-upload.js';
import { showErrorMessage, showSuccessMessage } from './message.js';
import { setOnFormSubmit } from './form-validation.js';
import { init as initFilter } from './filter.js';

setOnFormSubmit(async (data) => {
	try {
		await sendData(data);
		closeModal();
		showSuccessMessage();
	} catch {
		showErrorMessage();
	}
});

getData().then((pictures) => {
	renderThumbnails(pictures);
	const debouncedRenderGallery = debounce(renderThumbnails);
	initFilter(pictures, debouncedRenderGallery);
}).catch((err) => showAlert(err.message));
