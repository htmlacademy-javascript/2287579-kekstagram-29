import './thumbnail.js';

const template = document.querySelector('#comment')?.content.querySelector('.social__comment');
const commentsCount = document.querySelector('.comments-count');
const socialComments = document.querySelector('.social__comments');

// работа по показу 5 комментариев
const commentsLoader = document.querySelector('.comments-loader');
let commentsToShow = 5;
let currentPicture = null; // ?
//

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


// Ctrl Alt F
const renderComments = (comments, picture) => {
	commentsCount.textContent = comments.length;

	// работа по показу 5 комментариев
	const commentsToRender = comments.slice(0, commentsToShow);
	//
	const fragment = document.createDocumentFragment();

	// Добавление комментариев в список
	// работа по показу 5 комментариев. меняю comments. на commentsToRender
	commentsToRender.forEach((comment) => {
		fragment.appendChild(renderComment(comment));
	});

	//работа по показу 5 комментариев
	// Очистка списка комментариев
	socialComments.innerHTML = '';
	//
	socialComments.appendChild(fragment);

	// Проверка, чтобы выводить только commentsToShow комментариев
	// commentsCount.textContent = commentsToRender.length;
	if (commentsToShow < comments.length) {
		commentsLoader.classList.remove('hidden');
	} else {
		commentsLoader.classList.add('hidden');
	}

	currentPicture = picture; //?

};

// работа по показу 5 комментариев
// Увеличение значения commentsToShow на 5
const loadMoreComments = () => {
	// Увеличение значения commentsToShow на 5
	commentsToShow += 5;

	renderComments(currentPicture.comments, currentPicture);

	// Проверка, если commentsToShow больше или равно общему количеству комментариев, скрыть кнопку загрузки комментариев
	if (commentsToShow >= currentPicture.comments.length) {
		commentsLoader.classList.add('hidden');
	}
};

// Добавление обработчика события клика на кнопку загрузки комментариев
commentsLoader.addEventListener('click', loadMoreComments);
//

const clearComments = () => {
	socialComments.innerHTML = '';
	commentsToShow = 5;
	commentsLoader.classList.add('hidden');
	currentPicture = null;
};

export { renderComments, clearComments };
