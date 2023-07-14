import { clearComments, renderComments } from './comments.js';

// работа по показу 5 комментариев
// const commentsCount = document.querySelector('.comments-count');
// const commentsLoader = document.querySelector('.comments-loader');
// //

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');

const socialCaption = bigPicture.querySelector('.social__caption');

const body = document.body;
const closeButton = bigPicture.querySelector('#picture-cancel');

// работа по показу 5 комментариев
// commentsCount.classList.remove('hidden');
// commentsLoader.classList.remove('hidden');
//

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

	// Удаление класса hidden у элемента .big-picture
	bigPicture.classList.remove('hidden');
	// Добавление класса modal-open к элементу body
	body.classList.add('modal-open');

	renderComments(picture.comments);

	// Закрытие окна по нажатию клавиши Esc
	document.addEventListener('keydown', onDocumentKeyDown);
	closeButton.addEventListener('click', onCloseButtonClick);
};

export { openGallery };
