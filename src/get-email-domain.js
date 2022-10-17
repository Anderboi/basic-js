const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  return email
    .split('@')[email.split('@').length - 1]
    .split('.')
    .filter((x) => x)
    .join('.')
}

module.exports = {
  getEmailDomain,
}
