import { getPictures } from './data.js';
import { openGallery } from './gallery.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')?.content.querySelector('.picture');

// Функция для отрисовки миниатюры фотографии
const renderThumbnail = (picture) => {
	const pictureLink = pictureTemplate.cloneNode(true);
	const pictureImg = pictureElement.querySelector('.picture__img');
	const pictureLikes = pictureElement.querySelector('.picture__likes');
	const pictureComments = pictureElement.querySelector('.picture__comments');

	pictureImg.src = picture.url;
	pictureImg.alt = picture.description;
	pictureLikes.textContent = picture.likes;
	pictureComments.textContent = picture.comments.length;

	pictureLink.addEventListener('click', (evt) => {
		evt.preventDefault();
		openGallery(picture);
	});

	return pictureElement;
};

/** Функция для отрисовки миниатюр всех фотографий */
const renderThumbnails = (pictures) => {
	const fragment = document.createDocumentFragment();

	pictures.forEach((picture) => {
		const thumbnail = renderThumbnail(picture);
		fragment.appendChild(thumbnail);
	});

	picturesContainer.appendChild(fragment);
};

// Получаем данные фотографий и отрисовываем миниатюры
const pictures = getPictures();
renderThumbnails(pictures);

export { renderThumbnails };


// const thumbnailTemplate = document
// 	.querySelector('#picture').content
// 	.querySelector('.picture');

// const container = document.querySelector('.pictures');

// const createThumbnail = ({ id, comments, description, likes, url }) => {
// 	const thumbnail = thumbnailTemplate.cloneNode(true);

// 	thumbnail.querySelector('.picture__img').src = url;
// 	thumbnail.querySelector('.picture__img').alt = description;
// 	thumbnail.querySelector('.picture__comments').textContent = comments.length;
// 	thumbnail.querySelector('.picture__likes').textContent = likes;

// 	thumbnail.dataset.thumbnailId = id; // выдает ошибку

// 	return thumbnail;
// };

// const renderThumbnails = (pictures) => {
// 	const fragment = document.createDocumentFragment();
// 	pictures.forEach((picture) => {
// 		const thumbnail = createThumbnail(picture);
// 		fragment.append(thumbnail);
// 	});

// 	container.append(fragment);
// };

// export { renderThumbnails };
