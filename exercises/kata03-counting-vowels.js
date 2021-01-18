// Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

const numberOfVowels = function(data) {
  // Put your solution here
  let vowels = "";
  for (let i = 0; i <= data.length; i++) {
    if (data[i] === "a" || data[i] === "e" || data[i] === "i" || data[i] === "o" || data[i] === "u") {
      vowels += data[i];
    }
  }
  return vowels.length;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));