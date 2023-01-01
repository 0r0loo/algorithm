import { DoublyLinkedList } from "./DoubleLinkedList.js";

class Queue {
  constructor(props) {
    this.list = new DoublyLinkedList();
  }

  enqueue(data) {
    this.list.insertAt(0, data);
  }
  dequeue() {
    try {
      return this.list.deleteLast();
    } catch (error) {
      return null;
    }
  }

  front() {
    return this.list.tail;
  }

  isEmpty() {
    return this.list.count === 0;
  }
}

export { Queue };
