#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetingMessage from '../src/cli.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gcd = (a, b) => {
  while (b) {
    // eslint-disable-next-line no-param-reassign
    [a, b] = [b, a % b];
  }
  return a;
};

function brainGcd() {
  const name = greetingMessage();
  console.log('Find the greatest common divisor of given numbers.');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    const question = `${num1} ${num2}`;
    const correctAnswer = gcd(num1, num2).toString();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}
brainGcd();
