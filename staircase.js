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
  var s = parseInt(readLine())
  for (var a0 = 0; a0 < s; a0++) {
    var n = parseInt(readLine())
    console.log(staircase(n))
  }
}

const cache = { '0': 1 }

function staircase (n) {
  if (n < 0) {
    return 0
  }
  if (n.toString() in cache) {
    return cache[n.toString()]
  }
  const ways = staircase(n - 1) + staircase(n - 2) + staircase(n - 3)
  cache[n.toString()] = ways

  return ways
}
