import readlineSync from 'readline-sync';

const greetings = console.log('Welcome to the brain games');
const gamerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${gamerName}!`);

const roundsCount = 3;
const getRandomNumber = () => Math.floor(Math.random() * 100);

export {
  greetings, gamerName, roundsCount, getRandomNumber,
};
