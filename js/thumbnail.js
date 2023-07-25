import { openGallery } from './gallery.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')?.content.querySelector('.picture');

// Функция для отрисовки миниатюры фотографии
const renderThumbnail = (picture) => {
	const pictureLink = pictureTemplate.cloneNode(true);
	const pictureImg = pictureLink.querySelector('.picture__img');
	const pictureLikes = pictureLink.querySelector('.picture__likes');
	const pictureComments = pictureLink.querySelector('.picture__comments');

	const {url, description, likes, comments} = picture;

	pictureImg.src = url;
	pictureImg.alt = description;
	pictureLikes.textContent = likes;
	pictureComments.textContent = comments.length;

	pictureLink.addEventListener('click', (evt) => {
		evt.preventDefault();
		openGallery(picture);
	});

	return pictureLink;
};

/** Функция для отрисовки миниатюр всех фотографий */
const renderThumbnails = (pictures) => {
	picturesContainer.querySelectorAll('.picture').forEach((element) => element.remove()); // из ретро - но ломает код и доп агргумент container

	const fragment = document.createDocumentFragment();

	pictures.forEach((picture) => {
		const thumbnail = renderThumbnail(picture);
		fragment.appendChild(thumbnail);
	});

	picturesContainer.appendChild(fragment);
};

export { renderThumbnails };
