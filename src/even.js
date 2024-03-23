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

const getAnswer = readlineSync.question('Your answer: ', {
  trueValue: ['yes'],
  falseValue: ['no'],
});

if (isEven() === getAnswer) {
  console.log('Correct!');
} else {
  console.log(`${getAnswer} is wrong answer ;(. Correct answer was ${getAnswer}. \nLet's try again, ${gamerName}!`)
}






/*
  for (let i = 0; i < 3; i += 1) {
    (evenNumber === true && getAnswer === 'yes')
|| (evenNumber === false && getAnswer === 'no');
  }
  return console.log('Correct');
	} else {
	return console.log(
	`${getAnswer} is wrong answer ;(. Correct answer was ${getAnswer}. \nLet's try again, ${gamerName}!`
	);
	}
*/
