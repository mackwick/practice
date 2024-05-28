//HASH TABLE
//Hashes are irreversible and deterministic (same result for same entry)
//Collision - two values given the same key (solution is using something like an array or linked list to track all)
//At its core, it is an array-based data structure with some added functionality

// const hash = (key, size) => {
//   let hashedKey = 0;

//   for (let i = 0; i < key.length; i++) {
//     hashedKey = key.charCodeAt(i);
//   }

//   return hashedKey % size;
// };

// class HashTable {
//   constructor() {
//     this.size = 20;
//     this.buckets = Array(this.size);

//     for (let i = 0; i < this.buckets.length; i++) {
//       this.buckets[i] = new Map();
//     }
//   }

//   insert(key, value) {
//     let idx = hash(key, this.size);
//     this.buckets[idx].set(key, value);
//   }

//   remove(key) {
//     let idx = hash(key, this.size);
//     let deleted = this.buckets[idx].get(key);
//     this.buckets[idx].delete(key);
//     return deleted;
//   }

//   search(key) {
//     let idx = hash(key, this.size);
//     return this.buckets[idx].get(key);
//   }
// }

// const hashTable = new HashTable();

// hashTable.insert("serena", "moon");
// hashTable.insert("amy", "mercury");
// hashTable.insert("rei", "mars");
// hashTable.insert("lita", "jupiter");
// hashTable.insert("mina", "venus");
// hashTable.insert("darien", "tuxedo max");

// console.log(hashTable.search("rei"));
// console.log(hashTable.search("lita"));
// console.log(hashTable.search("serena"));

// hashTable.remove("darien");
// hashTable.remove("mina");

// console.log(hashTable);

//HARDWARE INVENTORY EXAMPLE
// class HashTable {
//   constructor(size = 7) {
//     this.dataMap = new Array(size);
//   }
//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
//     }
//     return hash;
//   }

//   set(key, value) {
//     let index = this._hash(key);
//     if (!this.dataMap[index]) {
//       this.dataMap[index] = [];
//     }
//     this.dataMap[index].push([key, value]);
//   }

//   get(key) {
//     let index = this._hash(key);
//     if (this.dataMap[index]) {
//       for (let i = 0; i < this.dataMap[index].length; i++) {
//         if (this.dataMap[index][i][0] === key) {
//           return this.dataMap[index][i][1];
//         }
//       }
//     }
//     return undefined;
//   }

//   keys() {
//     let allKeys = [];
//     for (let i = 0; i < this.dataMap.length; i++) {
//       if (this.dataMap[i]) {
//         for (let j = 0; j < this.dataMap[i].length; j++) {
//           allKeys.push(this.dataMap[i][j][0]);
//         }
//       }
//     }
//     return allKeys;
//   }
// }

// let myHashTable = new HashTable();
// console.log(myHashTable);

// myHashTable.set("bolts", 1400);
// myHashTable.set("washers", 50);
// myHashTable.set("lumber", 70);

// console.log(myHashTable);

// console.log(myHashTable.get("bolts"));
// console.log(myHashTable.get("washers"));
// console.log(myHashTable.get("lumber"));

// console.log(myHashTable.keys());

//objects are considered a built-in hash table
//big O is O(1) --> constant

//Interview questions
//determine whether two arrays have any elements in common
//nested array is first instinct, but not efficient O(n^2)

//this one is O(2n) = O(n)

// function itemInCommon(arr1, arr2) {
//   let obj = {};
//   for (let i = 0; i < arr1.length; i++) {
//     obj[arr1[i]] = true;
//   }

//   for (let j = 0; j < arr2.length; j++) {
//     if (obj[arr2[j]]) return true;
//   }
//   return false;
// }

// console.log(itemInCommon([1, 3, 5], [2, 4, 5]));
//omg i love this
