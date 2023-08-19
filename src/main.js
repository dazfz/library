import { addBook } from "./library.js";
import displayLibrary from "./display.js";
// require('./styles.css');
// sample books
addBook("1984", "George Orwell", 328, false);
addBook("The Lord of the Rings", "J.R.R. Tolkien", 1488, true);
addBook("The Chronicles of Narnia", "C.S. Lewis", 767, false);
addBook("To Kill a Mockingbird", "Harper Lee", 281, false);
addBook("The Catcher in the Rye", "J.D. Salinger", 277, false);
addBook("One Hundred Years of Solitude", "Gabriel García Márquez", 417, true);
addBook("The Great Gatsby", "F. Scott Fitzgerald", 180, false);
addBook("Brave New World", "Aldous Huxley", 288, false);
addBook("The Adventures of Tom Sawyer", "Mark Twain", 224, false);
addBook("Animal Farm", "George Orwell", 112, true);
addBook("Frankenstein", "Mary Shelley", 280, false);
addBook("The Hobbit", "J.R.R. Tolkien", 310, true);
addBook("Little Women", "Louisa May Alcott", 759, false);
addBook("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 193, true);
addBook("A Tale of Two Cities", "Charles Dickens", 341, false);
addBook("War and Peace", "Leo Tolstoy", 1440, false);
addBook("The Brothers Karamazov", "Fyodor Dostoevsky", 824, true);
addBook("The Picture of Dorian Gray", "Oscar Wilde", 254, true);
addBook("The Adventures of Sherlock Holmes", "Arthur Conan Doyle", 307, false);
addBook("The Count of Monte Cristo", "Alexandre Dumas", 1276, false);
addBook("The Hunger Games", "Suzanne Collins", 374, true);
addBook("The Da Vinci Code", "Dan Brown", 689, false);
addBook("The Girl with the Dragon Tattoo", "Stieg Larsson", 672, true);
addBook("The Road", "Cormac McCarthy", 241, true);
addBook("The Shining", "Stephen King", 447, true);
addBook("Siddhartha", "Hermann Hesse", 152, false);
addBook("A Clockwork Orange", "Anthony Burgess", 192, true);
addBook("The Name of the Rose", "Umberto Eco", 502, false);
addBook("The Grapes of Wrath", "John Steinbeck", 464, false);
addBook("Beloved", "Toni Morrison", 275, false);
addBook("The Color Purple", "Alice Walker", 295, true);
addBook("The Odyssey", "Homer", 475, true);
addBook("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 193, false);
addBook("The Handmaid's Tale", "Margaret Atwood", 311, true);
addBook("The Scarlet Letter", "Nathaniel Hawthorne", 238, false);
addBook(
  "The Strange Case of Dr. Jekyll and Mr. Hyde",
  "Robert Louis Stevenson",
  64,
  false
);
addBook("The Sun Also Rises", "Ernest Hemingway", 251, false);
addBook("The Trial", "Franz Kafka", 315, true);
addBook("Heart of Darkness", "Joseph Conrad", 72, false);
addBook("The Alchemist", "Paulo Coelho", 197, true);
addBook("The Bell Jar", "Sylvia Plath", 244, false);
addBook("The Joy Luck Club", "Amy Tan", 288, false);
addBook("The Sound and the Fury", "William Faulkner", 326, false);
addBook("The God of Small Things", "Arundhati Roy", 321, true);
addBook("The Adventures of Huckleberry Finn", "Mark Twain", 366, false);
addBook("The Divine Comedy", "Dante Alighieri", 496, true);
addBook("The Three Musketeers", "Alexandre Dumas", 704, false);
addBook("The Iliad", "Homer", 683, true);
addBook("The Canterbury Tales", "Geoffrey Chaucer", 504, false);

displayLibrary();
