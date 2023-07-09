const template = document.querySelector('#comment')?.content.querySelector('.social__comment');
const commentsCount = document.querySelector('.comments-count');
const socialComments = document.querySelector('.social__comments');


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
const renderComments = (comments) => {

	commentsCount.textContent = comments.length;

	const fragment = document.createDocumentFragment();

	// Добавление комментариев в список
	comments.forEach((comment) => {
		fragment.appendChild(renderComment(comment));
	});
	socialComments.appendChild(fragment);

};

const clearComments = () => {};

export { renderComments, clearComments };
