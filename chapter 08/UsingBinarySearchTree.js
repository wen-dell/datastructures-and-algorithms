const BinarySearchTree = require('./BinarySearchTree');

let binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(11);
binarySearchTree.insert(7);
binarySearchTree.insert(5);
binarySearchTree.insert(4);
binarySearchTree.insert(10);
binarySearchTree.insert(13);
binarySearchTree.insert(9);
binarySearchTree.insert(11);
binarySearchTree.insert(12);
binarySearchTree.insert(19);
binarySearchTree.insert(20);
binarySearchTree.insert(6);
binarySearchTree.insert(1);

console.log(binarySearchTree.min());
console.log(binarySearchTree.max());

console.log(binarySearchTree.search(1) ? 'Key 1 found.' : 'Key 1 not found.');
console.log(binarySearchTree.search(8) ? 'Key 8 found.' : 'Key 8 not found.');
