import { startGame } from '../index.js';
import { getRandomNumber } from '../randomgenerator.js';

const isEven = (number) => number % 2 === 0;
const ruleEven = ('Answer "yes" if the number is even, otherwise answer "no".');

const playEvenGame = () => {
  const getQuestion = getRandomNumber(0, 100);
  const correctAnswer = isEven(getQuestion) ? 'yes' : 'no';
  return [getQuestion, correctAnswer];
};

export const startEven = () => startGame(ruleEven, playEvenGame);

export default startEven;
