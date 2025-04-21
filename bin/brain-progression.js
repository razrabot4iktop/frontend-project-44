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
const generateProgression = () => {
	const length = getRandomNumber(5, 10);
	const start = getRandomNumber(1, 30);
	const step = getRandomNumber(1, 10);
	const hiddenStep = getRandomNumber(0, length - 1);

	const progression = [];
	for (let i = 0; i < length; i++) {
		progression.push(start + i * step);
	}

	const correctAnswer = progression[hiddenStep];
	progression[hiddenStep] = '..';

	return {
		question: progression.join(' '),
		correctAnswer,
	};
};

// game
const progressionGame = () => {
	console.log('What number is missing in the progression?');
	for (let i = 0; i < rounds; i++) {
		const { question, correctAnswer } = generateProgression();

		console.log(`Question: ${question}`);
		const userAnswer = readlineSync.question('Your answer: ');

		if (userAnswer !== correctAnswer.toString()) {
			return showWrongAnswer(userAnswer, correctAnswer);
		}
		showCorrectAnswer();
	}
	return showCongratulations(userName);
};
progressionGame();
