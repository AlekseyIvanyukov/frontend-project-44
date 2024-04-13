import { startGame } from '../index.js';
import { getRandomNumber } from '../randomgenerator.js';

const ruleProgression = ('What number is missing in the progression?');
const lengthOfProgression = 10;
const hiddenElement = getRandomNumber(0, 10);

const getProgression = (n) => Array.from({
  length:
  Math.ceil(lengthOfProgression),
}, (_, i) => (i + 1) * n);

const playProgGame = () => {
  const randomProgression = getProgression(hiddenElement);

  const beforeHidden = randomProgression.map((item) => (item === randomProgression[hiddenElement] ? '..' : item));

  const getQuestion = beforeHidden.join(' ');
  const correctAnswer = String(randomProgression[hiddenElement]);

  return [getQuestion, correctAnswer];
};
const gameProgression = () => startGame(ruleProgression, playProgGame);

export { gameProgression, ruleProgression };
