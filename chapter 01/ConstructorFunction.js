function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printIsbn = function() {
        console.log(this.isbn);
    }
}

let book = new Book('title', 'page', 'isbn');
console.log(book.title);
book.title = 'new title';
console.log(book.title);

Book.prototype.printTitle = function() {
    console.log(this.title);
}
book.printTitle();
book.printIsbn();