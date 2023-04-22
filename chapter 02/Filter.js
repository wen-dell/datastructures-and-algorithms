let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let isEven = (x) => {
    console.log(x);
    return x % 2 === 0;
}

let myFilter = numbers.filter(isEven);

console.log(myFilter);