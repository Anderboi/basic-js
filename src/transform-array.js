const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
    
  const newArr = [...arr]
  if (arr.includes('--double-next')){
    const ind = arr.indexOf('--double-next')
    newArr[ind + 1] ? newArr.splice(ind, 1, newArr[ind + 1]) : newArr.splice(ind, 1)
    return newArr
  } else if (arr.includes('--double-prev')){
    const ind = arr.indexOf('--double-prev')
    newArr[ind - 1] ? newArr.splice(ind, 1, newArr[ind - 1]) : newArr.splice(ind, 1)
    return newArr
  } else if (arr.includes('--discard-next')){
    const ind = arr.indexOf('--discard-next')
    newArr[ind + 1] ? newArr.splice(ind, 2) : newArr.splice(ind, 1)
    return newArr
  } else if (arr.includes('--discard-prev')){
    const ind = arr.indexOf('--discard-prev')
    newArr[ind - 1] ? newArr.splice(ind - 1, 2) : newArr.splice(ind, 1)
    return newArr
  } else {
    return arr
  }
}

module.exports = {
  transform
};
