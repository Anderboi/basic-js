const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const arr = []
  if (options.repeatTimes) {
    for (let x = 0; x < options.repeatTimes; x++) {
      arr.push(String(str))
      if (options.addition) {
        for (let x = 0; x < options.additionRepeatTimes; x++) {
          arr.push(String(options.addition))
          x < options.additionRepeatTimes - 1 &&
            arr.push(
              options.additionSeparator
                ? String(options.additionSeparator)
                : '|'
            )
        }
      } else {
        arr.push(String(options.addition))
      }
      x < options.repeatTimes - 1 &&
        arr.push(options.separator ? String(options.separator) : '+')
    }
  } else {
    arr.push(String(str))
  }
  return arr.join('')
}

module.exports = {
  repeater,
}
