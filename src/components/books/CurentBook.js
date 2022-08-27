import { useState, useEffect } from "react";
import { Container, Alert, Card } from "react-bootstrap";
import { CompletedButton } from "./CompletedButton";

// To DO
//     X : create a visual display/card of the book
//     X : create a button that adds a selected book to state, use that state to populate the visual display/card
//     X : figure out credentials for api since it will be a private bookshelf
//      : research working with volumes and bookshelves in the api docs. How to store data once it's saved.
//     X : button that marks the book as read and saves the book to library

export const CurrentBook = () => {
  const [current, setCurrent] = useState({});

  const localMybraryUser = localStorage.getItem("mybrary_user");
  const mybraryUserObject = JSON.parse(localMybraryUser);

  useEffect(() => {
    fetch(
      `http://localhost:8088/books?statusId=3&&userId=${mybraryUserObject.id}`
    )
      .then((response) => response.json())
      .then((bookObject) => {
        const book = bookObject[0];
        setCurrent(book);
      });
  }, []);

  if (current) {
    return (
      <Card
        className="wholeCurrentCard"
        style={{ width: "18rem", color: "#2D4B4D", border: "0px", marginTop: "30px" }}>
        <h3
          className="currentHeading"
          style={{
            display: "flex",
            justifyContent: "center"
          }}>
          Currently Reading
        </h3>
        <Card.Img
          src={current.bookCover}
          style={{
            width: "75%",
            height: "fit-content",
            marginLeft: "12.5%",
            marginTop: "6%",
          }}/>
        <Card.Body style={{ marginTop: "0px" }}>
          <h5 className="title">{current.title}</h5>
          <Card.Text>
            <div className="author" style={{ textDecoration: "underline" }}>
              {current.author}
            </div>
            <div>
              {current.publisher} {current.publishedDate}
            </div>
          </Card.Text>
          <div className="currentButtons">
            <div className="linkInfo">
              <a href={current.infoLink} target="_blank" className="link-success info">
                More Info
              </a>
              <a
                href="/library"
                className="link-success info"
                style={{ marginLeft: "40px" }}
              >
                View all books
              </a>
            </div>
            <CompletedButton current={current}
              setCurrent={setCurrent} />
          </div>
        </Card.Body>
      </Card>
    );
  } else {
    return (
      <section style={{marginTop: '175px', width: "18rem", color: "#2D4B4D", border: "0px"}}>
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
              style={{ display: "flex", justifyContent: "center" }}
            >
              Find Books
            </a>
          </p>
        </Alert>
      </section>
    );
  }
};
