// Problem
// Create a function isBigger that will pass two functions, first and second, that don't take any parameters, and return a string which indicates which function returned the larger number.

// If first returns the larger number, return the string "first".
// If second returns the larger number, return the string "second".
// If both the functions return the same number, return the string "both".

// Examples:

// isBigger(() => 5, () => 10) ➞ "second"

// isBigger(() => 25, () => 25) ➞ "both"

// isBigger(() => 505050, () => 5050) ➞ "first"

function isBigger(a, b) {
  const resA = a()
  const resB = b()

  if (resA === resB) {
    return 'both'
  } else if (resA < resB) {
    return 'second'
  } else {
    return 'first'
  }
}

console.log(
  isBigger(
    () => 5,
    () => 10
  )
)
