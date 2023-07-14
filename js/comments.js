import './thumbnail.js';

const template = document.querySelector('#comment')?.content.querySelector('.social__comment');
const wrapperElement = document.querySelector('.social__comments');
const statusElement = document.querySelector('.social__comment-count');

// работа по показу 5 комментариев
const loaderButton = document.querySelector('.comments-loader');

/** @type {Object[]} массив комментриев октрытой модалки */
let currentComments = [];
//

/**
 * Создания разметко одного комментария
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

	// работа по показу 5 комментариев
	const commentsToRender = currentComments.slice(currentCommentsCount, endOfSlice);
	//
	const fragment = document.createDocumentFragment();

	// Добавление комментариев в список
	// работа по показу 5 комментариев. меняю comments. на commentsToRender
	commentsToRender.forEach((comment) => {
		fragment.appendChild(renderComment(comment));
	});

	//
	wrapperElement.appendChild(fragment);

	statusElement.textContent = `${endOfSlice} из ${currentComments.length} комментариев`;

	loaderButton.classList.toggle('hidden', isAllComments);
});


const renderComments = (comments) => {
	currentComments = comments;
	loaderButton.click();
};

const clearComments = () => {
	wrapperElement.innerHTML = '';
	currentComments = [];
};

export { renderComments, clearComments };
