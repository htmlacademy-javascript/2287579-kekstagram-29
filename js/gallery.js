// Функция для открытия полноразмерного изображения
const openGallery = (picture) => {
	const bigPicture = document.querySelector('.big-picture');
	const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
	const likesCount = bigPicture.querySelector('.likes-count');
	const commentsCount = bigPicture.querySelector('.comments-count');
	const socialCaption = bigPicture.querySelector('.social__caption');
	const socialComments = bigPicture.querySelector('.social__comments');
	const body = document.body;

	bigPictureImg.src = picture.url;
	likesCount.textContent = picture.likes;
	commentsCount.textContent = picture.comments.length;
	socialCaption.textContent = picture.description;

	// Удаление всех комментариев из списка
	while (socialComments.firstChild) {
		socialComments.removeChild(socialComments.firstChild);
	}

	// Добавление комментариев в список
	picture.comments.forEach((comment) => {
		const commentElement = document.createElement('li');
		commentElement.classList.add('social__comment');

		const commentPicture = document.createElement('img');
		commentPicture.classList.add('social__picture');
		commentPicture.src = comment.avatar;
		commentPicture.alt = comment.name;
		commentPicture.width = 35;
		commentPicture.height = 35;

		const commentText = document.createElement('p');
		commentText.classList.add('social__text');
		commentText.textContent = comment.message;

		commentElement.appendChild(commentPicture);
		commentElement.appendChild(commentText);
		socialComments.appendChild(commentElement);
	});

	// Удаление класса hidden у элемента .big-picture
	bigPicture.classList.remove('hidden');

	// Добавление класса modal-open к элементу body
	body.classList.add('modal-open');

	// Функция для закрытия окна
	const closeGallery = () => {
		bigPicture.classList.add('hidden');
		body.classList.remove('modal-open');
		document.removeEventListener('keydown', onDocumentKeyDown);
		closeButton.removeEventListener('click', onCloseButtonClick);
	};

	// Функция для закрытия окна по нажатию клавиши Esc
	const onDocumentKeyDown = (evt) => {
		if (evt.key === 'Escape') {
			closeGallery();
		}
	};

	// Функция для закрытия окна при клике по иконке закрытия
	const onCloseButtonClick = () => {
		closeGallery();
	};

	// Закрытие окна по нажатию клавиши Esc
	document.addEventListener('keydown', onDocumentKeyDown);

	// Закрытие окна при клике по иконке закрытия
	const closeButton = bigPicture.querySelector('#picture-cancel');
	closeButton.addEventListener('click', onCloseButtonClick);
};

export { openGallery };


// import { renderThumbnails } from './thumbnail.js';
// import { showBigPicture } from './big-picture.js'

// const container = document.querySelector('.pictures');

// const renderGallery = (pictures) => {
// 	container.addEventListener('click', (evt) => {
// 		const thumbnail = evt.target.closest('[data-thumbnail-id');
// 		if (!thumbnail) {
// 			return;
// 		}

// 		evt.preventDefault();
// 		const picture = pictures.find(
// 			(item) => item.id === +thumbnail.dataset.thumbnailId
// 		);
// 		showBigPicture(picture);
// 	});

// 	renderThumbnails(pictures, container);
// };

// renderGallery();

// export { renderGallery };
