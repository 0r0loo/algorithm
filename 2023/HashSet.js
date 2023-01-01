import { HashTable } from "./HashTable.js";

class HashSet {
  constructor() {
    this.hasTable = new HashTable();
  }

  add(data) {
    if (this.hasTable.get(data) === null) {
      this.hasTable.set(data, -1);
    }
  }

  isContain(data) {
    return this.hasTable.get(data) !== null;
  }

  remove(data) {
    this.hasTable.remove(data);
  }

  clear() {
    for (let i = 0; i < this.hasTable.arr.length; i++) {
      this.hasTable.arr[i].clear();
    }
  }

  isEmpty() {
    let isEmpty = true;
    for (let i = 0; i < this.hasTable.arr.length; i++) {
      if (this.hasTable.arr[i].count > 0) {
        isEmpty = false;
        break;
      }
    }
    return isEmpty;
  }

  printAll() {
    for (let i = 0; i < this.hasTable.arr.length; i++) {
      let currentNode = this.hasTable.arr[i].head;
      while (currentNode !== null) {
        console.log(currentNode.data.key);
        currentNode = currentNode.next;
      }
    }
  }
}

export { HashSet };
