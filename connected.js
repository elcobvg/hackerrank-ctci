process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''
let input_stdin_array = ''
let input_currentline = 0

process.stdin.on('data', function (data) {
  input_stdin += data
})

process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split('\n')
  main()
})

function readLine () {
  return input_stdin_array[input_currentline++]
}

/// //////////// ignore above this line ////////////////////

function main () {
  let n = parseInt(readLine())
  let m = parseInt(readLine())
  let grid = []
  for (let grid_i = 0; grid_i < n; grid_i++) {
    grid[grid_i] = readLine().split(' ')
    grid[grid_i] = grid[grid_i].map(Number)
  }
  console.log(getBiggestRegion(grid))
}

function getBiggestRegion (matrix) {
  let maxRegion = 0
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      if (matrix[row][column] === 1) {
        let size = getRegionSize(matrix, row, column)
        if (size > maxRegion) {
          maxRegion = size
        }
      }
    }
  }
  return maxRegion
}

function getRegionSize (matrix, row, column) {
  if (row < 0 || column < 0 || row >= matrix.length || column >= matrix[row].length || matrix[row][column] === 0) {
    return 0
  }
  matrix[row][column] = 0 // Clear self
  let size = 1
  for (let r = row - 1; r <= row + 1; r++) {
    for (let c = column - 1; c <= column + 1; c++) {
      if (r !== row || c !== column) {
        size += getRegionSize(matrix, r, c)
      }
    }
  }
  return size
}
