let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

numbers = numbers.reverse(); // [6, 5, 4, 3, 2, 1]
console.log(numbers);

numbers = numbers.sort((a, b) => {
    return a - b;
});
console.log(numbers);