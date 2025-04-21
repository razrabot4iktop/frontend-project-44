#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

// all logic
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

// logic
const getGCD = (firstNum, secondNum) => {
	const min = Math.min(firstNum, secondNum);

	for (let i = min; i >= 1; i--) {
		if (firstNum % i === 0 && secondNum % i === 0) return i;
	}
};

// game

const gcdGame = () => {
	console.log('Find the greatest common divisor of given numbers.');
	for (let i = 0; i < rounds; i++) {
		const firstNum = getRandomNumber(1, 100);
		const secondNum = getRandomNumber(1, 100);

		console.log(`Question: ${firstNum} ${secondNum}`);
		const correctAnswer = getGCD(firstNum, secondNum).toString();
		const userAnswer = readlineSync.question('Your answer: ');

		if (userAnswer !== correctAnswer) {
			return showWrongAnswer(userAnswer, correctAnswer);
		}
		showCorrectAnswer();
	}
	return showCongratulations(userName);
};
gcdGame();
