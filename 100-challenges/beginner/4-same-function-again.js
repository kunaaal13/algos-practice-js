// Create a function same that takes in a string str and returns a function that returns str.

// Examples:

// const function1 = same("PAPAFAM")
// function1() ➞ "PAPAFAM"

// const function2 = same("University Of Code")
// function2() ➞ "University Of Code"

// const function3 = same("")
// function3() ➞ ""

// Concept used -> CLOSURES

function same(str) {
  function returnFun() {
    return str
  }

  return returnFun
}

const fun = same('')
console.log(fun())
