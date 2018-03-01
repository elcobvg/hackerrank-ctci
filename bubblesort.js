process.stdin.resume()
process.stdin.setEncoding('ascii')

var input_stdin = ''
var input_stdin_array = ''
var input_currentline = 0

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
  let a = readLine().split(' ')
  a = a.map(Number)

  bubbleSort(a)
}

function bubbleSort (array) {
  let countSwap = 0
  let swapped
  do {
    swapped = false
    for (let i = 0; i < array.length; i++) {
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        countSwap++;
        [array[i], array[i + 1]] = [array[i + 1], array[i]]
        swapped = true
      }
    }
  } while (swapped)

  console.log(`Array is sorted in ${countSwap} swaps.`)
  console.log(`First Element: ${array[0]}`)
  console.log(`Last Element: ${array[array.length - 1]}`)
  return array
}
