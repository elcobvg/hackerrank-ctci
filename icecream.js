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

function solve (arr, money) {
  const flavorMap = {}
  let flavor = 1
  for (let cost of arr) {
    let rest = money - cost
    if (rest in flavorMap) {
      return console.log(flavorMap[rest], flavor)
    }
    flavorMap[cost] = flavor++
  }
}

function main () {
  const t = parseInt(readLine())
  for (let a0 = 0; a0 < t; a0++) {
    let money = parseInt(readLine())
    let n = parseInt(readLine())
    let arr = readLine().split(' ')
    arr = arr.map(Number)
    solve(arr, money)
  }
}
