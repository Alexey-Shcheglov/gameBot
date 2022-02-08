'use strict';



const isNumber = function (num) {
	return !isNaN(parseFloat(num)) && isFinite(num);
};

const gameStart = function () {
	const randomNumber = Math.floor(Math.random() * 100);
	let tryCount = 10;

	function newGame() {

		const userNumber = prompt('Введите число от 1 до 100');
		if (userNumber === null) {
			alert('Игра окончена');
			return;
		}
		if (isNumber(userNumber)) {
			tryCount--;
			if (+userNumber === randomNumber) {
				alert('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
			}
			if (tryCount < 1) {
				if (confirm('Попыток больше нет. Хотите сыграть еще')) {
					tryCount = 10;
					newGame();
				} else {
					return;
				}
			}
			if (userNumber > randomNumber) {
				alert('Загаданное число меньше. Осталось ' + tryCount + ' попыток');
			}
			if (userNumber < randomNumber) {
				alert('Загаданное число больше. Осталось ' + tryCount + ' попыток');
			}
			newGame();

		} else {
			alert('Введи число!');
			newGame();
		}

	}
	return newGame();

};

gameStart();


