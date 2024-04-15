import startGame from '../index.js';
import getRandomNumber from '../randomgenerator.js';

const ruleProgression = ('What number is missing in the progression?');

const getProgression = (start, step, length, hiddenIndex) => {
  const progression = Array(length).fill(0).map((_, i) => start + (step * i));
  progression[hiddenIndex] = '..';
  return progression.join(' ');
};

const playProgGame = () => {
  const lengthOfProgression = getRandomNumber(5, 10);
  const startElement = getRandomNumber(1, 10);
  const stepElement = getRandomNumber(1, 10);
  const hiddenElement = getRandomNumber(0, lengthOfProgression - 1);

  const getQuestion = getProgression(startElement, stepElement, lengthOfProgression, hiddenElement);
  const correctAnswer = String(startElement + stepElement * hiddenElement);

  return [getQuestion, correctAnswer];
};
const gameProgression = () => startGame(ruleProgression, playProgGame);

export default gameProgression;
