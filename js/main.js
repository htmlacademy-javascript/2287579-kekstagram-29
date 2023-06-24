// Импорты 

import {
	PICTURE_COUNT,
	AVATAR_COUNT,
	LIKE_MIN_COUNT,
	LIKE_MAX_COUNT,
	COMMENT_COUNT,
	COMMENT_LINES,
	DESCRIPTIONS,
	NAMES,
} from './data.js';

import { getRandomInteger } from './random_integer.js';

// Основной код

const getRandomArrayElement = (items) =>
	items[getRandomInteger(0, items.length - 1)];

const createIdGenerator = () => {
	let lastGeneratedId = 0;

	return () => {
		lastGeneratedId += 1;
		return lastGeneratedId;
	};
};

const generateCommentId = createIdGenerator();

const createMessage = () => Array.from(
	{ length: getRandomInteger(1, 2) },
	() => getRandomArrayElement(COMMENT_LINES),
).join(' ');

const createComment = () => ({
	id: generateCommentId(),
	avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
	message: createMessage(),
	name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
	id: index,
	url: `photos/${index}.jpg`,
	description: getRandomArrayElement(DESCRIPTIONS),
	likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
	comments: Array.from(
		{ length: getRandomInteger(0, COMMENT_COUNT) },
		createComment,
	),
});

const getPictures = () => Array.from(
	{ length: PICTURE_COUNT },
	(_, pictureIndex) => createPicture(pictureIndex + 1),
);

getPictures();

