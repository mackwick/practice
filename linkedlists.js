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

// //doubly linked
// class LinkedList {
//   constructor() {
//     this.head = this.tail = null;
//   }

//   //add to end
//   append(value) {
//     //if empty
//     if (!this.tail) {
//       this.head = this.tail = new Node(value);
//     } else {
//       let oldTail = this.tail;
//       this.tail = new Node(value);
//       oldTail.next = this.tail;
//       this.tail.prev = oldTail;
//     }
//   }

//   //add to beginning
//   prepend(value) {
//     //if empty
//     if (!this.head) {
//       this.head = this.tail = new Node(value);
//     } else {
//       let oldHead = this.head;
//       this.head = new Node(value);
//       oldHead.next = this.head;
//       this.head.next = oldHead;
//     }
//   }

//   deleteHead() {
//     if (!this.head) {
//       return null;
//     } else {
//       let removedHead = this.head;
//       if (this.head === this.tail) {
//         this.head = this.tail = null;
//       } else {
//         this.head = this.head.next;
//         this.head.prev = null;
//       }
//       return removedHead.value;
//     }
//   }

//   deleteTail() {
//     if (!this.tail) {
//       return null;
//     } else {
//       let removedTail = this.tail;
//       if (this.head === this.tail) {
//         this.head = this.tail = null;
//       } else {
//         this.tail = this.tail.prev;
//         this.tail.next = null;
//       }

//       return removedTail.value;
//     }
//   }

//   search(value) {
//     let currentNode = this.head;

//     while (currentNode) {
//       if (currentNode.value === value) {
//         return currentNode;
//       }
//       currentNode = currentNode.next;
//     }
//     return null;
//   }
// }

// class Node {
//   constructor(value, prev, next) {
//     this.value = value;
//     this.prev = prev || null;
//     this.next = next || null;
//   }
// }

// let list = new LinkedList();

// list.append(1);
// list.append(2);
// list.append(3);

// // console.log(list);

// list.prepend(0);
// list.prepend(-1);
// list.prepend(-2);

// list.deleteHead();
// list.deleteTail();

//******SECOND EXAMPLE******** */
//O(1) - constant time - to add something to the end or beginning, remove something from the beginning
//O(n) - linear, based on how many are in the list, to remove from end or to add or remove in the middle, find something by index or value
//O()

//A node includes the value and the pointer, looks like an object, e.g.,
// {
//   value: 4,
//   next: null
// }

//calling example:
//const newNode = new Node(4) -- create a node with a value of 4 that points to null

//because these all create a new node, use a separate class to build a node and then just call it

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  //create a new node when creating the list
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  //create new node and add to end
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.tail) return undefined;
    let temp = this.tail;
    let pre = this.head;
    while (pre.next != temp) {
      pre = pre.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  //create new node and add to beginning
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;

      //true that it existed and was changed
      return true;
    }
    //false that it was not changed
    return false;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return undefined;
    const before = this.get(index - 1);
    const temp = before.next;
    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

let myLinkedList = new LinkedList(0);
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
console.log(myLinkedList);
console.log(myLinkedList.reverse());
