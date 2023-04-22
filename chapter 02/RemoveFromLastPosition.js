let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i + 1];
}

console.log(numbers);

numbers.pop();

console.log(numbers);