//Match a Literal String with Different Possibilities

//Complete the regex petRegex to match the pets dog, cat, bird, or fish.

let petString = "James has a pet tat.";
let petRegex = /cat|dog|fish/; // Change this line
let result = petRegex.test(petString);
console.log(result);
