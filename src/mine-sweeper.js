const { NotImplementedError } = require('../extensions/index.js')

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const newMatrix = []
  let innerMatrix = []
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      console.log(`x = ${x}; y = ${y}`)
      let count = 0
      x > 0 && matrix[x - 1][y] === true ? count++ : null
      x > 0 && y > 0 && matrix[x - 1][y - 1] === true ? count++ : null
      x < matrix.length - 1 && matrix[x + 1][y] === true ? count++ : null
      x < matrix.length - 1 && y < matrix[x].length - 1 && matrix[x + 1][y + 1] === true ? count++ : null
      x > 0 && y < matrix[x].length - 1 && matrix[x - 1][y + 1] === true ? count++ : null
      x < matrix.length - 1 && y > 1 && matrix[x + 1][y - 1] === true ? count++ : null
      y > 0 && matrix[x][y - 1] === true ? count++ : null
      y < matrix[x].length - 1 && matrix[x][y + 1] === true ? count++ : null

      innerMatrix.push(count)
      console.log(innerMatrix)
    }

    newMatrix.push(innerMatrix)
    innerMatrix = []
  }
  console.log(newMatrix)
  return newMatrix
}

module.exports = {
  minesweeper,
}
