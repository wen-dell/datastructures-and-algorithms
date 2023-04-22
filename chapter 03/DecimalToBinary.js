const Stack = require('./Stack');

function divideBy2(decNumber) {
    let remStack = new Stack();
    let rem = 0;
    let binaryString = '';
    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }

    while(!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }
    
    return binaryString;
}

console.log(divideBy2(233));
console.log(divideBy2(10));
console.log(divideBy2(1000));