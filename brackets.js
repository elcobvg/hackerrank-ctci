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
  let t = parseInt(readLine())
  for (let a0 = 0; a0 < t; a0++) {
    let expression = readLine()
    console.log(balancedBrackets(expression))
  }
}

function balancedBrackets (expression) {
  let brackets = expression.split('')
  const open = []
  for (const b of brackets) {
    if (b === '{' || b === '[' || b === '(') {
      open.push(b)
    } else {
      let o = open.pop()
      if (b === '}' && o !== '{' ||
				  b === ']' && o !== '[' ||
				  b === ')' && o !== '(') {
        return 'NO'
      }
    }
  }
  return open.length ? 'NO' : 'YES'
}
