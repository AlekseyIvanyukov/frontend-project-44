import readlineSync from 'readline-sync';

const roundsCount = 3;

const startGame = (printRule, getQuestion) => {
  console.log('Welcome to the Brain Games!');

  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);

  console.log(printRule);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = getQuestion();
    console.log(`Question: ${question}`);
    const getAnswer = readlineSync.question('Your answer: ');

    if (getAnswer !== correctAnswer) {
      console.log(`${getAnswer} is wrong answer ;). Correct answer was ${correctAnswer}. \nLet's try again, ${gamerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${gamerName}!`);
};

export default startGame;
