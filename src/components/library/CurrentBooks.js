import { useState, useEffect } from "react";
import { Container, Alert} from "react-bootstrap";
import { CurrentBookCard } from "./CurrentBookCard";

//Component to build the Current Books section of the library
export const CurrentBooks = ({ books, fetchFunction }) => {
  //state for books that are marked with statusId for a current book
  const [current, setCurrent] = useState([]);

  //useEffect to filter general books array to only current books, as well as to watch state of books from parent component for changes/updates (Library.js)
  useEffect(() => {
    const filteredBooks = books.filter((book) => book.statusId === 3);
    setCurrent(filteredBooks);
  }, [books]);


  //Conditional to return current books, if they exist, and to return a prompt if not
  if (current.length > 0) {
    return (
      <CurrentBookCard
        current={current}
        fetchFunction={fetchFunction} />
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
              className="link-success library_find_link"
            >Find Books
            </a>
          </p>
        </Alert>
      </Container>
    );
  }
};
