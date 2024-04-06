import readlineSync from 'readline-sync';
import {
  gamerName, roundsCount, getRandomNumber, askQuestion,
} from '../index.js';

const getOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, 3);
  return operators[randomIndex];
};

const getExpression = (operandOne, operandTwo, operator) => {
  switch (operator) {
    case '+':
      return operandOne + operandTwo;
    case '-':
      return operandOne - operandTwo;
    case '*':
      return operandOne * operandTwo;
    default:
      return ('Unexpected operator');
  }
};

const question = ('What is the result of the expression?');
askQuestion(question);

const gameCalc = () => {
  for (let i = 0; i < roundsCount; i += 1) {
    const randomNumberOne = getRandomNumber(0, 10);
    const randomNumberTwo = getRandomNumber(0, 10);
    const operator = getOperator();
    console.log(`Question: ${randomNumberOne} ${operator} ${randomNumberTwo}`);
    const expression = getExpression(randomNumberOne, randomNumberTwo, operator);
    const correctAnswer = expression;
    const getAnswer = readlineSync.question('Your answer: ');
    if (Number(getAnswer) !== correctAnswer) {
      console.log(`${getAnswer} is wrong answer ;). Correct answer was ${correctAnswer}. \nLet's try again, ${gamerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${gamerName}!`);
};

export { gameCalc };
