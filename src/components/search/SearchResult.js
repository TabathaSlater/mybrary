import { useState, useEffect } from "react";
import { SearchedBookCard } from "./SearchedBookCard";
import { SearchSort } from "./SearchSort";
import { Modal } from "react-bootstrap";
import { SearchAlert } from "./SearchAlert";
import { SearchedByNew } from "./SearchedByNew";
import { SearchedByOld } from "./SearchedByOld";
import "./search.css";

//Parent = SearchContainer
export const SearchResult = ({ bookArray, setSort }) => {
  //poor naming. Remember to change this.
  const [taco, setTaco] = useState("");

  //grab current user info
  const localMybraryUser = localStorage.getItem("mybrary_user");
  const mybraryUserObject = JSON.parse(localMybraryUser);

  //setting state for parent component based on sorting 
  useEffect(() => {
    const newState = { ...bookArray };
    newState.sortBooks = taco;
    setSort(newState);
  }, [taco]);

  //_________sorting for books starts here_____________
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
  //_________sorting for books ends here__________________

  //State for showing alert when an action is successful
  const [showAlert, setShowAlert] = useState(false);
  const handleCloseAlert = () => setShowAlert(false);
  const handleShowAlert = () => setShowAlert(true);

  //Create function for posting book to database on click of add to want button
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


  //Create function to post a book to the database when add to current button is clicked
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


  //conditional to display books based on sort attribute
  if (bookArray.books.length > 0) {
    if (bookArray.sortBooks === "Newest") {

      return (
        <SearchedByNew
          showAlert={showAlert}
          handleCloseAlert={handleCloseAlert}
          setTaco={setTaco}
          sortNew={sortNew}
          handleAddToCurrent={handleAddToCurrent}
          handleAddToWant={handleAddToWant} />
      );
    } else if (bookArray.sortBooks === "Oldest") {

      return (
        <SearchedByOld
          showAlert={showAlert}
          handleCloseAlert={handleCloseAlert}
          setTaco={setTaco}
          sortOld={sortOld}
          handleAddToCurrent={handleAddToCurrent}
          handleAddToWant={handleAddToWant} />
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