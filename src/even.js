import readlineSync from 'readline-sync';

console.log('Welcome to the brain games');
const gamerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${gamerName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no". ');

let i = 0;
do {
const getRandomNumber = Math.floor(Math.random() * 100);

const isEven = () => {
  const evenNumber = getRandomNumber % 2 === 0;
  return evenNumber;
};

const getAnswer = () => {
  console.log(`Question: ${getRandomNumber}`);
  readlineSync.question('Your answer: ');
};

const correctAnswer = () => {
  let answer = '';
  const isCorrect = isEven() ? answer = 'yes' : answer = 'no';
  return isCorrect;
};

isEven();
getAnswer();

i += 1;
} while (i < 3);


/*  return (getAnswer === correctAnswer) ? console.log('Correct!') : console.log(`'${getAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${gamerName}!`);
*/

/*
isEven() === true ? console.log('Correct!') : console.log(`'${getAnswer()}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${gamerName}!`);
console.log('Correct!');
*/

/*

isEven();
getAnswer();
console.log(correctAnswer());

*/


/*
for (let i = 0; i < 3; i += 1) {
  isEven() === true ? console.log('Correct!') : console.log(`'${getAnswer()}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${gamerName}!`);
}
console.log(`Congratulations, ${gamerName}!`);
*/

export { gamerName, /*isEven*/ };
