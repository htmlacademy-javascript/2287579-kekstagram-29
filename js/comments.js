import './thumbnail.js';

const template = document.querySelector('#comment')?.content.querySelector('.social__comment');
const wrapperElement = document.querySelector('.social__comments');
const statusElement = document.querySelector('.social__comment-count');
const loaderButton = document.querySelector('.comments-loader');

// const commentsCountElement = document.querySelector('.comments-count');

/** @type {Object[]} массив комментриев октрытой модалки */
let currentComments = [];
//

// let shownCommentsCount = 5; // Количество уже показанных комментариев

/**
 * Создания разметки одного комментария
 */
const renderComment = (comment) => {
	const commentElement = template.cloneNode(true);
	const imageElement = commentElement.querySelector('.social__picture');

	imageElement.src = comment.avatar;
	imageElement.alt = comment.name;
	const textElement = commentElement.querySelector('.social__text');

	textElement.textContent = comment.message;

	commentElement.appendChild(imageElement);
	commentElement.appendChild(textElement);

	return commentElement;
};

loaderButton.addEventListener('click', () => {
	const currentCommentsCount = wrapperElement.childElementCount;
	let endOfSlice = currentCommentsCount + 5;
	const isAllComments = endOfSlice >= currentComments.length;

	endOfSlice = endOfSlice > currentComments.length ? currentComments.length : endOfSlice;

	const commentsToRender = currentComments.slice(currentCommentsCount, endOfSlice);
	const fragment = document.createDocumentFragment();

	// Добавление комментариев в список
	commentsToRender.forEach((comment) => {
		fragment.appendChild(renderComment(comment));
	});

	wrapperElement.appendChild(fragment);
	statusElement.textContent = `${endOfSlice} из ${currentComments.length} комментариев`;
	loaderButton.classList.toggle('hidden', isAllComments);
});

const renderComments = (comments) => {
	currentComments = comments;
	loaderButton.click();
};

// const renderComments = (comments) => {
// 	currentComments = comments;
// 	const commentsToShow = 5; // Количество комментариев, которые нужно показать

// 	// Очищаем контейнер со старыми комментариями
// 	wrapperElement.innerHTML = '';

// 	const commentsToRender = currentComments.slice(0, commentsToShow);
// 	const fragment = document.createDocumentFragment();

// 	// Добавление комментариев в список
// 	commentsToRender.forEach((comment) => {
// 		fragment.appendChild(renderComment(comment));
// 	});

// 	wrapperElement.appendChild(fragment);
// 	statusElement.textContent = `${commentsToShow} из ${currentComments.length} комментариев`;
// 	loaderButton.classList.toggle('hidden', commentsToShow >= currentComments.length);
// };


// const renderComments = (comments) => {
// 	currentComments = comments;

// 	// Очищаем контейнер со старыми комментариями
// 	wrapperElement.innerHTML = '';

// 	const commentsToRender = currentComments.slice(0, shownCommentsCount);
// 	const fragment = document.createDocumentFragment();

// 	// Добавление комментариев в список
// 	commentsToRender.forEach((comment) => {
// 		fragment.appendChild(renderComment(comment));
// 	});

// 	wrapperElement.appendChild(fragment);

// 	// Обновляем счетчик комментариев

// 	const commentCountText = `${shownCommentsCount} из ${currentComments.length}`;
// 	commentsCountElement.textContent = commentCountText;

// 	// Показываем или скрываем кнопку "Загрузить еще"
// 	loaderButton.classList.toggle('hidden', shownCommentsCount >= currentComments.length);
// };

// loaderButton.addEventListener('click', () => {
// 	const commentsToShow = 5;
// 	shownCommentsCount += commentsToShow;

// 	const commentsToRender = currentComments.slice(0, shownCommentsCount);
// 	const fragment = document.createDocumentFragment();

// 	// Добавление комментариев в список
// 	commentsToRender.forEach((comment) => {
// 		fragment.appendChild(renderComment(comment));
// 	});

// 	wrapperElement.appendChild(fragment);

// 	// Обновляем счетчик комментариев
// 	const commentCountText = `${shownCommentsCount} из ${currentComments.length}`;
// 	commentsCountElement.textContent = commentCountText;

// 	// Показываем или скрываем кнопку "Загрузить еще"
// 	loaderButton.classList.toggle('hidden', shownCommentsCount >= currentComments.length);
// });

const clearComments = () => {
	wrapperElement.innerHTML = '';
	currentComments = [];
};

export { renderComments, clearComments };
