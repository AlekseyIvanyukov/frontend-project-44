import readlineSync from "readline-sync";

console.log("Welcome to the brain Games!");
const name = readlineSync.question("May I have your name? ");
console.log("Hello, " + name + "!");

export { name };