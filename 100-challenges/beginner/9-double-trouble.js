// Problem
// Create a function double that takes a string and returns a string in which each character is repeated once. All test cases contain valid strings. Don't worry about spaces, special characters or numbers. They're all considered valid characters.

// Examples:

// double("String") ➞ "SSttrriinngg"

// double("Hello World!") ➞ "HHeelllloo WWoorrlldd!!"

// double("1234!_ ") ➞ "11223344!!__ "

function double(str) {
  const arr = str.split('')
  return arr.map((char) => char.repeat(2)).join('')
}

console.log(double('String'))
