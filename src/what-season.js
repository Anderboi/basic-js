const { NotImplementedError } = require('../extensions/index.js')

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  !date && 'Unable to determine the time of year!'
  if (date instanceof Date && !isNaN(date)) {
    if (
      (date.getMonth() === 1 &&
      date.getDate() <= 28) ||
      (date.getMonth() % 2 === 0 && date.getMonth() <= 7 &&
      date.getDate() <= 31) ||
      (date.getMonth() % 2 === 1 && date.getMonth() <= 7 &&
      date.getDate() <= 30) ||
      (date.getMonth() % 2 === 1 && date.getMonth() >= 8 &&
      date.getDate() <= 31) ||
      (date.getMonth() % 2 === 0 && date.getMonth() >= 8 &&
      date.getDate() <= 30)
    ) {
      let month = date.getMonth()
      if (month === 11 || month === 0 || month === 1) {
        return 'winter'
      } else if (month >= 2 && month <= 4) {
        return 'spring'
      } else if (month >= 5 && month <= 7) {
        return 'summer'
      } else if (month >= 8 && month <= 10) {
        return 'fall'
      } else {
        return 'Unable to determine the time of year!'
      }
    } else {
      throw new Error('Invalid date!')
    }
  } else {
    throw new Error('Invalid date!')
  }
}

module.exports = {
  getSeason,
}
