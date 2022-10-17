const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('')
  const arr2 = s2.split('')
  const arrFinal = []

  for (let x = 0; x < arr1.length; x++) {
    arr2.includes(arr1[x]) && arrFinal.push(arr2.splice(arr2.indexOf(arr1[x]), 1))
  }
  return arrFinal.length
}

module.exports = {
  getCommonCharacterCount
};
