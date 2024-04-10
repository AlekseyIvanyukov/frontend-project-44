import { startGame, getRandomNumber } from '../index.js';

const ruleCalc = ('What is the result of the expression?');

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

const calcGame = () => {
  const randomNumberOne = getRandomNumber(0, 10);
  const randomNumberTwo = getRandomNumber(0, 10);
  const operator = getOperator();
  const getQuestion = `${randomNumberOne} ${operator} ${randomNumberTwo}`;
  const correctAnswer = String(getExpression(randomNumberOne, randomNumberTwo, operator));  // string
  return [getQuestion, correctAnswer];
};

const startCalc = () => startGame(ruleCalc, calcGame);

export { startCalc };
