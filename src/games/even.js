import { startGame, getRandomNumber } from '../index.js';

const isEven = (number) => number % 2 === 0;
const ruleEven = ('Answer \"yes\" if the number is even, otherwise answer \"no\".');

const isEvenGame = () => {
  const getQuestion = getRandomNumber(0, 100);
  const correctAnswer = isEven(getQuestion) ? 'yes' : 'no';
  return [getQuestion, correctAnswer];
};

const startEven = () => startGame(ruleEven, isEvenGame);

export { startEven };
