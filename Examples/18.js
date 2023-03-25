//Match All Letters and Numbers

//The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).

//Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.
//Your regex should use the global flag.

let quoteSample = "The five boxing wizards jump quickly.";
console.log(quoteSample.length);
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result);
