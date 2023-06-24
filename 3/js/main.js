const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 20;
const COMMENT_LINES = [
	'Всё отлично!',
	'В целом всё неплохо. Но не всё.',
	'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
	'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
	'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
	'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const DESCRIPTIONS = [
	'Летний чил',
	'Не летний чил',
	'Зимняя забава',
	'Хорошая еда',
	'Норм',
	'Не норм',
	'Ух ты!',
	'Arriba!',
	'Урааа!',
	'А я его знаю?',
	'Кто это?',
];
const NAMES = [
	'Jose',
	'Antonio',
	'Makobic',
	'Anton',
	'Человек',
	'Дима',
];

const getRandomInteger = (a, b) => {
	const lower = Math.ceil(Math.min(a, b));
	const upper = Math.floor(Math.max(a, b));
	const result = Math.random() * (upper - lower + 1) + lower;
	return Math.floor(result);
};

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
