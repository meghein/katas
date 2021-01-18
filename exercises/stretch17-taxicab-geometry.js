// Create a function named blocksAway that will receive an array of directions, and return an object that calculates how far north and east those directions will take someone.


// this assumes you start in the most southwest position so you'll always start either going east or north and the position of the cab resets after each move to be facing either east or north:

const blocksAway = function(directions) {
	const outcome = {east: 0, north: 0};
	const moves = []

	// create array with each move as a key:value pair
	for (let i = 0; i < directions.length; i += 2) {
		moves.push([directions[i], directions[i+1]])
	}

	for (const move of moves) {
		const index = moves.indexOf(move);
		const key = move[0]
		const value = move[1]
		
		if (index === 0) {
			// first move either east or north:
			key === 'right' ? outcome.east += value : outcome.north += value

		} else if (index % 2 !== 0 && moves[0][0] === 'right') {
			// 2nd, 4th, 6th etc move either north/south with first move right/east
			key === 'right' ? outcome.north -= value : outcome.north += value

		} else if (index % 2 !== 0 && moves[0][0] === 'left') {
			// 2nd, 4th, 6th etc move either east/west with first move left/north
			key === 'right' ? outcome.east += value : outcome.east -= value

		}  else if (index % 2 === 0 && moves[0][0] === 'right') {
			// 3rd, 5th, 7th etc move either north/south with first move right/east
			key === 'right' ? outcome.east += value : outcome.east -= value

		} else if (index % 2 === 0 && moves[0][0] === 'left') {
			// 3rd, 5th, 7th etc move either east/west with first move left/north
			key === 'right' ? outcome.north -= value : outcome.north += value
		}
	}
	return outcome;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

/* EXPECTED OUTCOME:
{east: 1, north: 3}
{east: 3, north: 3}
{east: 2, north: 0}
*/