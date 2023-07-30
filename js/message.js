const successMessage = document
	.querySelector('#success')
	.content.querySelector('.success');
const errorMessage = document
	.querySelector('#error')
	.content.querySelector('.error');
const body = document.querySelector('body');

function hideMessage() {
	const messageElement = document.querySelector('.success') || document.querySelector('.error');
	messageElement.remove();
	document.removeEventListener('keydown', onDocumentKeyDown, true); //true 3-им параметром для реализации поэтапного закрытия модалок по ESC
	body.removeEventListener('click', onBodyClick);
}

function onBodyClick(evt) {
	if (
		evt.target.closest('.success__inner') ||
		evt.target.closest('.error__inner')
	) {
		return;
	}
	hideMessage();
}

function onDocumentKeyDown(evt) {
	if (evt.key === 'Escape') {
		evt.stopPropagation(); //добавил для поэтапного закрытия модалок(сначала окна с ошибкой, потом форма фотографий)
		hideMessage();
	}
}

const showMessage = (messageElement, closeButtonClass) => {
	body.append(messageElement);
	document.addEventListener('keydown', onDocumentKeyDown, true); //true 3-им параметром для реализации поэтапного закрытия модалок по ESC
	body.addEventListener('click', onBodyClick);
	messageElement.querySelector(closeButtonClass).addEventListener('click', hideMessage);
};

const showSuccessMessage = () => {
	showMessage(successMessage, '.success__button');
};

const showErrorMessage = () => {
	showMessage(errorMessage, '.error__button');
};

export { showSuccessMessage, showErrorMessage };
