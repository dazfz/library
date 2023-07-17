import { addBook, clearLibrary } from "./library.js";
import displayLibrary from "./display.js";

const openForm = () =>
  (document.getElementById("addBookModal").style.display = "block");

const closeForm = () =>
  (document.getElementById("addBookModal").style.display = "none");

const submitBook = (event) => {
  event.preventDefault(); // para que no se vaya
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  addBook(title, author, pages, false);
  closeForm();
  displayLibrary();
  document.getElementById("title").value =
    document.getElementById("author").value =
    document.getElementById("pages").value =
      "";
};

const deleteAllBooks = () => {
  clearLibrary();
  displayLibrary();
};

window._form = { openForm, closeForm, submitBook, deleteAllBooks };
