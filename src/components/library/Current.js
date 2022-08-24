import { useState, useEffect } from "react";
import { Container, Alert, Card } from "react-bootstrap";
import { LibraryCompletedButton } from "./LibraryCompletedButton";

export const Current = ({ books, setBooks }) => {
  const [current, setCurrent] = useState([]);
  useEffect(() => {
    const filteredBooks = books.filter((book) => book.statusId === 3);
    setCurrent(filteredBooks);
  }, [books]);

  if (current.length > 0) {
    return (
      <article style={{ display: "flex", flexDirection: "row" }}>
        {current.map((book) => {
          return (
            <Card
              className="Card"
              style={{
                width: "13rem",
                color: "#2D4B4D",
                border: "0px",
                margin: "1%",
              }}
              key={book.id}
            >
              <Card.Img
                src={book.bookCover}
                style={{
                  width: "75%",
                  height: "fit-content",
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
                  <div>
                    {book.publisher} {book.publishedDate}
                  </div>
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
                  <LibraryCompletedButton
                    current={book}
                    setCurrent={setCurrent}
                    setBooks={setBooks}
                    books={books}
                  />
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
