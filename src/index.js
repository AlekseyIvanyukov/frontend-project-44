import readlineSync from 'readline-sync';

const greetings = console.log('Welcome to the brain games');
const gamerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${gamerName}!`);

const roundsCount = 3;
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

export {
  greetings, gamerName, roundsCount, getRandomNumber,
};
