function processData (input) {
  var n = parseInt(input)
  console.log(fibonacci(n))
}

process.stdin.resume()
process.stdin.setEncoding('ascii')
_input = ''
process.stdin.on('data', function (input) {
  _input += input
})

process.stdin.on('end', function () {
  processData(_input)
})

function fibonacci (number) {
  if (number < 1) {
    return 0
  }
  if (number <= 2) {
    return 1
  }

  return fibonacci(number - 1) + fibonacci(number - 2)
}
