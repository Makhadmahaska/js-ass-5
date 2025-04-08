class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isRead = false; 
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    
    addBook(title, author) {
        const newBook = new Book(title, author);
        this.books.push(newBook);
        console.log(`Added book: "${title}" by ${author}`);
    }

    
    listBooks() {
        if (this.books.length === 0) {
            console.log("No books in the library.");
            return;
        }
        console.log("Books in the library:");
        this.books.forEach(book => {
            const status = book.isRead ? "✓ Read" : "✗ Not Read"; 
            console.log(`- "${book.title}" by ${book.author} - ${status}`);
        });
    }

    
    markAsRead(title) {
        const book = this.books.find(b => b.title === title);
        if (book) {
            book.isRead = true; 
            console.log(`Marked "${title}" as read.`);
        } else {
            console.log(`Book titled "${title}" not found in the library.`);
        }
    }

    
    isRead(title) {
        const book = this.books.find(b => b.title === title);
        if (book) {
            return book.isRead ? "The book has been read." : "The book has not been read yet.";
        } else {
            return `Book titled "${title}" not found in the library.`;
        }
    }
}


const myLibrary = new Library();
myLibrary.addBook("The Great Gatsby", "F. Scott Fitzgerald");
myLibrary.addBook("1984", "George Orwell");
myLibrary.listBooks();
myLibrary.markAsRead("1984");
myLibrary.listBooks();
console.log(myLibrary.isRead("The Great Gatsby"));
console.log(myLibrary.isRead("1984"));
