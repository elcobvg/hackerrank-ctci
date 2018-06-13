'use strict'

function packNumbers(arr) {
  const result = []
  let packNum
  let packCount = 1
  for (let i of arr) {
    if (i === packNum) {
      packCount++
    } else {
      if(packNum) {
        if (packCount > 1) {
          result.push(`${packNum}:${packCount}`)
        } else {
          result.push(packNum)
        }
      }
      packNum = i
      packCount = 1
    }
  }
  if (packCount > 1) {
    result.push(`${packNum}:${packCount}`)
  } else {
    result.push(packNum)
  }
  return result
}

console.log(packNumbers([5,5,5,7,7,3,4,7]))
console.log(packNumbers([255,255,67,12,12,12,36,89,89,54,2,12,36,36,36]))

