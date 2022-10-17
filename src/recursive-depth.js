const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  count = 0
  calculateDepth(arr) {
    let result
    if (Array.isArray(arr) && arr.some((x) => Array.isArray(x))) {
      this.count++
      result = this.count
      this.calculateDepth(arr.flat())
    } else {
      result = this.count
      this.count = 0
    }
    return result
  }
}

module.exports = {
  DepthCalculator,
}
