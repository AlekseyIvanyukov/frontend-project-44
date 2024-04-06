import readlineSync from 'readline-sync';
import {
  gamerName, roundsCount, getRandomNumber, askQuestion,
} from '../index.js';

const question = ('Find the greatest common divisor of given numbers.');
askQuestion(question);

const gameGcd = () => {
  for (let i = 0; i < roundsCount; i += 1) {
    const getRandomNumberOne = getRandomNumber(1, 31);
    const getRandomNumberTwo = getRandomNumber(1, 31);
    console.log(`Question: ${getRandomNumberOne} ${getRandomNumberTwo}`);

    const gcd = (numberOne, numberTwo) => {
      while (numberTwo) {
        const temp = numberTwo;
        numberTwo = numberOne % numberTwo;
        numberOne = temp;
      }
      return numberOne;
    };

    const correctAnswer = gcd(getRandomNumberOne, getRandomNumberTwo);
    const getAnswer = readlineSync.question('Your answer: ');
    if (Number(getAnswer) !== correctAnswer) {
      console.log(`${getAnswer} is wrong answer ;). Correct answer was ${correctAnswer}. \nLet's try again, ${gamerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${gamerName}!`);
};
export { gameGcd };
