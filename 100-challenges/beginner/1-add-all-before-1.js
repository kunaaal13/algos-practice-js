// Create a function addBefore that takes any number as an argument. The function should then add up all the numbers from 1 to the number you passed in the function.
//Examples:
//addBefore(5) ➞ 15
// 1 + 2 + 3 + 4 + 5 = 15
//addBefore(2) ➞ 3
// 1 + 2 = 3
//addBefore(897) ➞ 402753
// 1 + 2 + 3... + 897 = 402753

function addBefore(num) {
  let sum = 0

  for (let i = 0; i < num; i++) {
    sum = sum + i
  }

  return sum
}

function addBefore1(n) {
  return (n * (n + 1)) / 2
}

console.log(addBefore1(897))
