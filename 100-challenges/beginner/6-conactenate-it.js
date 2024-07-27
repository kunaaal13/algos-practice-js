// Create a function concatenate that concatenates n input arrays, where n is variable. The arrays should be concatenated in order of the arguments.
// concatenate([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concatenate([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concatenate([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

// concatenate([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]

// function concatenate(...args) {
//   return [].concat(...args)
// }

function concatenate(...args) {
  return args.flat(Infinity)
}

console.log(concatenate([1, 2, 3], [4, 5], [6, 7]))
