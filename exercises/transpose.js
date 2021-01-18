const transposed = matrix => {
	const newMatrix = []
	for (let row = 0; row < matrix[0].length; row++) {
		// create placeholders (number of elements in matrix row becomes number of columns in newMatrix)
		newMatrix.push([]) //=> creates [ [], [], [], [] ]

		// for each row, iterate over each element in the row
		for (let column = 0; column < matrix.length; column++) {

			// flip the position
			// i.e. newMatrix[0][1] = matrix[1][0], newMatrix[0][2] = matrix[2][0]...
			newMatrix[row][column] = matrix[column][row]
		}
	}
	return newMatrix
}

firstOne = [
	['a', 'b', 'c', 'd'],
  ['a', 'b', 'c', 'd'],
  ['a', 'b', 'c', 'd'],
  ['a', 'b', 'c', 'd']
]

console.log(transposed(firstOne));