// import readlineSync from 'readline-sync';
import {
  getRandomNumber, startGame,
} from '../index.js';

const ruleProgression = ('What number is missing in the progression?');

const progGame = () => {
  const lengthOfProgression = 10;
  const randomNumberOne = getRandomNumber(5, 30);
  const randomNumberTwo = getRandomNumber(0, 10);

  const getProgression = (n) => Array.from({
    length:
  Math.ceil(lengthOfProgression),
  }, (_, i) => (i + 1) * n);

  console.log(`randomNumberone: ${randomNumberOne} \nrandomNumberTwo: ${randomNumberTwo}`);
  const randomProgression = getProgression(randomNumberTwo);

  const getQuestion = `${randomProgression.join(' ')}`;
  const correctAnswer = String(randomProgression[randomNumberTwo]);
  console.log(`CorrectAnswer: ${randomProgression[randomNumberTwo]}`);

  return [getQuestion, correctAnswer];
};
const gameProgression = () => startGame(ruleProgression, progGame);

export { gameProgression, ruleProgression };
