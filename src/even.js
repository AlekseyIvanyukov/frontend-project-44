import readlineSync from 'readline-sync';

const greetings = () => {
  console.log('Welcome to the brain games');
};

greetings();

const gamerName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${gamerName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no". ');

const isEvenGame = () => {
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const getRandomNumber = Math.floor(Math.random() * 100);

    const isEven = () => getRandomNumber % 2 === 0;

    console.log(`Question: ${getRandomNumber}`);
    const getAnswer = readlineSync.question('Your answer: ');

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

isEvenGame();

export { gamerName, /*isEven*/ };
