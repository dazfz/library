import { myLibrary, deleteBook } from "./library.js";

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
      deleteBook(i);
      displayLibrary();
    };

    buttonsCell.appendChild(readButton);
    buttonsCell.appendChild(document.createElement("br"));
    buttonsCell.appendChild(deleteButton);
    row.appendChild(buttonsCell);

    tableBody.appendChild(row);
  }
}

export default displayLibrary;
