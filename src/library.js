import Book from "./book.js";

let myLibrary = [];

const addBook = (title, author, pages, read) => {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
};

const deleteBook = (i) => myLibrary.splice(i, 1);

const clearLibrary = () => (myLibrary = []);

export { myLibrary, addBook, deleteBook, clearLibrary };
