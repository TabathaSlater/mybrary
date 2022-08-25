import { useState, useEffect } from "react";
import { Container, Alert, Card } from "react-bootstrap";
import { AddToCurrent } from "./AddToCurrentButton";

export const WantToRead = ({ books, fetchFunction }) => {
  const [want, setWant] = useState([]);

  useEffect(() => {
    const filteredBooks = books.filter((book) => book.statusId === 2);
    setWant(filteredBooks);
  }, [books]);

  if (want.length > 0) {
    return (
      <article style={{ display: "flex", flexDirection: "row" }}>
        {want.map((book) => {
          return (
            <Card
              className="Card"
              style={{
                width: "13rem",
                height: "35rem",
                color: "#2D4B4D",
                border: "0px",
                margin: "1%"
              }}
              key={book.id}
            >
              <Card.Img
                src={book.bookCover}
                style={{
                  width: "75%",
                  height: "14rem",
                  marginLeft: "12.5%",
                  marginTop: "6%",
                }}
              />
              <Card.Body style={{ marginTop: "0px" }}>
                <h5
                  className="title"
                  style={{ marginTop: "1.5%", marginBottom: "3%" }}
                >
                  {book.title}
                </h5>
                <Card.Text>
                  <div
                    className="author"
                    style={{ textDecoration: "underline" }}
                  >
                    {book.author}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                      {book.publisher}
                    </div><div>
                      {book.publishedDate}
                    </div></div>
                </Card.Text>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "column",
                  }}
                >
                  <a href={book.infoLink} className="link-success info">
                    More Info
                  </a>
                  <AddToCurrent
                    book={book}
                    setWant={setWant}
                    fetchFunction={fetchFunction} />
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </article>
    );
  } else {
    return (
      <Container>
        <Alert variant="secondary">
          <Alert.Heading>No Books Waiting to be Read</Alert.Heading>
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
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              Find Books
            </a>
          </p>
        </Alert>
      </Container>
    );
  }
};
