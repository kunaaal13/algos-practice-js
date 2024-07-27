// Create a function myHouse that takes a number (step) and returns the total number of matchsticks in that step.
// Examples:
// myHouse(1) ➞ 6
// myHouse(2) -> 11
// myHouse(4) ➞ 21
// myHouse(87) ➞ 436

function myHouse(step) {
  if (step === 0) return 0
  if (step === 1) return 6

  return 6 + (step - 1) * 5
}

console.log(myHouse(87))
