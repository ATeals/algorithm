const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);

    let current = [this.heap.length - 1];
    let parent = Math.floor(current / 2);
    while (parent !== 0 && this.heap[parent] > value) {
      [this.heap[parent], this.heap[current]] = [this.heap[current], this.heap[parent]];
      current = parent;
      parent = Math.floor(current / 2);
    }
  }

  pop() {
    if (this.heap.length < 2) return 0;
    if (this.heap.length === 2) return this.heap.pop();

    let popItem = this.heap[1];
    this.heap[1] = this.heap.pop();

    let [current, left, right] = [1, 2, 3];

    while (this.heap[current] > this.heap[left] || this.heap[current] > this.heap[right]) {
      if (this.heap[left] > this.heap[right]) {
        [this.heap[current], this.heap[right]] = [this.heap[right], this.heap[current]];
        current = right;
      } else {
        [this.heap[current], this.heap[left]] = [this.heap[left], this.heap[current]];
        current = left;
      }

      left = current * 2;
      right = left + 1;
    }

    return popItem;
  }
}

const arr = input.slice(1).map(Number);

const heap = new MinHeap();

const result = [];

for (let n of arr) {
  if (n === 0) result.push(heap.pop());
  else heap.push(n);
}

console.log(result.join("\n"));
