import { useState, useEffect } from "react";
import { Container, Alert, Card, Button } from "react-bootstrap";

export const Completed = ({ books, fetchFunction }) => {
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const filteredBooks = books.filter((book) => book.statusId === 1);
    setCompleted(filteredBooks);
  }, [books]);

  const deleteBook = (book) => {
    return fetch(`http://localhost:8088/books/${book.id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(fetchFunction)

  }

  if (completed.length > 0) {
    return (
      <article style={{ display: "flex", flexDirection: "row" }}>
        {completed.map((book) => {
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
                  <Button variant="danger" style={{marginTop: "1.5%"}}
                    onClick={(e) => {
                      deleteBook(book)
                    }}
                  >Delete</Button>
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
          <Alert.Heading>You Have No Completed Books</Alert.Heading>
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
