import { useState, useEffect } from "react";
import { SearchedBookCard } from "./SearchedBookCard";
import { SearchSort } from "./SearchSort";
import "./search.css";
import { Modal } from "react-bootstrap";
import { SearchAlert } from "./SearchAlert";

//Parent = SearchContainer
export const SearchResult = ({ bookArray, setSort }) => {
  const [taco, setTaco] = useState("");

  const localMybraryUser = localStorage.getItem("mybrary_user");
  const mybraryUserObject = JSON.parse(localMybraryUser);

  useEffect(() => {
    const newState = { ...bookArray };
    newState.sortBooks = taco;
    setSort(newState);
  }, [taco]);

  const sortNew = [...bookArray.books].sort((a, b) => {
    return parseInt(
      b.volumeInfo.publishedDate.substring(0, 4) -
        a.volumeInfo.publishedDate.substring(0, 4)
    );
  });

  const sortOld = [...bookArray.books].sort((a, b) => {
    return parseInt(
      a.volumeInfo.publishedDate.substring(0, 4) -
        b.volumeInfo.publishedDate.substring(0, 4)
    );
  });

  //State for showing alert
  const [showAlert, setShowAlert] = useState(false);
  const handleCloseAlert = () => setShowAlert(false);
  const handleShowAlert = () => setShowAlert(true);

  //Create function to post a book to the database
  const handleAddToWant = (event, book) => {
    event.preventDefault();

    //Object to be posted
    const bookToPost = {
      userId: mybraryUserObject.id,
      title: book?.volumeInfo?.title,
      author: book?.volumeInfo?.authors,
      dateComplete: "",
      bookCover: book?.volumeInfo?.imageLinks?.smallThumbnail,
      favorite: "",
      publisher: book?.volumeInfo?.publisher,
      publishedDate: book?.volumeInfo?.publishedDate,
      infoLink: book?.volumeInfo?.infoLink,
      statusId: 2,
    };

    return fetch("http://localhost:8088/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookToPost),
    })
      .then((response) => response.json())
      .then(() => {
        handleShowAlert(true);
      });
  };
  //Create function to post a book to the database
  const handleAddToCurrent = (event, book) => {
    event.preventDefault();

    //Object to be posted
    const bookToPost = {
      userId: mybraryUserObject.id,
      title: book?.volumeInfo?.title,
      author: book?.volumeInfo?.authors,
      dateComplete: "",
      bookCover: book?.volumeInfo?.imageLinks?.smallThumbnail,
      favorite: "",
      publisher: book?.volumeInfo?.publisher,
      publishedDate: book?.volumeInfo?.publishedDate,
      infoLink: book?.volumeInfo?.infoLink,
      statusId: 3,
    };

    return fetch("http://localhost:8088/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookToPost),
    })
      .then((response) => response.json())
      .then(() => {
        handleShowAlert(true);
      });
  };

  if (bookArray.books.length > 0) {
    if (bookArray.sortBooks === "Newest") {
      return (
        <article className="searchContent">
          <Modal show={showAlert}>
            <SearchAlert handleCloseAlert={handleCloseAlert} />
          </Modal>
          <div className="sort">
            <SearchSort setTaco={setTaco} />
          </div>
          <div className="list">
            {sortNew.map((book) => (
              // console.log(book),
              <SearchedBookCard
                key={book?.id}
                book={book}
                addToCurrent={handleAddToCurrent}
                addToWant={handleAddToWant}
              />
            ))}
          </div>
        </article>
      );
    } else if (bookArray.sortBooks === "Oldest") {
      return (
        <article className="searchContent">
          <Modal show={showAlert}>
            <SearchAlert handleCloseAlert={handleCloseAlert} />
          </Modal>

          <div className="sort">
            <SearchSort setTaco={setTaco} />
          </div>
          <div className="list">
            {sortOld.map((book) => (
              // console.log(book),
              <SearchedBookCard
                key={book.id}
                book={book}
                addToCurrent={handleAddToCurrent}
                addToWant={handleAddToWant}
              />
            ))}
          </div>
        </article>
      );
    } else {
      return (
        <article className="searchContent">
          <Modal show={showAlert}>
            <SearchAlert handleCloseAlert={handleCloseAlert} />
          </Modal>

          <div className="sort">
            <SearchSort setTaco={setTaco} />
          </div>
          <div className="list">
            {bookArray.books.map((book) => (
              // console.log(book),
              <SearchedBookCard
                key={book.id}
                book={book}
                addToCurrent={handleAddToCurrent}
                addToWant={handleAddToWant}
              />
            ))}
          </div>
        </article>
      );
    }
  }
};
