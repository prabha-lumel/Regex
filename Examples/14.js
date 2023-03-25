//Find Characters with Lazy Matching

//Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.
let text = "titanic";
let myRegex = /t[a-z]*i/; // Change this line
let result = text.match(myRegex);
console.log(result);

myRegex = /t[a-z]*?i/; // Change this line
result = text.match(myRegex);
console.log(result);

text = "<h1>Winter is coming</h1>";
myRegex = /<.*?>/; // Change this line
result = text.match(myRegex);
console.log(result);
