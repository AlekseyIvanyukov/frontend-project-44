import readlineSync from 'readline-sync';

const getName = () => {
  console.log('brain games ==> Welcome to the Brain Games!');
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);
  return gamerName;
};

export default getName;
