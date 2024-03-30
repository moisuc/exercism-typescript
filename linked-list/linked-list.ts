class Node<T> {
  data: T;
  next: Node<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

export class LinkedList<T extends any> {
  head: Node<T> | null = null;
  constructor() {
    this.head = null;
  }
  public push(element: T) {
    if (this.head === null) {
      this.head = new Node<T>(element);
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new Node<T>(element);
    }
  }

  public pop(): T {
    if (this.head === null) {
      throw new Error("Cannot pop from an empty list");
    }
    if (this.head.next == null) {
      let current = this.head;
      this.head = null;
      return current.data;
    }
    let current = this.head;
    let previous = current;
    while (current.next !== null) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    return current.data;
  }

  public shift(): T {
    if (this.head === null) {
      throw new Error("Cannot pop from an empty list");
    }
    if (this.head.next == null) {
      let current = this.head;
      this.head = null;
      return current.data;
    }
    let current = this.head;
    this.head = current.next;
    return current.data;
  }

  public unshift(element: T) {
    let current = this.head;
    this.head = new Node<T>(element);
    this.head.next = current;
  }

  public delete(element: number) {
    if (this.head === null) {
      throw new Error("Cannot delete from an empty list");
    }
    if (this.head.data === element) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    let previous = current;
    while (current.next !== null) {
      if (current.data === element) {
        previous.next = current.next;
        return;
      }
      previous = current;
      current = current.next;
    }
  }

  public count(): number {
    let current = this.head;
    let count = 0;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }
}
const list = new LinkedList<number>();
list.push(10);
list.pop();
list.unshift(20);
console.log(list);
console.log(list.count());
