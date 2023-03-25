//Restrict Possible Usernames

/**
 * Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

Usernames can only use alpha-numeric characters.

The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

Username letters can be lowercase and uppercase.

Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

Change the regex userCheck to fit the constraints listed above.
 */

/**
 * starts with a letter (lowercase or uppercase)
is followed by one or more letters (lowercase or uppercase)
optionally ends with one or more digits
 */
//007,RegexGuru,BadUs3rnam3,c57bT3,Oceans11
let username = "007";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log(result);
