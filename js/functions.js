// функция проверки длины строки

function whatLength(string, length) {
  if (string.length <= length) {
    return true;
  }
  return false;
}

whatLength('Я путаюсь в JS', 16);

// функция проверки на палиндром

const isPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toLowerCase().trim();

  let reversedString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString[i];
  }

  if (normalizedString === reversedString) {
    return true;
  }

  return false;
};

isPalindrome(' Лёша на полке клопа нашёл   ');

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа

function findDigits (unknownString) {
  let foundNumbers = '';

  for (let i = 0; i < unknownString.length; i++) {
    const inProgress = unknownString[i];
    if (!Number.isNaN(parseInt(inProgress, 10))) {
      foundNumbers += inProgress;
    }
  }

  if (foundNumbers === '') {
    return NaN;
  }

  return parseInt(foundNumbers, 10);
}

findDigits('336 страниц и 1 человек');


