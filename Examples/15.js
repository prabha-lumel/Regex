//Find One or More Criminals in a Hunt

//Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.

let myString = "P1P5P4CCCcP2P6P3";
let reCriminals = /C+/gi; // Change this line
let result = myString.match(reCriminals);
console.log(result);
