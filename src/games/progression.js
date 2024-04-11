// import readlineSync from 'readline-sync';
import {
  getRandomNumber, startGame,
} from '../index.js';

const ruleProgression = ('What number is missing in the progression?');

const progGame = () => {
  const lengthOfProgression = 10;
//  const randomNumberOne = getRandomNumber(5, 30);
  const questionElement = getRandomNumber(0, lengthOfProgression);

  const getProgression = (n) => Array.from({
    length:
  Math.ceil(lengthOfProgression),
  }, (_, i) => (i + 1) * n);

  console.log(`randomNumberTwo: ${questionElement}`);
  const randomProgression = getProgression(questionElement);

  const getQuestion = `${randomProgression.join(' ')}`;
  const correctAnswer = String(randomProgression[questionElement]);
  console.log(`CorrectAnswer: ${randomProgression[questionElement]}`);

  return [getQuestion, correctAnswer];
};
const gameProgression = () => startGame(ruleProgression, progGame);

export { gameProgression, ruleProgression };
