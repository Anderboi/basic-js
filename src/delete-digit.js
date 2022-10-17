const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = []
  for (let x = 0; x < String(n).length; x++) {
    arr.push(
      String(n)
        .split('')
        .filter((item, idx) => idx !== x)
        .join('')
    )
  }

  return arr.map((item) => Number(item)).sort((a, b) => b - a)[0]
}

module.exports = {
  deleteDigit,
}
