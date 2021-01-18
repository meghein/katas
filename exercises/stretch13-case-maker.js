// Create a function named makeCase that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

const makeCase = function(input, type) {
  let result = "";
  if (type.includes("camel")) {
    for (let i = 0; i < input.length; i++) {
      if (input.charAt(i) === " ") {
        result += (input.charAt(i + 1).toUpperCase());
        i++;
      } else {
        result += input.charAt(i);
      }
    }
  }
  if (type.includes("pascal")) {
    input = input.replace(/\w+/g,
      function(w) {
        return w[0].toUpperCase() + w.slice(1).toLowerCase();
      });
    result += input;
  }
  if (type.includes("snake")) {
    result += input.replace(/ /g, "_");
  }
  if (type.includes("kebab")) {
    result += input.replace(/ /g, "-");
  }
  if (type.includes("title")) {
    input = input.replace(/\w+/g,
      function(w) {
        return w[0].toUpperCase() + w.slice(1).toLowerCase();
      });
    result += input.replace(/ /g, " ");
  }
  if (type.includes("vowel")) {
    result += input.replace(/[aeiou]/gi,
      function(vowels) {
        return vowels.toUpperCase();
      });
  }
  if (type.includes("consonant")) {
    result += input.replace(/[bcdfghjklmnpqrstvwxyz]/gi,
      function(consonant) {
        return consonant.toUpperCase();
      });
  }
  if (type.includes("upper")) {
    result = result.toUpperCase();
  }
  if (type.includes("lower")) {
    result = result.toLowerCase();
  }
  return result;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["snake", "upper"]));

//EXPECTED OUTCOME
// thisIsAString
// ThisIsAString
// this_is_a_string
// this-is-a-string
// This Is A String
// thIs Is A strIng
// THiS iS a STRiNG
// THIS_IS_A_STRING