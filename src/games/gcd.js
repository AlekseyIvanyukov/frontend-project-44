import { startGame, getRandomNumber } from '../index.js';

const ruleGcd = ('Find the greatest common divisor of given numbers.');

const gcdGame = () => {
  const getRandomNumberOne = getRandomNumber(1, 31);
  const getRandomNumberTwo = getRandomNumber(1, 31);
  const getQuestion = `${getRandomNumberOne} ${getRandomNumberTwo}`;

  const gcd = (numOne, numTwo) => {
    if (!numTwo) {
      return numOne;
    }
    return gcd(numTwo, numOne % numTwo);
  };

  const correctAnswer = String(gcd(getRandomNumberOne, getRandomNumberTwo));
  return [getQuestion, correctAnswer];
};

export const startGcd = () => startGame(ruleGcd, gcdGame);

export default startGcd;
