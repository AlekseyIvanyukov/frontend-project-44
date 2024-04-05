import readlineSync from 'readline-sync';
import {
  gamerName, roundsCount, getRandomNumber
} from '../src/index.js';

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

console.log('What is the result of the expression?');

const gameCalc = () => {
  for (let i = 0; i < roundsCount; i += 1) {
    const randomNumberOne = getRandomNumber(0, 50);
    const randomNumberTwo = getRandomNumber(0, 50);
    const operator = getOperator();
//    const getQuestion = randomNumberOne - randomNumberTwo;
    console.log(`Question: ${randomNumberOne} ${operator} ${randomNumberTwo}`);
    const getAnswer = readlineSync.question('Your answer: ');
  }
};

export { gameCalc };
