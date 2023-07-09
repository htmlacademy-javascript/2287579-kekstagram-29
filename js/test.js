// const PICTURE_COUNT = 25;
// const AVATAR_COUNT = 6;
// const LIKE_MIN_COUNT = 15;
// const LIKE_MAX_COUNT = 200;
// const COMMENT_COUNT = 20;
// const COMMENT_LINES = [
// 	'Всё отлично!',
// 	'В целом всё неплохо. Но не всё.',
// 	'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
// 	'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
// 	'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
// 	'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
// ];
// const DESCRIPTIONS = [
// 	'Летний чил',
// 	'Не летний чил',
// 	'Зимняя забава',
// 	'Хорошая еда',
// 	'Норм',
// 	'Не норм',
// 	'Ух ты!',
// 	'Arriba!',
// 	'Урааа!',
// 	'А я его знаю?',
// 	'Кто это?',
// ];
// const NAMES = [
// 	'Jose',
// 	'Antonio',
// 	'Makobic',
// 	'Anton',
// 	'Человек',
// 	'Дима',
// ];

// const getRandomInteger = (a, b) => {
// 	const lower = Math.ceil(Math.min(a, b));
// 	const upper = Math.floor(Math.max(a, b));
// 	const result = Math.random() * (upper - lower + 1) + lower;
// 	return Math.floor(result);
// };

// const getRandomArrayElement = (items) =>
// 	items[getRandomInteger(0, items.length - 1)];

// const createIdGenerator = () => {
// 	let lastGeneratedId = 0;

// 	return () => {
// 		lastGeneratedId += 1;
// 		return lastGeneratedId;
// 	};
// };

// const generateCommentId = createIdGenerator();

// const createMessage = () => Array.from(
// 	{ length: getRandomInteger(1, 2) },
// 	() => getRandomArrayElement(COMMENT_LINES),
// ).join(' ');

// const createComment = () => ({
// 	id: generateCommentId(),
// 	avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
// 	message: createMessage(),
// 	name: getRandomArrayElement(NAMES),
// });

// const createPicture = (index) => ({
// 	id: index,
// 	url: `photos/${index}.jpg`,
// 	description: getRandomArrayElement(DESCRIPTIONS),
// 	likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
// 	comments: Array.from(
// 		{ length: getRandomInteger(0, COMMENT_COUNT) },
// 		createComment,
// 	),
// });

// const getPictures = () => Array.from(
// 	{ length: PICTURE_COUNT },
// 	(_, pictureIndex) => createPicture(pictureIndex + 1),
// );

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

// 	thumbnail.dataset.thumbnailId = id;

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

// const bigPictureElement = document.querySelector('.big-picture');
// const commentCountElement = bigPictureElement.querySelector('.social__comment-count');
// const commentListElement = bigPictureElement.querySelector('.social__comments');
// const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');
// const bodyElement = document.querySelector('body');
// const cancelButtonElement = bigPictureElement.querySelector('.big-picture__cancel');

// const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');


// const createComment2 = ({ avatar, name, message }) => {
// 	const comment = commentElement.cloneNode(true);

// 	comment.querySelector('.social__picture').src = avatar;
// 	comment.querySelector('.social__picture').alt = name;
// 	comment.querySelector('.social__text').textContent = message;

// 	return comment;
// };

// const renderComments = (comments) => {
// 	commentListElement.innerHTML = '';

// 	const fragment = document.createDocumentFragment();
// 	comments.forEach((item) => {
// 		const comment = createComment2(item);
// 		fragment.append(comment);
// 	});

// 	commentListElement.append(fragment);
// };

// const hideBigPicture = () => {
// 	bigPictureElement.classList.add('hidden');
// 	bodyElement.classList.remove('modal-open');
// 	document.removeEventListener('keydown', onDocumentKeydown);
// };

// function onDocumentKeydown(evt) {
// 	if (evt.key === 'Escape') {
// 		evt.preventDefault();
// 		hideBigPicture();
// 	}
// }

// const onCancelButtonClick = () => {
// 	hideBigPicture();
// };

// const renderPicturesDetails = ({ url, likes, description }) => {
// 	bigPictureElement.querySelector('.big-picture__img img').src = url;
// 	bigPictureElement.querySelector('.big-picture__img img').alt = description;
// 	bigPictureElement.querySelector('.likes-count').textContent = likes;
// 	bigPictureElement.querySelector('.social__caption').textContent = description;
// };

// const showBigPicture = (data) => {
// 	bigPictureElement.classList.remove('hidden');
// 	bodyElement.classList.add('modal-open');
// 	commentsLoaderElement.classList.add('hidden');
// 	document.addEventListener('keydown', onDocumentKeydown);

// 	renderPicturesDetails(data);
// 	renderComments(data.comments);
// };

// cancelButtonElement.addEventListener('click', onCancelButtonClick);

// const container2 = document.querySelector('.pictures');

// const renderGallery = (pictures) => {
// 	container2.addEventListener('click', (evt) => {
// 		const thumbnail = evt.target.closest('[data-thumbnail-id]');
// 		if (!thumbnail) {
// 			return;
// 		}

// 		evt.preventDefault();
// 		const picture = pictures.find(
// 			(item) => item.id === +thumbnail.dataset.thumbnailId
// 		);
// 		showBigPicture(picture);
// 	});

// 	renderThumbnails(pictures, container2);
// };

// renderThumbnails(getPictures());
// renderGallery(getPictures());
