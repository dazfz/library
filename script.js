class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}
let myLibrary = [];

const addBookToLibrary = (title, author, pages, read) => {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
};

// COMPLETE TABLE BODY
function displayLibrary() {
  let tableBody = document.getElementById("libraryTableBody");
  tableBody.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    // Get the book and create a new row
    let book = myLibrary[i];
    let row = document.createElement("tr");

    // Fetch book cover image from Google Books API
    let coverImg = document.createElement("img");
    let titleAuthorQuery = encodeURIComponent(book.title + " " + book.author);
    let url = `https://www.googleapis.com/books/v1/volumes?q=${titleAuthorQuery}&maxResults=1`;

    async function fetchBookCoverImage() {
      try {
        const response = await fetch(url);
        const data = await response.json();

        if (
          data.items &&
          data.items.length > 0 &&
          data.items[0].volumeInfo.imageLinks
        )
          coverImg.src = data.items[0].volumeInfo.imageLinks.thumbnail;
        else setTimeout(fetchBookCoverImage, 10000); // retry after 10 seconds
      } catch (error) {
        setTimeout(fetchBookCoverImage, 10000); // retry after 10 seconds
      }
    }
    fetchBookCoverImage();

    // Create a data cell for the book cover image and append it to the row
    let coverCell = document.createElement("td");
    //coverImg.classList.add("mx-auto");
    coverCell.appendChild(coverImg);
    row.appendChild(coverCell);

    // Create a data cell, get book info and append it to the row
    let infoCell = document.createElement("td");
    infoCell.innerHTML = `<strong>Title:</strong> ${book.title}<br><strong>Author:</strong> ${book.author}<br><strong>Total pages:</strong> ${book.pages}`;
    row.appendChild(infoCell);

    // Create a data cell for the buttons and append it to the row
    let buttonsCell = document.createElement("td");

    // Create the Read button
    let readButton = document.createElement("button");
    readButton.innerHTML = book.read
      ? '<i class="fa-solid fa-check"></i>'
      : ' <i class="fa-solid fa-x"></i>';
    readButton.onclick = () => {
      book.read = !book.read;
      readButton.innerHTML = book.read
        ? ' <i class="fa-solid fa-check"></i>'
        : ' <i class="fa-solid fa-x"></i>';
    };

    readButton.classList.add(
      "bg-blue-500",
      "hover:bg-blue-700",
      "text-white",
      "font-bold",
      "py-2",
      "px-4",
      "rounded-full",
      "mx-auto",
      "block"
    );

    // Create the Delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

    deleteButton.classList.add(
      "deleteButton",
      "bg-red-500",
      "hover:bg-red-700",
      "text-white",
      "font-bold",
      "py-2",
      "px-4",
      "rounded-full",
      "mx-auto",
      "block"
    );

    deleteButton.onclick = () => {
      myLibrary.splice(i, 1);
      displayLibrary();
    };

    buttonsCell.appendChild(readButton);
    buttonsCell.appendChild(document.createElement("br"));
    buttonsCell.appendChild(deleteButton);
    row.appendChild(buttonsCell);

    tableBody.appendChild(row);
  }
}

const openForm = () =>
  (document.getElementById("addBookModal").style.display = "block");

const closeForm = () =>
  (document.getElementById("addBookModal").style.display = "none");

const addBook = (event) => {
  event.preventDefault(); // para que no se vaya
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  addBookToLibrary(title, author, pages, false);
  closeForm();
  displayLibrary();
};

const deleteAllBooks = () => {
  myLibrary = [];
  displayLibrary();
};

// sample books
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1488, true);
addBookToLibrary("The Chronicles of Narnia", "C.S. Lewis", 767, false);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 277, false);
addBookToLibrary(
  "One Hundred Years of Solitude",
  "Gabriel García Márquez",
  417,
  true
);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, false);
addBookToLibrary("Brave New World", "Aldous Huxley", 288, false);
addBookToLibrary("The Adventures of Tom Sawyer", "Mark Twain", 224, false);
addBookToLibrary("Animal Farm", "George Orwell", 112, true);
addBookToLibrary("Frankenstein", "Mary Shelley", 280, false);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("Little Women", "Louisa May Alcott", 759, false);
addBookToLibrary(
  "The Hitchhiker's Guide to the Galaxy",
  "Douglas Adams",
  193,
  true
);
addBookToLibrary("A Tale of Two Cities", "Charles Dickens", 341, false);
addBookToLibrary("War and Peace", "Leo Tolstoy", 1440, false);
addBookToLibrary("The Brothers Karamazov", "Fyodor Dostoevsky", 824, true);
addBookToLibrary("The Picture of Dorian Gray", "Oscar Wilde", 254, true);
addBookToLibrary(
  "The Adventures of Sherlock Holmes",
  "Arthur Conan Doyle",
  307,
  false
);
addBookToLibrary("The Count of Monte Cristo", "Alexandre Dumas", 1276, false);
addBookToLibrary("The Hunger Games", "Suzanne Collins", 374, true);
addBookToLibrary("The Da Vinci Code", "Dan Brown", 689, false);
addBookToLibrary("The Girl with the Dragon Tattoo", "Stieg Larsson", 672, true);
addBookToLibrary("The Road", "Cormac McCarthy", 241, true);
addBookToLibrary("The Shining", "Stephen King", 447, true);
addBookToLibrary("Siddhartha", "Hermann Hesse", 152, false);
addBookToLibrary("A Clockwork Orange", "Anthony Burgess", 192, true);
addBookToLibrary("The Name of the Rose", "Umberto Eco", 502, false);
addBookToLibrary("The Grapes of Wrath", "John Steinbeck", 464, false);
addBookToLibrary("Beloved", "Toni Morrison", 275, false);
addBookToLibrary("The Color Purple", "Alice Walker", 295, true);
addBookToLibrary("The Odyssey", "Homer", 475, true);
addBookToLibrary(
  "The Hitchhiker's Guide to the Galaxy",
  "Douglas Adams",
  193,
  false
);
addBookToLibrary("The Handmaid's Tale", "Margaret Atwood", 311, true);
addBookToLibrary("The Scarlet Letter", "Nathaniel Hawthorne", 238, false);
addBookToLibrary(
  "The Strange Case of Dr. Jekyll and Mr. Hyde",
  "Robert Louis Stevenson",
  64,
  false
);
addBookToLibrary("The Sun Also Rises", "Ernest Hemingway", 251, false);
addBookToLibrary("The Trial", "Franz Kafka", 315, true);
addBookToLibrary("Heart of Darkness", "Joseph Conrad", 72, false);
addBookToLibrary("The Alchemist", "Paulo Coelho", 197, true);
addBookToLibrary("The Bell Jar", "Sylvia Plath", 244, false);
addBookToLibrary("The Joy Luck Club", "Amy Tan", 288, false);
addBookToLibrary("The Sound and the Fury", "William Faulkner", 326, false);
addBookToLibrary("The God of Small Things", "Arundhati Roy", 321, true);
addBookToLibrary(
  "The Adventures of Huckleberry Finn",
  "Mark Twain",
  366,
  false
);
addBookToLibrary("The Divine Comedy", "Dante Alighieri", 496, true);
addBookToLibrary("The Three Musketeers", "Alexandre Dumas", 704, false);
addBookToLibrary("The Iliad", "Homer", 683, true);
addBookToLibrary("The Canterbury Tales", "Geoffrey Chaucer", 504, false);

displayLibrary();
