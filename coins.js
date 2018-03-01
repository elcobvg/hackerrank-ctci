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
  let n_temp = readLine().split(' ')
  let n = parseInt(n_temp[0])
  let m = parseInt(n_temp[1])
  let coins = readLine().split(' ')
  coins = coins.map(Number)
  console.log(makeChange(coins, n))
}

const memo = {}

function makeChange (coins, money, index = 0) {
  if (money === 0) {
    return 1
  }
  if (index >= coins.length) {
    return 0
  }
  const key = money + '-' + index
  if (key in memo) {
    return memo[key]
  }
  let amountWithCoins = 0
  let ways = 0
  while (amountWithCoins <= money) {
    let remaining = money - amountWithCoins
    ways += makeChange(coins, remaining, index + 1)
    amountWithCoins += coins[index]
  }
  memo[key] = ways
  return ways
}
