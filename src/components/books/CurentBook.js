import { useState } from "react"
import { Container, Alert } from "react-bootstrap"

// To DO
//      : create a visual display/card of the book
//      : create a button that adds a selected book to state, use that state to populate the visual display/card
//      : figure out credentials for api since it will be a private bookshelf
//      : research working with volumes and bookshelves in the api docs. How to store data once it's saved.
//      : button that marks the book as read and saves the book to library 

export const CurrentBook = () => {
    const [current, setCurrent] = useState({})

    if (current.length > 0) {
     return (
        "Book has been added but the card hasn't been made"
    )} else { 
        return (
        <Container>
            <Alert variant="secondary">
      <Alert.Heading>You Have No Current Books</Alert.Heading>
      <p>
        <br></br>
        Let's get some books in here! You can click the link below to find a book for your collection
      </p>
      <hr />
      <p className="mb-0">
      <a href="/search_results" class="link-success" style={{display: "flex", justifyContent: "center"}}>Find Books</a>
      </p>
    </Alert>
        </Container>
    )}
}