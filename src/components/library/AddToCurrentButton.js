import { Button } from "react-bootstrap";

export const AddToCurrent = ({ book, fetchFunction }) => {
  const localMybraryUser = localStorage.getItem("mybrary_user");
  const mybraryUserObject = JSON.parse(localMybraryUser);

  //Create function to post a book to the database
  const handleAddToCurrent = (event, book) => {
    event.preventDefault();

    //Create updated object to be put
    const bookToPost = {
      userId: mybraryUserObject.id,
      title: book.title,
      author: book.author,
      dateComplete: "",
      bookCover: book.bookCover,
      favorite: "",
      publisher: book.publisher,
      publishedDate: book.publishedDate,
      infoLink: book.infoLink,
      statusId: 3,
    };

    return fetch(`http://localhost:8088/books/${book.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookToPost),
    }).then((response) => response.json())
    .then(fetchFunction);
  };

  return (
    <Button
      id="currentBtn"
      style={{ margin: "1.5%" }}
      onClick={(e) => {
        handleAddToCurrent(e, book);
      }}
    >Add to Current
    </Button>
  );
};
