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

const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return num !== 1
}

function main () {
  var p = parseInt(readLine())
  for (var a0 = 0; a0 < p; a0++) {
    var n = parseInt(readLine())
    var output = isPrime(n) ? 'Prime' : 'Not prime'
    console.log(output)
  }
}
