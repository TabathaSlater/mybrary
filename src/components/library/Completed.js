import { useState, useEffect } from "react";
import { Container, Alert, Card, Button } from "react-bootstrap";
import { SortCompleted } from "./SortCompleted";

export const Completed = ({ books, fetchFunction }) => {
  const [completed, setCompleted] = useState({
    completed: [],
    sortBooks: ""
  });
  const [sortedBooks, setSortedBooks] = useState("")


  useEffect(() => {
    const newState = { ...completed };
    newState.sortBooks = sortedBooks;
    setCompleted(newState);
  }, [sortedBooks]);

  const sortNew = [...completed.completed].sort((objA, objB) => {
    objA = objA.dateComplete.split('-')
    objB = objB.dateComplete.split('-')
    return(objB[2] - objA[2] || objB[1] - objA[1] || objB[0] - objA[0])
  });
  console.log(sortNew)

  const sortOld = [...completed.completed].sort((objA, objB) => {
    objA = objA.dateComplete.split('-')
    objB = objB.dateComplete.split('-')
    return(objA[2] - objB[2] || objA[1] - objB[1] || objA[0] - objB[0])
  });
  console.log(sortOld)

  useEffect(() => {
    const filteredBooks = books.filter((book) => book.statusId === 1);
    setCompleted({ completed: filteredBooks });
  }, [books]);

  const deleteBook = (book) => {
    return fetch(`http://localhost:8088/books/${book.id}`, {
      method: "DELETE"
    })
      // .then(response => response.json())
      .then(fetchFunction)

  }

  console.log(completed.completed)

  if (completed.completed.length > 0) {
    if (completed.sortBooks === "Newest") {
      return (
        <article>
          <div style={{marginLeft: "15px", marginTop: "15px"}}>
          <SortCompleted setSortedBooks={setSortedBooks} />
          </div>
          <div style={{display: "flex", flexDirection: "row"}}>
          {sortNew.map((book) => {
            return (
              <Card
                className="Card"
                style={{
                  width: "13rem",
                  height: "35rem",
                  color: "#2D4B4D",
                  border: "0px",
                  margin: "1%",
                  marginTop: "20px"
                }}
                key={book.id}>
                <Card.Img
                  src={book.bookCover}
                  style={{
                    width: "75%",
                    height: "14rem",
                    marginLeft: "12.5%",
                    marginTop: "6%",
                  }} />
                <Card.Body style={{ marginTop: "0px" }}>
                  <h5
                    className="title"
                    style={{ marginTop: "1.5%", marginBottom: "3%" }}>
                    {book.title}
                  </h5>
                  <Card.Text>
                    <div
                      className="author"
                      style={{ textDecoration: "underline" }}>
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
                    }}>
                    <a href={book.infoLink} className="link-success info">
                      More Info
                    </a>
                    <Button variant="danger" style={{ marginTop: "1.5%" }}
                      onClick={(e) => {
                        deleteBook(book)
                      }}
                    >Delete</Button>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
          </div>
        </article>
      )
    } else if (completed.sortBooks == "Oldest") {
      return (
      <article>
      <div style={{marginLeft: "15px", marginTop: "15px"}}>
      <SortCompleted setSortedBooks={setSortedBooks} />
      </div>
      <div style={{display: "flex", flexDirection: "row"}}>
      {sortOld.map((book) => {
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
            key={book.id}>
            <Card.Img
              src={book.bookCover}
              style={{
                width: "75%",
                height: "14rem",
                marginLeft: "12.5%",
                marginTop: "6%",
              }} />
            <Card.Body style={{ marginTop: "0px" }}>
              <h5
                className="title"
                style={{ marginTop: "1.5%", marginBottom: "3%" }}>
                {book.title}
              </h5>
              <Card.Text>
                <div
                  className="author"
                  style={{ textDecoration: "underline" }}>
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
                }}>
                <a href={book.infoLink} className="link-success info">
                  More Info
                </a>
                <Button variant="danger" style={{ marginTop: "1.5%" }}
                  onClick={(e) => {
                    deleteBook(book)
                  }}
                >Delete</Button>
              </div>
            </Card.Body>
          </Card>
        );
      })}
      </div>
    </article>
    )} else if (!completed.sortBooks) {
      return (
        <article>
          <div style={{marginLeft: "15px", marginTop: "15px"}}>
          <SortCompleted setSortedBooks={setSortedBooks} />
          </div>
          <div style={{display: "flex", flexDirection: "row"}}>
          {completed.completed.map((book) => {
            return (
              <Card
                className="Card"
                style={{
                  width: "13rem",
                  height: "35rem",
                  color: "#2D4B4D",
                  border: "0px",
                  margin: "1%",
                  marginTop: "20px"}}
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
                    <Button variant="danger" style={{ marginTop: "1.5%" }}
                      onClick={(e) => {
                        deleteBook(book)
                      }}
                    >Delete</Button>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
          </div>
        </article>
      )
    }
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
}
