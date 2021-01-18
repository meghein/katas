// Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end, the number of tries needed should be printed.

// Inputting the same number multiple times should only count as one try. If the user provides an answer which isn't a number, print an error message and do not count this as a try.

const prompt = require("prompt-sync")();

let magicNumber = 0;
let incorrect = true;
const guesses = [];

console.log('\n|***** ~GUESSING GAME!~ *****|')

const max = prompt('Pick a max number to guess from: ')
magicNumber = Math.ceil(Math.random() * Math.floor(max))
console.log(`Thinking of a number between 0 and ${max}... can you guess it?`)

while (incorrect) {
	let answer = prompt("Guess a number: ");
	if (isNaN(answer)) {
		console.log('Not a number! Try again!')
	} else if (guesses.includes(answer)) {
		console.log('Already Guessed!')
	} else if (answer < magicNumber) {
		guesses.push(answer)
		console.log('Too Low!')
	} else if (answer > magicNumber) {
		guesses.push(answer)
		console.log('Too High!');
	} else {
		guesses.push(answer)
		console.log(`\nYou got it! The number is ${magicNumber}. You took ${guesses.length} attempts!`);
		incorrect = false
	}
}

console.log('\n|***** ~THANKS FOR PLAYING!~ *****|\n\n')