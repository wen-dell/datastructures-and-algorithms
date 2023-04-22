let names = ['Ana', 'ana', 'john', 'John'];

console.log(names.sort((a, b) => {
    if (a.toLocaleLowerCase() < b.toLocaleLowerCase()) {
        return -1;
    }
    if (a.toLocaleLowerCase() > b.toLocaleLowerCase()) {
        return 1;
    }
    return 0;
}));

let names2 = ['Maève', 'Maeve'];
console.log(names2.sort((a, b) => {
    return a.localeCompare(b);
}));