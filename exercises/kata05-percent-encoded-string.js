// Create a function named urlEncode that will receive a string of words, and return that string with all of the whitespace characters converted to %20. If there is whitespace on the outside of the string, like in our second example above, you should only replace the whitespace within the string.

const urlEncode = function(text) {
  let encoded = "";
  text = text.trim(' ');
  for (let i = 0; i < text.length; i++) {
    const character = text[i];
    if (character === ' ') {
      encoded += "%20";
    } else {
      encoded += character;
    }
  }
  return encoded;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

