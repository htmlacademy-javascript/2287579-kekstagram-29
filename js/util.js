const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
	const alert = document.createElement('div');
	alert.style.position = 'absolute';
	alert.style.zIndex = '110';
	alert.style.left = '0';
	alert.style.top = '0';
	alert.style.right = '0';
	alert.style.padding = '10px 3px';
	alert.style.fontSize = '30px';
	alert.style.textAlign = 'center';
	alert.style.backgroundColor = 'red';
	alert.textContent = message;
	document.body.append(alert);

	setTimeout(() => {
		alert.remove();
	}, ALERT_SHOW_TIME);
};

const debounce = (callback, timeoutDelay = 500) => {
	let timeoutId;
	return (...rest) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
	};
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const isUniqueArr = (array) => {
	const duplicates = array.filter((number, index, numbers) => numbers.indexOf(number) !== index);
	return duplicates.length <= 0;
};

export { showAlert, isEscapeKey, isUniqueArr, debounce };
