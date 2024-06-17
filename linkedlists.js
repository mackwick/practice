//LINKED LISTS
//sequential collection of nodes that contain the data value and a pointer to next node
//head node - points to second, etc.
//tail node - end, points to null
//singly linked: one pointer (to the next item on the list)
//doubly linked: two pointers (one to the next item and another to prev item); in doubly, the head node also has a pointer to null (like the tail does in both)

//arrays support direct access in memory; linked lists support sequential access
//allows faster adding and removing individual elements --> so better for datasets that are constantly changing

//LL also have lots of methods: append, prepend, addAt, removeAt, elementAt, indexOf, search, forEach

//******EXAMPLE

//doubly linked
class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  //add to end
  append(value) {
    //if empty
    if (!this.tail) {
      this.head = this.tail = new Node(value);
    } else {
      let oldTail = this.tail;
      this.tail = new Node(value);
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }
  }

  //add to beginning
  prepend(value) {
    //if empty
    if (!this.head) {
      this.head = this.tail = new Node(value);
    } else {
      let oldHead = this.head;
      this.head = new Node(value);
      oldHead.next = this.head;
      this.head.next = oldHead;
    }
  }

  deleteHead() {
    if (!this.head) {
      return null;
    } else {
      let removedHead = this.head;
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      return removedHead.value;
    }
  }

  deleteTail() {
    if (!this.tail) {
      return null;
    } else {
      let removedTail = this.tail;
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }

      return removedTail.value;
    }
  }

  search(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
}

class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev || null;
    this.next = next || null;
  }
}

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);

// console.log(list);

list.prepend(0);
list.prepend(-1);
list.prepend(-2);

list.deleteHead();
list.deleteTail();
