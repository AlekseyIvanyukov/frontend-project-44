import readlineSync from 'readline-sync';

export { gamerName, isEven };

console.log('Welcome to the brain games');
const gamerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${gamerName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no". ');

const randomNumber = Math.floor(Math.random() * 100);
console.log(`Question: ${randomNumber}`);

const isEven = () => {
  const evenNumber = randomNumber % 2 === 0;
  return evenNumber;
};

let correctAnswer;
(isEven() === true) ? correctAnswer = 'yes' : correctAnswer = 'no';

const getAnswer = readlineSync.question('Your answer: ');

if (getAnswer === correctAnswer) {
  console.log('Correct!');
} else {
  console.log(`${getAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. \nLet's try again, ${gamerName}!`);
}
