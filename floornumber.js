'use strict'

function getLuckyFloorNumber(n) {
  let result = 0
  while (n--) {
    result++
    while (/4|13/.test(result)) {
      result++
    }
  }
  return result
}

console.log(getLuckyFloorNumber(50))
