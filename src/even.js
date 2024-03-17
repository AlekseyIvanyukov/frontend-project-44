import readlineSync from "readline-sync";

const isEven = () => {
	console.log(
		'Answer "yes" if the number is even, otherwise answer "no". '
	);
	const randomNumber = Math.floor(Math.random() * 100);
	const evenNumber = randomNumber % 2;
	console.log(`Question: ${randomNumber}`);
	const getAnswer = readlineSync.question("Your answer: ");

	evenNumber === 0 ? "yes" : "no";

	/*
	switch (getAnswer = 'no') {
		case "yes":
			console.log("yes");
		case "no":
			return -1;
		default:
			return -1;
	}
	return getAnswer === evenNumber;
*/
};

export default isEven;
