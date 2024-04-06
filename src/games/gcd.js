import readlineSync from 'readline-sync';
import {
  gamerName, roundsCount, getRandomNumber, askQuestion,
} from '../index.js';

const question = ('Find the greatest common divisor of given numbers.');

askQuestion(question);

const gameGcd = () => {
  console.log('Demo');
};

export { gameGcd };
