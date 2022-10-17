const { NotImplementedError } = require('../extensions/index.js')

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const arr = []
  // for (let x = 0; x < names.length; x++) {
  //   arr.push(
  //     names.splice(0, x + 1).filter((a) => a === names[x]).length > 1
  //       ? item +
  //           `(${names.splice(0, x + 1).filter((a) => a === names[x]).length})`
  //       : names[x]
  //   )
  // }

  for (const item of names) {
    arr.push(
      arr.includes(item)
        ? item +
            `(${
              names
                .splice(0, names.indexOf(item))
                .filter((x) => x === item).length
            })`
        : item
    )
  }
  return arr
}

module.exports = {
  renameFiles,
}
