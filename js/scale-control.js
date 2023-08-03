const ScaleInfo = {
	MIN: 25,
	MAX: 100,
	STEP: 25,
};

const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

let currentScale = 100;

const changeScale = () => {
	scaleInput.value = `${currentScale}%`;
	imagePreview.style.transform = `scale(${currentScale / 100})`;
};

const scaleUp = () => {
	if (currentScale >= ScaleInfo.MIN && currentScale < ScaleInfo.MAX) {
		currentScale += ScaleInfo.STEP;
		changeScale();
	}
};

const scaleDown = () => {
	if (currentScale > ScaleInfo.MIN && currentScale <= ScaleInfo.MAX) {
		currentScale -= ScaleInfo.STEP;
		changeScale();
	}
};

const resetScale = () => {
	imagePreview.style.transform = 'scale(1)';
};

biggerButton.addEventListener('click', () => {
	scaleUp();
});

smallerButton.addEventListener('click', () => {
	scaleDown();
});

export { resetScale };
