
const library = [];
let running = true;

function addBook() {
  const title = prompt("Enter book title:");
  const author = prompt("Enter book author:");
  const isReadInput = prompt("Have you read this book? (yes/no):").toLowerCase();
  const isRead = (isReadInput === "yes");

  const newBook = {
    title: title,
    author: author,
    isRead: isRead
  };

  library.push(newBook);
  alert(`Book "${title}" added to the library!`);
}

function listBooks() {
  if (library.length === 0) {
    alert("Library is empty.");
    return;
  }

  console.log("=== Book List ===");
  library.forEach(book => {
    console.log(`${book.title} by ${book.author} - ${book.isRead ? "Read" : "Not read"}`);
  });
  alert("Books have been logged to the console.");
}

function markAsRead(title) {
  const book = library.find(b => b.title === title);
  if (book) {
    book.isRead = true;
    alert(`Marked "${book.title}" as read.`);
  } else {
    alert(`Book titled "${title}" not found.`);
  }
}


function removeBook() {
  const title = prompt("Enter the title of the book to remove:");
  const index = library.findIndex(b => b.title === title);
  if (index !== -1) {
    const removed = library.splice(index, 1);
    alert(`Removed "${removed[0].title}" from the library.`);
  } else {
    alert(`Book titled "${title}" not found.`);
  }
}


function listUnreadBooks() {
  const unread = library.filter(b => !b.isRead);
  if (unread.length === 0) {
    alert("All books have been read!");
  } else {
    console.log("=== Unread Books ===");
    unread.forEach(book => {
      console.log(`${book.title} by ${book.author}`);
    });
    alert("Unread books have been logged to the console.");
  }
}


while (running) {
  const choice = prompt(`
📚 Book Tracker
1. Add Book
2. List Books
3. Mark Book as Read
4. Remove Book
5. List Only Unread Books
6. Exit

Enter your choice:`);

  switch (choice) {
    case "1":
      addBook();
      break;
    case "2":
      listBooks();
      break;
    case "3":
      const title = prompt("Enter the title of the book to mark as read:");
      markAsRead(title);
      break;
    case "4":
      removeBook();
      break;
    case "5":
      listUnreadBooks();
      break;
    case "6":
      running = false;
      alert("Goodbye!");
      break;
    default:
      alert("Invalid choice.");
  }
}
