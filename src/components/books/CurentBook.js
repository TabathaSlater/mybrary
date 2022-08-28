import { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import { HomePageCurrentCard } from "./HomePageCurrentCard";

// To DO
//     X : create a visual display/card of the book
//     X : create a button that adds a selected book to state, use that state to populate the visual display/card
//     X : figure out credentials for api since it will be a private bookshelf
//      : research working with volumes and bookshelves in the api docs. How to store data once it's saved.
//     X : button that marks the book as read and saves the book to library

//Responsible for getting the first current book user has set and displaying on home page
export const CurrentBook = () => {
  const [current, setCurrent] = useState({});

  //Get current user info
  const localMybraryUser = localStorage.getItem("mybrary_user");
  const mybraryUserObject = JSON.parse(localMybraryUser);

  //Get current books related to the current user
  useEffect(() => {
    fetch(
      `http://localhost:8088/books?statusId=3&&userId=${mybraryUserObject.id}`
    )
      .then((response) => response.json())
      .then((bookObject) => {
        const book = bookObject[0];
        //set current book to the first book the user has started reading/ first object in array
        setCurrent(book);
      });
  }, []);

  //conditional to show the current book if there is one, or a prompt to find a book
  if (current) {
    return (

      <HomePageCurrentCard
        current={current}
        setCurrent={setCurrent} />
    );

  } else {
    return (
      <section
        style={{
          marginTop: '175px',
          width: "18rem",
          color: "#2D4B4D",
          border: "0px"
        }}>
        <Alert variant="secondary">
          <Alert.Heading>You Have No Current Books</Alert.Heading>
          <p>
            <br></br>
            Let's get some books in here! You can click the link below to find a
            book for your collection
          </p>
          <hr />
          <p className="mb-0">
            <a
              href="/search_results"
              className="link-success"
              style={{
                display: "flex",
                justifyContent: "center"
              }}>
              Find Books
            </a>
          </p>
        </Alert>
      </section>
    );
  }
};
