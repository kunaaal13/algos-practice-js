// Problem
// Create a function discountedPrice(price, discount) that takes two arguments: the original price and the discount percentage as integers and returns the final discounted price.

// Note: Your answer should be rounded to two decimal places.

// Examples:

// discountedPrice(1500, 50) ➞ 750

// discountedPrice(89, 20) ➞ 71.2

// discountedPrice(100, 75) ➞ 25

function discountedPrice(price, discount) {
  return parseFloat(price - (price * discount) / 100)
}

console.log(discountedPrice(89, 20))
console.log(discountedPrice(100, 75))
console.log(discountedPrice(1500, 50))
console.log(discountedPrice(1693, 80))
