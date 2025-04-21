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

const isPrime = (number) => {
	if (number < 2) return false;

	for (let i = 2; i <= number / 2; i++) {
		if (number % i === 0) {
			return false;
		}
	}
	return true;
};

// game
const primeGame = () => {
	console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
	for (let i = 0; i < rounds; i++) {
		const number = getRandomNumber(1, 100);

		console.log(`Question: ${number}`);
		const correctAnswer = isPrime(number) ? 'yes' : 'no';
		const userAnswer = readlineSync.question('Your answer: ');

		if (userAnswer !== correctAnswer) {
			return showWrongAnswer(userAnswer, correctAnswer);
		}
		showCorrectAnswer();
	}
	return showCongratulations(userName);
};
primeGame();
