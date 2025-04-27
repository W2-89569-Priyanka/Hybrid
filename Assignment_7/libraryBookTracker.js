class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.available = true;
    }
}


const args = process.argv.slice(2);
const books = [];

for (let i = 0; i < args.length; i += 2) {
    const title = args[i];
    const author = args[i + 1];
    books.push(new Book(title, author));
}


console.log("Library Book List:");
books.forEach((book, index) => {
    console.log(`${index + 1}. "${book.title}" by ${book.author} - ${book.available ? "Available" : "Not Available"}`);
});
