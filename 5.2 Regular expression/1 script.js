// ** Using String search() With a String **
// The search() method searches a string for a specified value and returns the position of the match:

// Example
// Search for the position of the first occurrence of "W3Schools" in a string:
var str = "Visit W3Schools!";
var pos = str.search("W3Schools");
console.log(pos); // 6



// Using String search() With a Regular Expression
// The search() method searches a string for a specified value and returns the position of the match:

// Example
// Search for the position of the first occurrence of "W3Schools" in a string:
var str = "Visit W3Schools!";
var pos = str.search(/w3schools/i);
console.log(pos); // 6


// Using String replace() With a String
// The replace() method replaces a specified value with another value in a string:

// Example
// Replace "Microsoft" with "W3Schools" in the paragraph:
var str = "Please visit Microsoft!";
var txt = str.replace("Microsoft", "W3Schools");
console.log(txt); // Please visit W3Schools!


// Use String replace() With a Regular Expression
// The replace() method replaces a specified value with another value in a string:

// Example
// Replace "Microsoft" with "W3Schools" in the paragraph:
var str = "Please visit Microsoft!";
var txt = str.replace(/microsoft/i, "W3Schools");
console.log(txt); // Please visit W3Schools!


// Using String match() With a String
// The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.

// Example
// Search for the first character in a string:
var str = "The rain in SPAIN stays mainly in the plain";
var res = str.match(/ain/g);
console.log(res); // [ 'ain', 'ain', 'ain' ]


// Using String match() With a Regular Expression
// The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.

// Example
// Search for the first character in a string:
var str = "The rain in SPAIN stays mainly in the plain";
var res = str.match(/ain/g);
console.log(res); // [ 'ain', 'ain', 'ain' ]


// ---------------------------------
// Using the RegExp Object
// ---------------------------------


// Using test()
// It searches a string for a pattern, and returns true or false, depending on the result.

// Example
// Search a string for the character "e":
var patt = /e/;
var res = patt.test("The best things in life are free!");
console.log(res); // true


// Using exec()
// It searches a string for a specified pattern, and returns the found text. If no match is found, it returns null.

// Example
// Search a string for the character "e":
var patt = /e/;
var res = patt.exec("The best things in life are free!");
console.log(res); // [ 'e', index: 2, input: 'The best things in life are free!', groups: undefined ]




