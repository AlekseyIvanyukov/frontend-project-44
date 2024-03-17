import readlineSync from "readline-sync";

const isEven = () => {
	console.log(
		'Answer "yes" if the number is even, otherwise answer "no". '
	);
	let randomNumber = Math.floor(Math.random() * 100);
	const evenNumber = randomNumber % 2 === 0;
	console.log(`Question: ${randomNumber}`);
	const getAnswer = readlineSync.question("Your answer: ");
	//return
};

export default isEven;
