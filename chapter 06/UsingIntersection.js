const Set = require('./Set');

let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

let setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

let intersectionAB = setA.intersection(setB);
console.log(intersectionAB.values());