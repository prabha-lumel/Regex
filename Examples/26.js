//Specify Only the Lower Number of Matches

//Change the regex haRegex to match the word Hazzah only when it has four or more letter z's.

let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
console.log(multipleA.test(A4));
console.log(multipleA.test(A2));
multipleA.test(A100);

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
console.log(result);
