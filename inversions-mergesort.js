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

let count

function countInversions (array) {
  count = 0
  array = mergeSort(array)
  return count
}

function mergeSort (array) {
  if (array.length < 2) {
    return array
  }
  const middle = Math.floor(array.length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

function merge (left, right) {
  const array = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      array.push(left.shift())
    } else {
      count += left.length
      array.push(right.shift())
    }
  }
  return array.concat(left.slice()).concat(right.slice())
}

function main () {
  let t = parseInt(readLine())
  for (let a0 = 0; a0 < t; a0++) {
    let n = parseInt(readLine())
    let arr = readLine().split(' ')
    arr = arr.map(Number)
    let result = countInversions(arr)
    process.stdout.write('' + result + '\n')
  }
}
