const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = []

  for (let x = 0; x < str.length; x++) {
    if (str[x] !== str[x + 1]) {
      arr.push(
        str
          .split('')
          .splice(x, str.length - 1)
          .map((a, i) => a === str[x] && i)
          .filter((item) => item !== false).length > 1
          ? str
              .split('')
              .splice(x, str.length - 1)
              .map((a, i) => a === str[x] && i)
              .filter((item) => item !== false).length + str[x]
          : str[x]
      )
    }
  }

  return arr.join('')
}

module.exports = {
  encodeLine,
}
