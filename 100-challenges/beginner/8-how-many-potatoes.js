// Problem
// Create a function potatoCount that returns the number of “potato” in any given str

// Examples:

// potatoCount("potato") ➞ 1

// potatoCount("potatopotato") ➞ 2

// potatoCount("potatoapple") ➞ 1

function potatoCount(str) {
  return str.split('potato').length - 1
}

console.log(potatoCount('potatopotato'))
