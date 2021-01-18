// Create a function generateBoard which will return a nested array representing the board, containing the location of two queens.
const generateBoard = (whitePosition, blackPosition) => {
	const board =  [];
	for (let i = 0; i < 8; i++) {
		board [i] = [0, 0, 0, 0, 0, 0, 0, 0]
		if (i === whitePosition[0]) {
			board[i][whitePosition[1]] = 1
		}
		if (i === blackPosition[0]) {
			board[i][blackPosition[1]] = 1
		}
	}
	return board;
}

// Create a function called queenThreat that will indicate whether or not the two queens are positioned so that they attack each other.

// easier with the positions than the whole board...
const queenThreat = board => {
	const queens = [];

	// get array of queens positions (deconstruct board), i.e. [[0,5], [5,0]]:
	for (const row in board) {
		for (const position in board[row]) {
			if (board[row][position] === 1) {
				queens.push([row, position])
			}
		}	
	}
	
	if (
		// horizontal check:
		queens[0][0] === queens[1][0]
		// vertical check:
		|| queens[0][1] === queens[1][1]
		// diagonal checks:
		|| queens[0][0] === queens[1][1]
		|| queens[0][1] === queens[1][0]
	) {
		return true;
	} else {
		return false;
	}
}

let generatedBoard1 = generateBoard([0,5], [5,0]);
console.log(generatedBoard1);
console.log(queenThreat(generatedBoard1));

/* EXPECTED OUTCOME:
[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
true
*/

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

/* EXPECTED OUTCOME:
[
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
false
*/