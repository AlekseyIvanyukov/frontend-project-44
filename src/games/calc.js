import { startGame } from '../index.js';
import { getRandomNumber } from '../randomgenerator.js';

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
      throw new Error(`Unexpected operator ${operator}`);
  }
};

const playCalcGame = () => {
  const randomNumberOne = getRandomNumber(0, 10);
  const randomNumberTwo = getRandomNumber(0, 10);
  const operator = getOperator();
  const getQuestion = `${randomNumberOne} ${operator} ${randomNumberTwo}`;
  const correctAnswer = String(getExpression(randomNumberOne, randomNumberTwo, operator));
  return [getQuestion, correctAnswer];
};

export const startCalc = () => startGame(ruleCalc, playCalcGame);

export default startCalc;
