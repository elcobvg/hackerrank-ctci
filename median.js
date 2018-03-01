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

var minHeap
var maxHeap

function main () {
  var n = parseInt(readLine())
  var a = []
  for (var a_i = 0; a_i < n; a_i++) {
    a[a_i] = parseInt(readLine())
  }

  minHeap = new MinHeap()
  maxHeap = new MaxHeap()

  for (var i = 0; i < n; i++) {
    addToHeaps(a[i])
    balanceHeaps()
    getMedian()
  }
}

function addToHeaps (item) {
  if (!minHeap.size() || item >= minHeap.top()) {
    minHeap.add(item)
  } else if (!maxHeap.size() || item <= maxHeap.top()) {
    maxHeap.add(item)
  } else {
    minHeap.size() > maxHeap.size() ? maxHeap.add(item) : minHeap.add(item)
  }
}

function balanceHeaps () {
  if (Math.abs(minHeap.size() - maxHeap.size()) > 1) {
    if (minHeap.size() > maxHeap.size()) {
      maxHeap.add(minHeap.removeTop())
    } else {
      minHeap.add(maxHeap.removeTop())
    }
  }
}

function getMedian () {
  var median = 0
  if (Math.abs(minHeap.size() - maxHeap.size()) === 1) {
    if (minHeap.size() > maxHeap.size()) {
      median = minHeap.top()
    } else {
      median = maxHeap.top()
    }
  } else {
    median = (minHeap.top() + maxHeap.top()) / 2
  }
  console.log(median.toFixed(1))
}

class Heap {
  constructor () {
    this.heap = []
    this._size = 0
  }

  swap (one, two) {
    const temp = this.heap[one]
    this.heap[one] = this.heap[two]
    this.heap[two] = temp
  }

  size () {
    return this.heap.length
  }

  top () {
    return this.heap[0]
  }

  add (item) {
    this.heap.push(item)
    this.siftUp()
  }

  removeTop () {
    if (this.size() === 0) {
      return null
    }
    if (this.size() === 1) {
      return this.heap.shift()
    }
    const top = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.heapify()
    return top
  }

  getLeftIndex (pos) {
    return pos * 2 + 1
  }

  getRightIndex (pos) {
    return pos * 2 + 2
  }

  getParentIndex (pos) {
    return Math.floor((pos - 1) / 2)
  }

  hasLeft (pos) {
    return this.size() > this.getLeftIndex(pos)
  }

  hasRight (pos) {
    return this.size() > this.getRightIndex(pos)
  }

  hasParent (pos) {
    return this.getParentIndex(pos) >= 0
  }

  left (pos) {
    return this.heap[this.getLeftIndex(pos)]
  }

  right (pos) {
    return this.heap[this.getRightIndex(pos)]
  }

  parent (pos) {
    return this.heap[this.getParentIndex(pos)]
  }

  siftUp () {
    let pos = this.size() - 1
    while (this.hasParent(pos)) {
      if (this.doneSiftUp(pos)) {
        break
      } else {
        this.swap(pos, this.getParentIndex(pos))
        pos = this.getParentIndex(pos)
      }
    }
  }

  heapify () {
    let pos = 0
    while (pos < this.size() && this.hasLeft(pos)) {
      let index = this.getLeftIndex(pos)
      if (this.compareRight(pos, index)) {
        index = this.getRightIndex(pos)
      }
      if (this.doneHeapify(pos, index)) {
        break
      } else {
        this.swap(pos, index)
        pos = index
      }
    }
  }
}

class MinHeap extends Heap {
  doneSiftUp (pos) {
    return this.heap[pos] >= this.parent(pos)
  }

  compareRight (pos, index) {
    return this.hasRight(pos) && this.right(pos) < this.heap[index]
  }

  doneHeapify (pos, index) {
    return this.heap[pos] <= this.heap[index]
  }
}

class MaxHeap extends Heap {
  doneSiftUp (pos) {
    return this.heap[pos] <= this.parent(pos)
  }

  compareRight (pos, index) {
    return this.hasRight(pos) && this.right(pos) > this.heap[index]
  }

  doneHeapify (pos, index) {
    return this.heap[pos] >= this.heap[index]
  }
}
