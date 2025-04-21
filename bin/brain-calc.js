#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

// logic

const calculator = (firstNum, operand, secondNum) => {
	switch (operand) {
		case '+':
			return firstNum + secondNum;
		case '-':
			return firstNum - secondNum;
		case '*':
			return firstNum * secondNum;
	}
};

const getRandomOperand = (operands) => {
	const randomOperand = Math.floor(Math.random() * operands.length);
	return operands[randomOperand];
};

const getRandomNumber = (minRandomNum, maxRandomNum) =>
	Math.floor(Math.random() * (maxRandomNum - minRandomNum + 1)) + minRandomNum;

const showWrongAnswer = (userAnswer, correctAnswer) => {
	console.log(
		`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
	);
};

const showCorrectAnswer = () => {
	console.log('Correct!');
};

const showCongratulations = (userName) => {
	console.log(`Congratulations, ${userName}`);
};

const rounds = 3;

// game
const calcGame = () => {
	console.log('What is the result of the expression?');
	for (let i = 0; i < rounds; i++) {
		const firstNum = getRandomNumber(1, 100);
		const secondNum = getRandomNumber(1, 100);

		const operands = ['+', '-', '*'];
		const operand = getRandomOperand(operands);

		const correctAnswer = calculator(firstNum, operand, secondNum);
		console.log(`Question: ${firstNum} ${operand} ${secondNum}`);
		const userAnswer = Number(readlineSync.question('Your answer: '));

		if (userAnswer !== correctAnswer) {
			return showWrongAnswer(userAnswer, correctAnswer);
		}
		showCorrectAnswer();
	}
	return showCongratulations(userName);
};
calcGame();
