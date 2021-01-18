// Create a function named squareCode that will receive a message, and return the secret square code version of the message.

const transposed = matrix => {
	const newMatrix = []
	for (let i = 0; i < matrix[0].length; i++) {
		// create placeholders (number of elements in matrix row becomes number of columns in newMatrix)
		newMatrix.push([])

		for (let j = 0; j < matrix.length; j++) {
			newMatrix[i][j] = matrix[j][i]
		}
	}
	return newMatrix
}

const squareCode = function(message) {
	let output = ''
	const noSpaceStr = message.replaceAll(' ', '')
	const numOfCharPerRow = Math.ceil(Math.sqrt(noSpaceStr.length))
	const rows = []

	// First, create an array of arrays which divides up the string in to rows: 
	for (let i = 0; i < noSpaceStr.length; i += numOfCharPerRow) {
		// divide string in to segments:
		const row = noSpaceStr.substring(i, i + numOfCharPerRow)
		// create an array with this segment:
		const rowArr = row.split('')
		rows.push(rowArr)
	}

	// Second, flip rows 90 degrees (matrix: rows become columns):
	const flipped = transposed(rows)

	// Third, create a flatted string:
	flipped.forEach(arr => {
		const segment = arr.join('')
		output += (segment + ' ')
	})

	return output
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

/* EXPECTED OUTCOME:
clu hlt io  
fto ehg ee dd
hae and via ecy
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
*/