const HashTable = require('./HashTable');

let hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');

console.log(hash.get('Gandalf'));
console.log(hash.get('Loiane')); 