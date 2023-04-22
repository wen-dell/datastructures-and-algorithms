const Stack = require('./Stack');

function baseConverter(decNumber, base) {
    let remStack = new Stack();
    let rem = 0;
    let binaryString = '';
    let digits = '0123456789ABCDEF';
    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }

    while(!remStack.isEmpty()) {
        binaryString += digits[remStack.pop()];
    }
    
    return binaryString;
}

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));