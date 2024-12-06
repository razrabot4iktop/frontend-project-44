#!/usr/bin/env node
import readlineSync from 'readline-sync';

// Greetings
import greetings from '../src/cli.js';

const userName = greetings();

// ranbomNum
const maxRandomNum = 1;
const minRandomNum = 50;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

// question isEven
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const numberOfQuestions = 3;

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const isEvenGame = () => {
  for (let i = 0; i < numberOfQuestions;) {
    const randomNum = getRandomNumber(minRandomNum, maxRandomNum);

    console.log(`Question: ${randomNum}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === isEven(randomNum)) {
      console.log('Correct!');
      i += 1;
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven(randomNum)}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
isEvenGame();
