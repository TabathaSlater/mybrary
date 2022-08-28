import { useState, useEffect } from "react";
import { Container, Alert} from "react-bootstrap";
import { SortByNewCard } from "./SortByNewCard";
import { SortByOldCard } from "./SortByOldCard";
import { UnsortedCompleteBooks } from "./UnsortedCompleteBooks";

export const CompletedBooks = ({ books, fetchFunction }) => {
  //state for completed books from fetch, as well as a property for sorting
  const [completed, setCompleted] = useState({
    completed: [],
    sortBooks: ""
  });
  //state for books once sorted
  const [sortedBooks, setSortedBooks] = useState("")

  //useEffect to watch sortedBooks for changes to prompt display of sorted books
  useEffect(() => {
    const newState = { ...completed };
    newState.sortBooks = sortedBooks;
    setCompleted(newState);
  }, [sortedBooks]);

  //_____Sorting of books by date starts here___________________
  const sortNew = [...completed.completed].sort((objA, objB) => {
    return parseInt(objB.dateTime - objA.dateTime)
  });
  console.log(sortNew)

  const sortOld = [...completed.completed].sort((objA, objB) => {
    return parseInt(objA.dateTime - objB.dateTime)
  });
  //______Sorting of books ends here_______________________________

  //useEffect to grab only books with statusId for completed and set those books to state
  useEffect(() => {
    const filteredBooks = books.filter((book) => book.statusId === 1);
    setCompleted({ completed: filteredBooks });
  }, [books]);

  //Function responsible for deleting a book from database after deleteButton click and refreshing state with fetchFunction
  const deleteBook = (book) => {
    return fetch(`http://localhost:8088/books/${book.id}`, {
      method: "DELETE"
    })
      .then(fetchFunction)

  }

  //Conditional for displaying book cards depending on sort state, or showing a prompt if there are no complete books
  if (completed.completed.length > 0) {
    if (completed.sortBooks === "Newest") {
      return (
        <SortByNewCard
          setSortedBooks={setSortedBooks}
          sortNew={sortNew}
          deleteBook={deleteBook} />
      )
    } else if (completed.sortBooks == "Oldest") {
      return (
        <SortByOldCard
          setSortedBooks={setSortedBooks}
          sortOld={sortOld}
          deleteBook={deleteBook} />
      )
    } else if (!completed.sortBooks || completed.sortBooks == "Sort") {
      return (
        <UnsortedCompleteBooks
          setSortedBooks={setSortedBooks}
          completed={completed}
          deleteBook={deleteBook} />
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
              style={{ display: "flex", justifyContent: "flex-start" }}>
              Find Books
            </a>
          </p>
        </Alert>
      </Container>
    );
  }
}
