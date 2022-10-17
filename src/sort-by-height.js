const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexes = []
  for (let x = 0; x < arr.length; x++) {
    arr[x] === -1 && indexes.push(x)
  }
  const newArr = arr.filter(x => x !== -1).sort((a,b) => a - b)
  indexes.forEach(x => newArr.splice(x, 0, -1))
  return newArr
}

module.exports = {
  sortByHeight,
}
