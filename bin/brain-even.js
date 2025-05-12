#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetingMessage from '../src/cli.js';

function isEven(number) {
  return number % 2 === 0;
}

function braingame() {
  const name = greetingMessage();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctpoint = 0;
  while (correctpoint < 3) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    if (userAnswer.length === correctAnswer.length) {
      console.log('Correct!');
      correctpoint += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

braingame();
