const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  getLength() {
    return this.arr.length
  },
  addLink(value) {
    this.arr ? this.arr.push('' + value) : (this.arr = ['' + value || ' '])
    return this
  },
  removeLink(position) {
    if (
      typeof position === 'number' &&
      isFinite(position) &&
      Math.round(position) === position &&
      position < this.arr.length
    ) {
      this.arr.splice(position - 1, 1)
    } else {
      throw new Error("You can't remove incorrect link!")
    }
    return this
  },
  reverseChain() {
    this.arr.reverse()
    return this
  },
  finishChain() {
    const newArr = this.arr
    this.arr = []
    return newArr.map((item) => `( ${item} )`).join('~~')
  },
}

module.exports = {
  chainMaker,
}
