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
        alert(`Lade till bok: "${title}" av ${author}`);
    }

    listBooks() {
        if (this.books.length === 0) {
            alert("Inga böcker i biblioteket.");
            return;
        }

        let bookList = "Böcker i biblioteket:\n";
        this.books.forEach(book => {
            const status = book.isRead ? "✓ Lästs" : "✗ Inte lästs";
            bookList += `- "${book.title}" av ${book.author} - ${status}\n`;
        });

        alert(bookList);
    }

    markAsRead(title) {
        const book = this.books.find(b => b.title.toLowerCase() === title.toLowerCase());
        if (book) {
            book.isRead = true;
            alert(`Markerade "${book.title}" som läst.`);
        } else {
            alert(`Hittade inte boken "${title}" i biblioteket.`);
        }
    }

    isRead(title) {
        const book = this.books.find(b => b.title.toLowerCase() === title.toLowerCase());
        if (book) {
            return book.isRead ? "Boken har lästs." : "Boken har inte lästs än.";
        } else {
            return `Hittade inte boken "${title}" i biblioteket.`;
        }
    }
}


const myLibrary = new Library();


function showMenu() {
    let choice;
    do {
        choice = prompt(
            "📚 Välj ett alternativ:\n" +
            "1. Lägg till en bok\n" +
            "2. Lista alla böcker\n" +
            "3. Markera bok som läst\n" +
            "4. Kolla om bok är läst\n" +
            "5. Avsluta"
        );

        switch (choice) {
            case "1":
                const title = prompt("Ange boktitel:");
                const author = prompt("Ange författare:");
                myLibrary.addBook(title, author);
                break;
            case "2":
                myLibrary.listBooks();
                break;
            case "3":
                const readTitle = prompt("Vilken bok vill du markera som läst?");
                myLibrary.markAsRead(readTitle);
                break;
            case "4":
                const checkTitle = prompt("Vilken bok vill du kolla?");
                alert(myLibrary.isRead(checkTitle));
                break;
            case "5":
                alert("Tack för att du använder biblioteket!");
                break;
            default:
                alert("Ogiltigt val, försök igen.");
        }
    } while (choice !== "5");
}

showMenu();
