import './thumbnail.js';

const PACK_COUNT = 5;

const template = document.querySelector('#comment')?.content.querySelector('.social__comment');
const list = document.querySelector('.social__comments');
const status = document.querySelector('.social__comment-count');
const loader = document.querySelector('.comments-loader');
const allCount = status?.querySelector('.comments-count');
const renderedCount = status?.querySelector('.comments-rendered');

/** @type {Object[]} массив комментриев октрытой модалки */
let currentComments = [];

/**
 * Создание разметки одного комментария
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

loader.addEventListener('click', () => {
	const currentCount = list.childElementCount;

	let endOfSlice = currentCount + PACK_COUNT;
	const isAllWillBeShown = endOfSlice >= currentComments.length;
	endOfSlice = isAllWillBeShown ? currentComments.length : endOfSlice;

	const nextPackComments = currentComments.slice(currentCount, endOfSlice);
	const fragment = document.createDocumentFragment();

	renderedCount.textContent = endOfSlice.toString();

	loader.hidden = isAllWillBeShown;

	// Добавление комментариев в список
	nextPackComments.forEach((comment) => {
		fragment.appendChild(renderComment(comment));
	});
	list.appendChild(fragment);
	loader.classList.toggle('hidden', isAllWillBeShown);
});

const renderComments = (comments) => {
	currentComments = comments;
	allCount.textContent = comments.length.toString();
	loader.click();
};

const clearComments = () => {
	list.innerHTML = '';
	currentComments = [];
};


export { renderComments, clearComments };
