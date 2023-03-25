let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);

/**
 * Here match would return ["Repeat"].

To search or extract a pattern more than once, you can use the global search flag: g.
 */

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);

/**
 * And here match returns the value ["Repeat", "Repeat", "Repeat"]
 */

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line