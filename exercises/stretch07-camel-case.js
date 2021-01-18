// Create a function named camelCase that will convert a string to camel case, and return the result.

const camelCase = function(input) {
  let result = "";
  for (i = 0; i < input.length; i++) {
    if (input.charAt(i) === " ") {
      result += (input.charAt(i + 1).toUpperCase());
      i++;
    } else {
      result += input.charAt(i);
    }
  }
  return result;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));