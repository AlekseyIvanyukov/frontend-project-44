import { startGame, getRandomNumber } from '../index.js';

const ruleGcd = ('Find the greatest common divisor of given numbers.');

const gcdGame = () => {
  const getRandomNumberOne = getRandomNumber(1, 31);
  const getRandomNumberTwo = getRandomNumber(1, 31);
  const getQuestion = `${getRandomNumberOne} ${getRandomNumberTwo}`;

  const gcd = (numberOne, numberTwo) => {
    while (numberTwo) {
      const temp = numberTwo;
      numberTwo = numberOne % numberTwo;
      numberOne = temp;
    }
    return numberOne;
  };

  const correctAnswer = String(gcd(getRandomNumberOne, getRandomNumberTwo));
  return [getQuestion, correctAnswer];
};

const startGcd = () => startGame(ruleGcd, gcdGame);

export { startGcd };
