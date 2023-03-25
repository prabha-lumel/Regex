//Match Non-Whitespace Characters

//Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.

//[^ \r\t\f\n\v].  whitespace, carriage return, tab, form feed, and new line characters

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
console.log(result);
