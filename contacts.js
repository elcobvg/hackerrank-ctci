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
  const trie = new Node()
  const n = parseInt(readLine())
  for (let a0 = 0; a0 < n; a0++) {
    const op_temp = readLine().split(' ')
    const op = op_temp[0]
    const contact = op_temp[1].split('')
    if (op === 'add') {
      trie.add(contact)
    } else {
      console.log(trie.find(contact))
    }
  }
}

class Node {
  constructor () {
    this.size = 0
  }

  add (s) {
    this.size++
    if (s.length === 0) {
      return 
    }
    const current = s.shift()
    if (!this[current]) {
      this[current] = new Node()
    }
    this[current].add(s)
  }

  find (s) {
    if (s.length === 0) {
      return this.size
    }
    const child = this[s.shift()]
    if (!child) {
      return 0
    }
    return child.find(s)
  }
}