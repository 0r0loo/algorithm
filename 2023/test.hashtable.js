import { HashTable } from "./HashTable.js";

const hashTable = new HashTable();

hashTable.set(1, "이운재");
hashTable.set(4, "최진철");
hashTable.set(20, "최진철");
hashTable.set(46, "유상철");
hashTable.set(22, "송종국");
hashTable.set(21, "박지성");
hashTable.set(5, "김남일");
hashTable.set(10, "이영표");

console.log(`1: ${hashTable.get(1)}`);

hashTable.remove(1);
console.log(`1: ${hashTable.get(1)}`);
console.log(`21 : ${hashTable.get(21)}`);
