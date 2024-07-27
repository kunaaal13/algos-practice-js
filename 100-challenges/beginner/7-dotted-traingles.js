// This Triangular Number Sequence is generated from a pattern of dots that form a triangle and the first 5 numbers of the sequence and dots are shown above.

// Create a function triangle that returns the number of dots when given its corresponding triangle number of the sequence n.

// Examples:

// triangle(1) ➞ 1
// triangle(2) -> 3
// traingle(3) -> 6
// triangle(6) ➞ 21

// triangle(215) ➞ 23220

function triangle(n) {
  return (n * (n + 1)) / 2
}

console.log(triangle(6))
