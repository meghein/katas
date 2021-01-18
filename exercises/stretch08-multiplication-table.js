// Create a function named multiplicationTable that receives a number maxValue as input and creates a square multiplication table where maxValue is the largest value in the table.

const multiplicationTable = function(maxValue) {
  let table = "";
  for (let y = 1; y <= maxValue; y++) {
    let builder = "";
    for (let x = 1; x <= maxValue; x++) {
      builder = (builder + (y * x) + " ");
    }
    table = (table + builder + "\n");
  }
  return table
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));