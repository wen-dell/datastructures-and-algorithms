const LinkedList = require('./LinkedList');

let linkedList = new LinkedList();

linkedList.append(10);
linkedList.append(12);
linkedList.insert(1, 8);

console.log(linkedList.indexOf(10));
console.log(linkedList.indexOf(9));
console.log(linkedList.toString());

linkedList.removeAt(1);
linkedList.remove(12);

console.log(linkedList.toString());
console.log(linkedList.isEmpty());
console.log(linkedList.size());