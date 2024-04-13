import {
  getRandomNumber, startGame,
} from '../index.js';

const rulePrime = ('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return number !== 1;
};

const primeGame = () => {
  const upLimitPrimeNumber = getRandomNumber(0, 20);
  const randomPrimeNumber = getRandomNumber(1, upLimitPrimeNumber);

  const getQuestion = `my Question ${randomPrimeNumber}`;
  const correctAnswer = isPrime(randomPrimeNumber) ? 'yes' : 'no';

  return [getQuestion, correctAnswer];
};

const gamePrime = () => startGame(rulePrime, primeGame);

export { gamePrime, rulePrime };