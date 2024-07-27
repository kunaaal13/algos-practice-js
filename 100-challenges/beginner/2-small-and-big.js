// Create a function smallBig that takes an array of numbers and, in order, returns both the min and max numbers.
// Examples:

// smallBig([1, 2, 3, 4, 5, 8]) ➞ [1, 8]

// smallBig([2372, 5]) ➞ [5, 2372]

// smallBig([4]) ➞ [4, 4]

// function smallBig(arr) {
//   let min = arr[0]
//   let max = arr[0]

//   arr.forEach((num) => {
//     min = Math.min(min, num)
//     max = Math.max(max, num)
//   })

//   return [min, max]
// }

// function smallBig(arr) {
//   return [Math.min(...arr), Math.max(...arr)]
// }

function smallBig(arr) {
  arr.sort((a, b) => a - b)

  return [arr[0], arr[arr.length - 1]]
}

const arr = [4, 4]

console.log(smallBig(arr))
