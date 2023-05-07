const HashTable = require('./SeparateChaining');

let hashTable = new HashTable();

hashTable.put('diogo', 100);
hashTable.put('rafael', 150);
hashTable.put('michel', 220);

console.log(hashTable.get('diogo'));

hashTable.remove('diogo');