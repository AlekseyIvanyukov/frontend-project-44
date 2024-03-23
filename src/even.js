import readlineSync from "readline-sync";

console.log("Welcome to the brain games");
const getName = () => {
	const gamerName = readlineSync.question("May I have your name? ");
	console.log("Hello, " + gamerName + "!");
	return gamerName;
};

const gamerName = getName();
const isEven = () => {
	const randomNumber = Math.floor(Math.random() * 100);
	const evenNumber = randomNumber % 2 === 0;
	console.log(`Question: ${randomNumber}`);
	const getAnswer = readlineSync.question("Your answer: ");
	for (let i = 0; i < 3; i += 1) {
		(evenNumber === true && getAnswer === "yes") ||
			(evenNumber === false && getAnswer === "no");
	}
	return console.log("Correct");
	/*
	} else {
		return console.log(
			`${getAnswer} is wrong answer ;(. Correct answer was ${getAnswer}. \nLet's try again, ${gamerName}!`
		);
	}
*/
};

export { getName, isEven };
