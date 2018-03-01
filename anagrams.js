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
  var a = readLine().split('')
  var b = readLine().split('')
  var countA = a.length
  var countB = b.length
  var v
  var count = 0
  while (v = a.shift()) {
    var i = b.indexOf(v)
    if (i > -1) {
      b[i] = 0
      count++
    }
  }
  console.log((countA - count) + (countB - count))
}
