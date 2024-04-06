import readlineSync from 'readline-sync';
import {
  gamerName, roundsCount, getRandomNumber, askQuestion,
} from '../src/index.js';

const question = ('Answer \"yes\" if the number is even, otherwise answer \"no\".');
askQuestion(question);

const isEvenGame = () => {
  for (let i = 0; i < roundsCount; i += 1) {
    const getQuestion = getRandomNumber(0, 100);
    console.log(`Question: ${getQuestion}`);
    const getAnswer = readlineSync.question('Your answer: ');
    const isEven = () => getQuestion % 2 === 0;
    const correctAnswer = () => {
      let answer = '';
      const isCorrect = isEven() ? answer = 'yes' : answer = 'no';
      return isCorrect;
    };

    if (getAnswer !== correctAnswer()) {
      console.log(`${getAnswer} is wrong answer ;). Correct answer was ${correctAnswer()}. \nLet's try again, ${gamerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${gamerName}!`);
};

export { isEvenGame };
