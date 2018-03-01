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
  let m_temp = readLine().split(' ')
  let m = parseInt(m_temp[0])
  let n = parseInt(m_temp[1])
  let magazine = readLine().split(' ')
  let ransom = readLine().split(' ')
  let v
  let can = 'Yes'

  while (v = ransom.shift()) {
    let i = magazine.indexOf(v)
    if (i > -1) {
      magazine[i] = 0   // Can't use again
    } else {
      can = 'No'
      break
    }
  }
  console.log(can)
}
