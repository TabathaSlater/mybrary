import { useState, useEffect } from "react";
import { Container, Alert} from "react-bootstrap";
import { WantToReadCard } from "./WantToReadCard";

//Component responsible for want to read section of library
export const WantToRead = ({ books, fetchFunction }) => {
  //want is the state for books marked as want to read in the database
  const [want, setWant] = useState([]);

  //filter general books array for only books marked as want to read; watch books state from parent for any changes to update list
  useEffect(() => {
    const filteredBooks = books.filter((book) => book.statusId === 2);
    setWant(filteredBooks);
  }, [books]);

  //Conditional to show want to read book cards if the books exist, and an alert if they do not
  if (want.length > 0) {
    return (

      <WantToReadCard 
      want={want}
      setWant={setWant}
      fetchFunction={fetchFunction}/>
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
              className="link-success library_find_link"
            >Find Books
            </a>
          </p>
        </Alert>
      </Container>
    );
  }
};
