import startGame from '../index.js';
import getRandomNumber from '../randomgenerator.js';

const ruleGcd = ('Find the greatest common divisor of given numbers.');

const playGcdGame = () => {
  const getRandomNumberOne = getRandomNumber(1, 31);
  const getRandomNumberTwo = getRandomNumber(1, 31);
  const getQuestion = `${getRandomNumberOne} ${getRandomNumberTwo}`;

  const getGcd = (numOne, numTwo) => {
    if (!numTwo) {
      return numOne;
    }
    return getGcd(numTwo, numOne % numTwo);
  };

  const correctAnswer = String(getGcd(getRandomNumberOne, getRandomNumberTwo));
  return [getQuestion, correctAnswer];
};

const startGcd = () => startGame(ruleGcd, playGcdGame);

export default startGcd;
