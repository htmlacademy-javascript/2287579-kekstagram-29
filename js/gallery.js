import { clearComments, renderComments } from './comments.js';


const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');

const socialCaption = bigPicture.querySelector('.social__caption');

const body = document.body;
const closeButton = bigPicture.querySelector('#picture-cancel');

/**  Функция для закрытия окна по нажатию клавиши Esc */
const onDocumentKeyDown = (evt) => {
	if (evt.key === 'Escape') {
		closeGallery();
	}
};

/**  Функция для закрытия окна при клике по иконке закрытия */
const onCloseButtonClick = closeGallery;

/** Функция для закрытия окна */
function closeGallery() {
	bigPicture.classList.add('hidden');
	body.classList.remove('modal-open');
	clearComments();
	document.removeEventListener('keydown', onDocumentKeyDown);
	closeButton.removeEventListener('click', onCloseButtonClick);
}

/** Функция для открытия полноразмерного изображения */
const openGallery = (picture) => {
	bigPictureImg.src = picture.url;
	likesCount.textContent = picture.likes;
	socialCaption.textContent = picture.description;
	bigPicture.classList.remove('hidden');
	body.classList.add('modal-open');

	renderComments(picture.comments);

	// Закрытие окна по нажатию клавиши Esc
	document.addEventListener('keydown', onDocumentKeyDown);
	closeButton.addEventListener('click', onCloseButtonClick);
};

export { openGallery };
